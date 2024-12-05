'use client'

import { millisecondToMinutes } from '@/lib/utils'
import { TIME_LEFT } from '@/store'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import React, { useRef } from 'react'
import Marquee from 'react-fast-marquee'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const timeLeftInMinutes = millisecondToMinutes(TIME_LEFT)

  useGSAP(
    () => {
      gsap.from('.animation-block', {
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: true
        },
        opacity: 0,
        scale: 1.1,
        y: 100,
        stagger: 0.05,
        duration: 1
      })
    },
    { scope: containerRef }
  )

  return (
    <div className="mt-16">
      <div className="h-[28px]">
        <Marquee autoFill className="overflow-hidden -z-10 bg-foreground">
          <span className="text-xl font-semibold tracking-tight uppercase italic text-background">
            &nbsp;About It &nbsp; ● &nbsp;
          </span>
        </Marquee>
      </div>
      <div className="container flex" ref={containerRef}>
        <div className="flex-1">
          <div className="leading-7 mt-6 max-w-xl space-y-5">
            <div className="flex gap-5">
              <div className="border border-foreground px-2 py-4 rounded-xl flex-[3] animation-block">
                <p className="leading-7 [&:not(:first-child)]:mt-6 text-justify indent-4">
                  If you're reading this, I'm already outside waiting for you.
                  If you're up for a simple{' '}
                  <span className="bg-foreground text-background px-1 font-semibold">
                    walk and a coffee
                  </span>
                  , just come down.
                </p>
              </div>
              <div className="flex-1 border border-foreground px-2 py-4 rounded-xl flex justify-center items-center animation-block bg-foreground dark:bg-background">
                <Image
                  src="/svg/coffee.svg"
                  width={50}
                  height={50}
                  alt="hand"
                />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex-1 border border-foreground px-2 py-4 rounded-xl flex justify-center items-center animation-block bg-foreground dark:bg-background">
                <Image
                  src="/svg/timer.svg"
                  width={50}
                  height={50}
                  alt="timer"
                />
              </div>
              <div className="border border-foreground px-2 py-4 rounded-xl flex-[4] animation-block">
                <p className="leading-7 [&:not(:first-child)]:mt-6 text-justify indent-4 flex-[3]">
                  <span className="underline underline-offset-4">
                    <span className="font-bold">↱ </span>Why am I waiting?
                  </span>
                  <br />
                  {` I've set a timer for ${timeLeftInMinutes} minutes. If you feel like it, get ready and come out. If not, maybe next time. After the ${timeLeftInMinutes} minutes are up and you haven't come down, I'll leave.`}
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="border border-foreground px-2 py-4 rounded-xl flex-[5] animation-block">
                <p className="leading-7 [&:not(:first-child)]:mt-6 text-justify indent-4">
                  <span className="relative underline-clip">Hopefully</span>,
                  next time we can synchronize our plans better.{' '}
                  <b>Take care!</b>
                </p>
              </div>
              <div className="flex-1 border border-foreground px-2 py-4 rounded-xl flex justify-center items-center animation-block bg-foreground dark:bg-background">
                <Image src="/svg/hand.svg" width={50} height={50} alt="hand" />
              </div>
            </div>
          </div>
        </div>
        <div className="justify-center items-center flex-1 md:flex hidden bg-foreground dark:bg-background rounded-xl">
          <Image
            src="/svg/info.svg"
            width={300}
            height={300}
            alt="quote"
            color="white"
            className="fill-white"
          />
        </div>
      </div>
    </div>
  )
}
