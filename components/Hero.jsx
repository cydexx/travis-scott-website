import Image from "next/image"
import React from "react"
import bg from "/./assets/bg.png"
import travis from "/./assets/travis.png"
const Hero = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center font-salatiga">
      <Image className="-z-10" src={bg} alt="bg" quality="100" layout="fill" />
      <div className=" items-center justify-center h-screen">
        <div className="w-full ">
          <Image
            className="z-20  object-contain pt-20"
            src={travis}
            alt="travis"
            quality="100"
            // width={200}
            // height={screen}
            layout="fill"
          />
        </div>
      </div>
      {/* ! 2d effecti değişmek istersen undertext'e de tracking-widest ver */}
      <div className="z-10 absolute lg:pt-20 md:pt-20 pt-40 w-full h-full items-center justify-center text-center tracking-widest">
        <h1 className="lg:text-[150px] md:text-[100px] sm:text-[75px] text-[75px] text-main-color ">
          TRAVIS SCOTT
        </h1>
        <h1 className="lg:text-[150px] md:text-[100px] sm:text-[75px] text-[75px] text-main-color ">
          TRAVIS SCOTT
        </h1>
        <h1 className="lg:text-[150px] md:text-[100px] sm:text-[75px] text-[75px] text-main-color ">
          TRAVIS SCOTT
        </h1>
      </div>
      <div className="z-30 absolute lg:pt-20 md:pt-20 pt-40 w-full h-full items-center justify-center text-center">
        <h1 className="font-outline lg:text-[150px] md:text-[100px] sm:text-[75px] text-[75px] text-transparent ">
          TRAVIS SCOTT
        </h1>
        <h1 className="font-outline  lg:text-[150px] md:text-[100px] sm:text-[75px] text-[75px] text-transparent ">
          TRAVIS SCOTT
        </h1>
        <h1 className="font-outline  lg:text-[150px] md:text-[100px] sm:text-[75px] text-[75px] text-transparent ">
          TRAVIS SCOTT
        </h1>
      </div>
    </div>
  )
}

export default Hero
