import React, { useEffect } from 'react'
import Sidebar from '@/Components/Sidebar'

export default function Layout({ children }) {
  return (
    <main className="flex flex-row text-base text-grey-910">
      <Sidebar />
      <article className="">{children}</article>
    </main>
  )
}