'use client'
import { CredentialResponse, GoogleLogin } from '@react-oauth/google'
import React, { useCallback } from 'react'

const SigninWIthGoogle = () => {

  const handleLoginWithGoogle = useCallback((cred: CredentialResponse) => {
    
  }, [])
  
  return (
    <>
    <GoogleLogin onSuccess={(cred) => console.log(cred)} />
    </>
  )
}

export default SigninWIthGoogle