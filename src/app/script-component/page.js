'use client'
import Script from 'next/script'
import React from 'react'

const ScriptComponent = () => {
  return (
    <>
        <h2>Script Component In Next JS 16</h2>
        <Script 
            src='/feature.js'
            onLoad={() => {
               console.log("Feature Executed")
            }}
        />
    </>
  )
}

export default ScriptComponent