import React from 'react'
import Mascot from '@/assets/images/hello_tiger.webp'
import BoundaryGreen from '@/assets/images/boundary.webp'
import Blue from '@/assets/images/blue.webp'
import Bg from '@/assets/images/bg.webp'
import texture from '@/assets/images/texture.webp'
import EllipeBG from '@/assets/images/Ellipse.webp'

const Banner = () => {
  return (
    <div className=" flex flex-col overflow-hidden p-10 py-20 lg:px-20 gap-8 items-center justify-center min-h-screen bg-[#171A23]">
       <div 
        className="absolute top-24 md:top-28 lg:top-36 xl:top-40 left-5 md:left-20 lg:left-32 text-white z-10 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl px-4 md:px-8 p-3 md:p-4 lg:p-6 rounded-xl"
        style={{
          background:
            'linear-gradient(107.29deg, rgba(0, 147, 208,0.30) 5.8%, rgba(5, 226, 189,0.30) 86.5%)',
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 2rem)',
        }}
        >
       <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed text-justify">
        IT Meet 2024 brings an exciting mix of events, including KU Hackfest, TEDx, All Nepal IT Cup, EmpowerHer, and Alumni Meet. From tech competitions like Code Camp, AI Competition, and Line Following Robot to fun activities like AR Treasure Hunt and Gaming Events (DOTA 2, PUBG, FIFA, Valorant, Mobile Legends, Arcade, Clash Royale), there’s something for everyone. Networking and career opportunities include the Career Fair and Panel Discussions, along with social initiatives like Blood Donation and Acoustic Night for a well-rounded experience.
        </p>
      </div>
      <div className="absolute bottom-0 left-5 z-10 w-6/12 max-w-3xl">
        <div className="w-full h-24 sm:h-32 md:h-40 lg:h-48 xl:h-56 shadow-lg relative overflow-hidden">
          <div
            className="w-full h-full absolute top-0 left-0"
            style={{
              background:
                'linear-gradient(107.29deg, rgba(0, 147, 208,0.50) 5.8%, rgba(5, 226, 189,0.50) 86.5%)',
              clipPath: 'polygon(2rem 0, 100% 0, 100% 100%, 0 100%, 0 2rem)',
            }}
          ></div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white">
              Events
            </h2>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none z-0">
        <img src={texture} alt="texture" className="w-full h-full object-cover" />
        <div className="bg-pattern opacity-50 h-full w-full"></div>
      </div>

      <div className="absolute inset-0 pointer-events-none z-5">
        <img src={Bg} alt="background glow" className="w-full h-full object-cover" />
      </div>

      <div className="absolute top-0 left-0 z-5">
        <img src={Blue} alt="blue" className="object-contain w-[50vw] max-w-[700px]" />
      </div>
      <div className="absolute bottom-0 right-0 z-5">
        <img
          src={EllipeBG}
          alt="bgellipse"
          className="object-contain w-[300px] sm:w-[400px] md:w-[450px] lg:w-[500px] xl:w-[600px]"
        />
      </div>

      <div className="absolute bottom-0 right-0 z-10">
        <img
          src={Mascot}
          alt="mascot"
          className="object-contain w-[190px] sm:w-[260px] md:w-[320px] lg:w-[390px] xl:w-[500px]"
        />
      </div>

      <div className="absolute bottom-0 right-0 z-10">
        <img
          src={BoundaryGreen}
          alt="boundary"
          className="object-contain w-[100px] sm:w-[160px] md:w-[190px] lg:w-[230px] xl:w-[280px]"
        />
      </div>
    </div >
  )
}

export default Banner
