export async function GET() {
  const response = await fetch('http://localhost:3000/price');
  const data = await response.json();
  return Response.json(data);
} 