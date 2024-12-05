'use client'

import React, { useRef, useState } from 'react'
import { Button } from './ui/button'
import CustomInput from './FormUI/CustomInput'
import QrCard from './QrCard'
import { useRouter } from 'next/navigation'
import gsap from 'gsap'
import { Separator } from './ui/separator'
import {
  ACCESS_PASSWORD,
  EMAIL_PUBLIC_ID,
  EMAIL_SERVICE_ID,
  EMAIL_TEMPLATE_ID,
  TIME_LEFT
} from '@/store'
import { useToast } from '@/components/ui/use-toast'
import { addMinutes } from '@/lib/utils'
import emailjs from '@emailjs/browser'

export default function Main() {
  const [value, setValue] = useState<string>('')
  const { toast } = useToast()
  const router = useRouter()
  const formRef = useRef<HTMLFormElement>(null)

  function sendEmail(msg: string) {
    //!Not for production
    if (!formRef.current) return
    formRef.current.message.value = msg
    emailjs.sendForm(
      EMAIL_SERVICE_ID,
      EMAIL_TEMPLATE_ID,
      formRef.current,
      EMAIL_PUBLIC_ID
    )
  }

  function setEndTimeToLS() {
    const retrievedTimeLeft = localStorage.getItem('timeEnd')

    if (!retrievedTimeLeft) {
      const now = new Date()
      const timeEnd = addMinutes(now, TIME_LEFT)
      sendEmail(timeEnd.toString())
      localStorage.setItem('timeEnd', String(timeEnd.getTime()))
    }
  }

  function animateDisappear() {
    //!No scope
    const tl = gsap.timeline()

    tl.to('.main-form', {
      x: 20,
      duration: 1.5,
      ease: 'circ.inOut'
    }).to(
      '.transition-block',
      {
        width: '100%',
        stagger: 0.05,
        duration: 1,
        ease: 'circ.inOut',
        onComplete: () => {
          router.replace('/about')
        }
      },
      '='
    )
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    //TODO Check responsive toast
    if (value !== ACCESS_PASSWORD)
      return toast({
        title: 'Wrong access code',
        description: 'Please enter the correct access code',
        variant: 'destructive'
      })

    setEndTimeToLS()
    animateDisappear()
  }

  return (
    <main>
      <Separator step={value.length} />
      <div className="container flex justify-center items-center">
        <form
          className="flex flex-col justify-center items-center main-form"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <input
            type="text"
            name="name"
            id="name"
            hidden
            defaultValue={'John Doe'}
          />
          <input
            type="text"
            name="email"
            id="email"
            hidden
            defaultValue={'deynao1996@gmail.com'}
          />
          <input type="text" name="message" id="message" hidden />
          <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight uppercase">
            FILL THE FORM
          </h1>
          <p className="text-center font-sans mt-3">
            Enter the code located on the back
            <br /> of the QR code
          </p>
          <QrCard />
          <div className="mt-14">
            <CustomInput setValue={setValue} value={value} />
          </div>
          <Button className="font-bold italic mt-8 w-full">
            Reveal a Secret
          </Button>
        </form>
      </div>
    </main>
  )
}
