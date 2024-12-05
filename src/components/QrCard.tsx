'use client'

import { cn } from '@/lib/utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import React from 'react'

type QrCardProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string
}

function QrCard({ className, ...props }: QrCardProps) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const cardFrontRef = React.useRef<HTMLDivElement>(null)
  const cardBackRef = React.useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const card = containerRef.current
    if (!card) return
    gsap.set(card, {
      transformStyle: 'preserve-3d',
      transformPerspective: 1000
    })
    const front = cardFrontRef.current
    const back = cardBackRef.current

    gsap.set(back, { rotationY: -180 })

    const tl = gsap
      .timeline({
        repeat: -1,
        yoyo: true,
        repeatDelay: 0.5
      })
      .to(front, { duration: 2, rotationY: 180, ease: 'back.inOut(1.7)' })
      .to(back, { duration: 2, rotationY: 0, ease: 'back.inOut(1.7)' }, 0)
    tl.play()
  })

  return (
    <div
      className={cn('w-32 h-32 float-left relative my-8', className)}
      ref={containerRef}
      {...props}
    >
      <div
        className="w-full h-full mt-14 rounded-lg flex justify-center items-center backface-hidden dark:bg-foreground bg-border"
        ref={cardFrontRef}
      >
        <Image src={'/svg/qr.svg'} width={90} height={90} alt="Qr code" />
      </div>
      <div
        className="w-full h-full bg-foreground mt-14 rounded-lg flex justify-center items-center backface-hidden"
        ref={cardBackRef}
      >
        <div className="w-[90] h-[90] border border-primary text-background font-extrabold">
          XXX-XXX
        </div>
      </div>
    </div>
  )
}

export default React.memo(QrCard)
