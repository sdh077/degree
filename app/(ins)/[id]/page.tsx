export const metadata = {
  title: 'Home - Creative',
  description: 'Page description',
}

import Hero from '@/components/hero'
import sample1 from '@/public/images/test/sample1.webp'
import sample2 from '@/public/images/test/sample2.jpeg'
import sample3 from '@/public/images/test/sample3.jpeg'
export default async function Home({ params }) {
  return (
    <>
      <Hero img={sample1} />
      <Hero img={sample2} />
      <Hero img={sample3} />
    </>
  )
}
