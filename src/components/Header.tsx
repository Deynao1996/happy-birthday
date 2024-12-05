import React from 'react'
import Marquee from 'react-fast-marquee'
import ToggleTheme from './ToggleTheme'

export default function Header() {
  return (
    <header>
      <div className="h-[32px]">
        <Marquee autoFill className="overflow-hidden -z-10">
          <h2 className="text-2xl font-semibold tracking-tight uppercase italic">
            &nbsp;Hidden friendship &nbsp; ‣ &nbsp;
          </h2>
        </Marquee>
      </div>
      <div className="flex justify-center items-center my-2">
        <ToggleTheme />
      </div>
    </header>
  )
}
