import React from "react"
import Hero from "./Hero"

const Snap = () => {
  return (
    <div className="snap-y snap-mandatory overflow-auto overflow-x-hidden h-screen w-screen">
      <div className="flex  snap-start  h-screen w-screen items-center justify-center bg-red-500 text-9xl">
        1
      </div>
      <div className="flex snap-start   h-screen w-screen   items-center justify-center bg-blue-500 text-9xl">
        2
      </div>
      <div className="flex snap-start   h-screen w-screen   items-center justify-center bg-teal-800 text-9xl">
        3
      </div>
      <div className="flex snap-start   h-screen w-screen items-center justify-center bg-yellow-600 text-9xl">
        4
      </div>
      <div className="flex snap-start   h-screen w-screen items-center justify-center bg-indigo-500 text-9xl">
        5
      </div>
    </div>
  )
}

export default Snap
