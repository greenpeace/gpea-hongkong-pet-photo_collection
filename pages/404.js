// 404.js
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function FourOhFour() {
  const router = useRouter()
  useEffect(() => {
    router.push('/')
  })

  return (
    <>
      <h1>404 - Page Not Found</h1>
    </>
  )
}
