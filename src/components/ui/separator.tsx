import { cn } from '@/lib/utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

type SeparatorProps = React.HTMLAttributes<HTMLDivElement> &
  React.RefAttributes<HTMLDivElement> & {
    className?: string
    step: number
  }

function Separator({ className, step, ...props }: SeparatorProps) {
  const ref = useRef<HTMLDivElement>(null)
  const separatorWidth = step === 0 ? 0 : (step * 100) / 6

  useGSAP(
    () => {
      const separator = ref.current
      if (!separator) return
      gsap.to(separator, { width: separatorWidth + '%', duration: 1 })
    },
    { dependencies: [step] }
  )

  return (
    <div
      className={cn(
        'h-screen-full dark:bg-foreground bg-background fixed inset-0 mix-blend-difference pointer-events-none w-0 z-10',
        className
      )}
      ref={ref}
      {...props}
    />
  )
}

export { Separator }
