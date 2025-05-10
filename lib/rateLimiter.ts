// A type that defines what a rate-limiting rule should look like
export type Rule = {
    windowMs: number;      // Time window in milliseconds
    maxRequests: number;   // Max number of allowed requests in that window
  };
  
  // A type that stores usage info for a single key (IP, user, etc.)
  type Record = {
    count: number;         // How many requests made so far
    expiresAt: number;     // When the current rate limit window ends
  };
  
  // In-memory store to track request history per key
  const rateLimitStore = new Map<string, Record>();
  
  // Main rate limiter function
  export function rateLimiter({
    key,
    rule,
  }: {
    key: string;           // Unique identifier (e.g., IP or user ID)
    rule: Rule;            // Rule defining the rate limit
  }): { allowed: boolean; retryAfter: number } {
    const now = Date.now();               // Current time
    const record = rateLimitStore.get(key); // Retrieve past record if any
  
    // If there's no record or the window has expired, reset the count
    if (!record || record.expiresAt < now) {
      rateLimitStore.set(key, {
        count: 1,
        expiresAt: now + rule.windowMs,
      });
      return { allowed: true, retryAfter: 0 };
    }
  
    // If under the limit, increment the count and allow
    if (record.count < rule.maxRequests) {
      record.count += 1;
      return { allowed: true, retryAfter: 0 };
    }
  
    // If over the limit, calculate retry time in seconds
    const retryAfter = Math.ceil((record.expiresAt - now) / 1000);
    return { allowed: false, retryAfter };
  }
  