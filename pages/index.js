import Head from "next/head"

import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Snap from "@/components/Snap"

export default function Home() {
  return (
    <>
      <Head>
        <title>Travis Scott</title>
        <meta name="description" content="Travis Scott Hero Design" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="overflow-x-hidden select-none">
        <Header />
        <Hero />
        {/* tech demo */}
        <Snap />
      </main>
    </>
  )
}
