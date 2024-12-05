import React from 'react'

export default function FullHeightContainer({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full min-h-screen h-[100svh] flex flex-col justify-between opacity-0 main-container">
      {children}
    </div>
  )
}
