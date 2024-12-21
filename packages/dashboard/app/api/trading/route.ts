import { type NextRequest } from 'next/server';

export async function GET() {
  const response = await fetch('http://localhost:3000/paper-trading/status');
  const data = await response.json();
  return Response.json(data);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const response = await fetch('http://localhost:3000/paper-trading/trade', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return Response.json(data);
} 