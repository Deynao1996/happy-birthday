'use client'

import { useEffect } from 'react'
import useCountDown from 'react-countdown-hook'
import { Button } from './ui/button'
import { TriangleRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const targetDate: Date = new Date('2024-12-09T20:00:00');
const now: Date = new Date();
const differenceInMilliseconds: number = targetDate.getTime() - now.getTime();

const FlipTimer = () => {
  const [timeLeft, { start }] = useCountDown(differenceInMilliseconds, 1000);

  const hours = Math.floor((timeLeft / 1000 / 60 / 60) % 24);
  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);
  const isTimeUp = timeLeft === 0;  


  useEffect(() => {
    start()
  }, [])

  return (
    <div>
      <div className={cn('block', {
        'hidden': isTimeUp
      })}>
      <h4 className='text-center text-3xl tracking-tight font-semibold my-4 mb-6 italic'>Coming Soon...</h4>
      <div className="flex flex-col items-center justify-center w-full h-full gap-8 sm:gap-16">
        <div className="flex justify-center gap-3 sm:gap-8">
          <div className="flex flex-col gap-5 relative">
            <div className="h-16 w-16 sm:w-32 sm:h-32 lg:size-32 flex justify-between items-center bg-foreground rounded-lg">
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-background"></div>
              <span className="sm:text-6xl text-3xl font-semibold text-background">
                {hours < 10 ? `0${hours}` : hours}
              </span>
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-background"></div>
            </div>
            <span className="text-foreground text-xs sm:text-xl text-center font-medium italic">
            Hours
            </span>
          </div>
          <div className="flex flex-col gap-5 relative">
            <div className="h-16 w-16 sm:w-32 sm:h-32 lg:size-32 flex justify-between items-center bg-foreground rounded-lg">
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-background"></div>
              <span className="sm:text-6xl text-3xl font-semibold text-background">
                {minutes < 10 ? `0${minutes}` : minutes}
              </span>
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-background"></div>
            </div>
            <span className="text-foreground text-xs sm:text-xl italic font-medium text-center capitalize">
              Min
            </span>
          </div>
          <div className="flex flex-col gap-5 relative">
            <div className="h-16 w-16 sm:w-32 sm:h-32 lg:size-32 flex justify-between items-center bg-foreground rounded-lg">
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-background"></div>
              <span className="sm:text-6xl text-3xl font-semibold text-background">
                {seconds < 10 ? `0${seconds}` : seconds}
              </span>
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-background"></div>
            </div>
            <span className="text-foreground text-xs sm:text-xl italic font-medium text-center capitalize">
              Sec
            </span>
          </div>
        </div>
      </div>

      </div>
      <Button asChild
          className={cn("font-bold italic mt-8 w-full uppercase hidden", {
            'inline-flex': isTimeUp
          })}
        >
          <Link href={'https://t.me/WishesRitabot'}>
          Let's Open
          <TriangleRightIcon className='ml-2 size-6' />
          </Link>
        </Button>
    </div>
  )
}
export default FlipTimer
