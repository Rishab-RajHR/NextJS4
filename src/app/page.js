'use client'

import Link from 'next/link'
// import EventsFunctionState from '@/components/EventsFunctionState'
import React from 'react'

function page() {
  return (
    <div>
       <h2>Alex Pandian</h2>
       {/* <EventsFunctionState /> */}
       <Link href='/mongo-add-emp'>Add Employee</Link>  <br/> <br />
       <Link href='/mongo-get-emp'>Get Employee</Link>
    </div>
  )
}

export default page
