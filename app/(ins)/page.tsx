export const metadata = {
  title: 'Home - Creative',
  description: 'Page description',
}

import CardWrap from '@/components/main/card-wrap'
async function getData(ins) {
  const res = await fetch(`http://localhost:3000/api/items`, { cache: 'no-store' })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
export default async function Home({ params }) {
  const data = await getData(params.ins)
  return (
    <>
      {/* <Hero /> */}
      <CardWrap data={data} />
      {/* <Carousel />
      <Creatives />
      <Pricing />
      <Testimonials />
      <Faqs />
      <Blog />
      <Cta /> */}
    </>
  )
}
