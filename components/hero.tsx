import Image from 'next/image'
import Link from 'next/link'

import HeroImage from '@/public/images/hero-image.png'

export default function Hero({ img }) {
  return (
    <section className="relative">
      {/* Bg */}
      <div className="mx-auto px-4 sm:px-6">
        <div className="pt-20 pb-2">
          {/* Hero content */}
          <div className=" mx-auto">
            {/* Image */}
            <div
              className=""
              data-aos="fade-left"
              data-aos-duration="1100"
            >
              <Image src={img} className="mx-auto" width={1280} priority alt="Hero Illustration" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}