// 404.js
import React, { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function FourOhFour() {
  const router = useRouter()
  useEffect(() => {
    router.push('/')
  }, [])

  return (
    <>
      <h2>404 - Page Not Found</h2>
      <Link
        onClick={() => {
          router.push(`/`)
        }}
      >
        Back to home
      </Link>
    </>
  )
}
