'use client'

import Image from 'next/image'
import React, { useRef } from 'react'
import { Button } from './ui/button'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Counter from './Counter'
import FlipTimer from './FlipTimer'

export default function Intro() {
  const containerRef = useRef<HTMLDivElement>(null)

  //! No scope
  function handleClick() {
    const tl = gsap.timeline()

    tl.to('.transition-block', {
      width: '100%',
      stagger: 0.05,
      duration: 1,
      ease: 'circ.inOut'
    })
      .to(
        containerRef.current,
        {
          x: 100,
          duration: 2,
          ease: 'circ.inOut'
        },
        '<'
      )
      .set(containerRef.current, {
        display: 'none'
      })
      .set('.main-container', {
        opacity: 1
      })
      .to('.transition-block', {
        width: '0%',
        stagger: 0.05,
        duration: 1,
        ease: 'circ.inOut'
      })
      .from(
        '.main-form',
        {
          x: 50,
          duration: 2,
          ease: 'circ.inOut'
        },
        '-=1.5'
      )
  }

  useGSAP(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      y: 50,
      delay: 8,
      duration: 1.5,
      ease: 'circ.inOut'
    })
  })

  return (
    <div
      className="fixed inset-0 bg-foreground z-10 h-full-screen overflow-hidden"
      ref={containerRef}
    >
      <div className="noise absolute z-10"></div>
      <video
        autoPlay
        muted
        loop
        className="w-full h-full-screen object-fill sm:object-cover fixed inset-0"
        src={require('../../public/video/intro_mobile.mp4')}
      />
      <div className="flex justify-center items-end w-full h-full-screen absolute inset-0 pb-20">
        <div className="md:w-1/3 min-w-[300px] p-10 bg-black/50 rounded-xl backdrop-blur-xl border border-primary">
          <div className="absolute left-1/2 -translate-x-1/2 -translate-y-16">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-primary border-2">
              <Image
                src={'/img/logo.jpg'}
                fill
                priority
                sizes="(100vw, 100vh)"
                alt={'logo'}
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="container">
        <FlipTimer />
      </div>
          {/* <Button
            className="font-bold italic mt-8 w-full uppercase"
            onClick={handleClick}
          >
            Get Started
          </Button> */}
        </div>
      </div>
    </div>
  )
}
