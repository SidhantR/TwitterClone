'use client'
import { GoogleLogin } from '@react-oauth/google'
import React from 'react'

const SigninWIthGoogle = () => {
  return (
    <>
    <GoogleLogin onSuccess={(cred) => console.log(cred)} />
    </>
  )
}

export default SigninWIthGoogle