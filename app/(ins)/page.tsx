import CardWrap from '@/components/main/card-wrap'
import data from '@/app/api/items/items'
export const metadata = {
  title: 'Home - Creative',
  description: 'Page description',
}
export default async function Home({ params }) {
  // const data = []
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
