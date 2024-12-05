import { useRouter } from 'next/navigation'
import { useLayoutEffect } from 'react'

function useProtectedRoute(redirectPath = '/') {
  const router = useRouter()

  useLayoutEffect(() => {
    const retrievedTimeLeft = localStorage.getItem('timeEnd')

    if (!retrievedTimeLeft) {
      router.push(redirectPath)
    }
  }, [])
}

export default useProtectedRoute
