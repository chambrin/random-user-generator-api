import Image from 'next/image'
import Hero from "@/components/Landing/hero";

export default function Home() {
  return (
    <main className="">
        <Hero />
      <button className='btn solid warn'>
        Hello World!
      </button>
    </main>
  )
}
