import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { category, location } = await req.json();
    const apiKey = process.env.YELP_API_KEY;

    const url = `https://api.yelp.com/v3/businesses/search?term=${category}&location=${location}&limit=5`;

    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    const data = await res.json();

    // Return top 5 businesses with name, address, rating, and image
    const simplified = data.businesses.slice(0, 5).map((b: any) => ({
      name: b.name,
      address: b.location.address1,
      rating: b.rating,
      image_url: b.image_url,
    }));

    return NextResponse.json({ results: simplified });
  } catch (error: any){
    console.error('Error fetching data from Yelp API:', error);
    return NextResponse.json({ error: 'Failed to fetch data from Yelp API' }, { status: 500 });
  }
}
