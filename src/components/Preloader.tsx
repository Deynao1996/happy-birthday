'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

export default function Preloader() {
  const containerRef = React.useRef<HTMLDivElement>(null)

  function removeHidden(selector: string) {
    const el = document.querySelector(selector)
    el?.classList.remove('hidden')
  }
  function createNumbers(counter: HTMLElement) {
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 10; j++) {
        const div = document.createElement('div')
        div.className = 'num'
        div.textContent = j.toString()
        counter.appendChild(div)
      }
    }
    const finalDiv = document.createElement('div')
    finalDiv.className = 'num'
    finalDiv.textContent = '0'
    counter.appendChild(finalDiv)
  }

  function animate(counter: HTMLElement, duration: number, delay = 0): void {
    const numElements = Array.from(counter.querySelectorAll('.num'))
    const numHeight = numElements[0]?.clientHeight || 0
    const totalDistance = (numElements.length - 1) * numHeight

    gsap.to(counter, {
      y: -totalDistance,
      duration,
      ease: 'power2.inOut',
      delay
    })
  }

  function animateDigit() {
    gsap.to('.digit', {
      top: '-150px',
      stagger: {
        amount: 0.25
      },
      delay: 6,
      duration: 1,
      ease: 'power4.inOut'
    })
  }

  function animateFillLoader(loader: HTMLElement, cfg?: gsap.TweenVars) {
    gsap.from(loader, {
      width: 0,
      duration: 6,
      ease: 'power2.inOut',
      ...cfg
    })
  }

  function animateLoaders() {
    gsap.to('.loader', {
      background: 'none',
      delay: 7,
      duration: 0.1
    })

    gsap.to('.loader-1', {
      rotate: 90,
      y: -50,
      duration: 0.5,
      delay: 7
    })

    gsap.to('.loader-2', {
      x: -75,
      y: 75,
      duration: 0.5,
      delay: 7
    })

    gsap.to('.loader', {
      scale: 40,
      duration: 1,
      delay: 7.5,
      ease: 'power2.inOut'
    })

    gsap.to('.loader', {
      rotate: 45,
      y: 500,
      x: 2000,
      duration: 1,
      delay: 7.5,
      ease: 'power2.inOut'
    })
  }

  useGSAP(
    () => {
      ;['.loader-1', '.loader-2'].forEach(removeHidden)
      createNumbers(document.querySelector('.counter-3') as HTMLElement)
      animate(document.querySelector('.counter-3') as HTMLElement, 5)
      animate(document.querySelector('.counter-2') as HTMLElement, 6)
      animate(document.querySelector('.counter-1') as HTMLElement, 2, 4)

      animateDigit()
      animateFillLoader(document.querySelector('.loader-1') as HTMLElement)
      animateFillLoader(document.querySelector('.loader-2') as HTMLElement, {
        delay: 1.9
      })

      animateLoaders()

      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.5,
        delay: 8,
        ease: 'power1.inOut'
      })
    },
    { scope: containerRef }
  )

  return (
    <div
      className="fixed inset-0 h-full-screen w-screen bg-foreground z-50 overflow-hidden pointer-events-none"
      ref={containerRef}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[50px] flex bg-[#5C5C5C] loader">
        <div className="relative w-[200px] h-[50px] bg-background loader-1 hidden"></div>
        <div className="relative w-[100px] h-[50px] bg-background loader-2 hidden"></div>
      </div>
      <div className="counter text-background">
        <div className="counter-1 digit">
          <div className="num">0</div>
          <div className="num num1offset1">1</div>
        </div>
        <div className="counter-2 digit">
          <div className="num">0</div>
          <div className="num num1offset2">1</div>
          <div className="num">2</div>
          <div className="num">3</div>
          <div className="num">4</div>
          <div className="num">5</div>
          <div className="num">6</div>
          <div className="num">7</div>
          <div className="num">8</div>
          <div className="num">9</div>
          <div className="num">0</div>
        </div>
        <div className="counter-3 digit">
          <div className="num">0</div>
          <div className="num">1</div>
          <div className="num">2</div>
          <div className="num">3</div>
          <div className="num">4</div>
          <div className="num">5</div>
          <div className="num">6</div>
          <div className="num">7</div>
          <div className="num">8</div>
          <div className="num">9</div>
        </div>
      </div>
    </div>
  )
}
