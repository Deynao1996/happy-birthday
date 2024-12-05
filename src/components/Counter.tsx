import React from 'react'
import Marquee from 'react-fast-marquee'
import FlipTimer from './FlipTimer'

export default function Counter() {
  return (
    <div className="mt-8">
      <div className="h-[28px]">
        <Marquee
          autoFill
          className="overflow-hidden -z-10 bg-foreground h-[28px]"
          direction="right"
        >
          <span className="text-xl font-semibold tracking-tight uppercase italic text-background">
            &nbsp;Time's still on our side &nbsp; ● &nbsp;
          </span>
        </Marquee>
      </div>
      <div className="container">
        <FlipTimer />
      </div>
    </div>
  )
}
