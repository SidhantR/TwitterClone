'use client'
import { graphqlClient } from '@/clients/api'
import verifyUserGoogleTokenQuery from '@/graphql/query/user'
import { CredentialResponse, GoogleLogin } from '@react-oauth/google'
import React, { useCallback } from 'react'
import toast from 'react-hot-toast'

const SigninWIthGoogle = () => {

  const handleLoginWithGoogle = useCallback(async(cred: CredentialResponse) => {
    const googleToken = cred.credential
    if(!googleToken) return toast.error('Google token not found')

    const {verifyGoogleToken} = await graphqlClient.request(
      verifyUserGoogleTokenQuery, {token: googleToken}
    )

    toast.success('Verified Success')
    console.log(verifyGoogleToken, '-------->verifyGoogleToken')
    if(verifyGoogleToken) window.localStorage.setItem('__twitter_token', verifyGoogleToken)

  }, [])
  
  return (
    <>
    {/* <GoogleLogin onSuccess={(cred) => console.log(cred)} /> */}
    <GoogleLogin onSuccess={handleLoginWithGoogle} />
    </>
  )
}

export default SigninWIthGoogle