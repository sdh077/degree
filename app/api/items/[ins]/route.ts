import { NextRequest } from 'next/server'
import items from '../items'

export async function GET(request: NextRequest, { params }: { params: { ins: string } }) {
  console.log('2', params.ins)
  return Response.json(items.filter(item => item.tag.includes('0')))
}
