import { redis } from '@/lib/redis';

export async function GET() {
    const count = await redis.get('likes') || 0;
    return Response.json({ likes: count });
}

export async function POST() {
    await redis.incr('likes');
    const count = await redis.get('likes');
    return Response.json({ likes: count });
}
