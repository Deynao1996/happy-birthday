import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function millisecondToMinutes(millisecond: number) {
  return Math.floor(millisecond / 1000 / 60)
}

export function addMinutes(date: Date, time: number): Date {
  return new Date(date.getTime() + time)
}
