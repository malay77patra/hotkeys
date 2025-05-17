import { redis } from '@/lib/redis';
import { rateLimiter } from '@/lib/ratelimit';

export async function GET() {
    const count = await redis.get('likes') || 0;
    return Response.json({ likes: count });
}

export async function POST(request) {
    const ip = request.ip ?? request.headers.get('x-forwarded-for') ?? '127.0.0.1';

    const { success, limit, reset, remaining } = await rateLimiter.limit(`likes_${ip}`);

    if (!success) {
        return new Response('Too Many Requests', {
            status: 429,
            headers: {
                'X-RateLimit-Limit': limit.toString(),
                'X-RateLimit-Remaining': remaining.toString(),
                'X-RateLimit-Reset': reset.toString(),
                'Content-Type': 'text/plain',
            },
        });
    }

    await redis.incr('likes');
    const count = await redis.get('likes');

    return new Response(JSON.stringify({ likes: count }), {
        status: 200,
        headers: {
            'X-RateLimit-Limit': limit.toString(),
            'X-RateLimit-Remaining': remaining.toString(),
            'X-RateLimit-Reset': reset.toString(),
            'Content-Type': 'application/json',
        },
    });
}