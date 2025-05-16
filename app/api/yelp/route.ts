import { NextRequest, NextResponse } from 'next/server';
import { rateLimiter } from '@/lib/rateLimiter'; // Adjust path as needed

export async function POST(req: NextRequest) {
  // Identify the IP address (fallback to 'unknown')
  const ip = req.headers.get('x-forwarded-for') || 'unknown';

  // Apply the rate limiter (e.g. 5 requests per 1 minute per IP)
  const limit = rateLimiter({
    key: `yelp:${ip}`,
    rule: {
      windowMs: 60 * 1000,    // 1-minute window
      maxRequests: 5,         // 5 allowed requests
    },
  });

  // If the IP is over the limit, return a 429 response
  if (!limit.allowed) {
    return NextResponse.json(
      {
        error: 'Rate limit exceeded. Please try again later.',
        retryAfter: `${limit.retryAfter} seconds`,
      },
      { status: 429 }
    );
  }

  // Continue with Yelp logic
  const { category, location } = await req.json();
  const apiKey = process.env.YELP_API_KEY;

  const url = `https://api.yelp.com/v3/businesses/search?term=${category}&location=${location}&limit=5`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });

  const data = await res.json();

  type YelpBusiness = {
    name: string;
    location: { address1: string };
    rating: number;
    image_url: string;
  };

  const simplified = (data.businesses as YelpBusiness[]).slice(0, 5).map((b: YelpBusiness) => ({
    name: b.name,
    address: b.location.address1,
    rating: b.rating,
    image_url: b.image_url,
  }));

  return NextResponse.json({ results: simplified });
}
