import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    
    // Log performance metrics
    console.log('Performance Metric:', {
      name: data.name,
      value: data.value,
      target: data.target,
      timestamp: new Date().toISOString(),
      passed: data.value < data.target
    });
    
    // In production, send to your analytics service
    // await sendToAnalytics(data);
    
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to log metric' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};