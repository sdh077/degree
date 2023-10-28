import items from '../items'

export async function GET(request: Request, { params }: { params: { ins: string } }) {
  const body = JSON.stringify(items.filter(item => item.tag.includes('0')));
  return new Response(body)
}
