'use client'
import { graphqlClient } from '@/clients/api'
import {verifyUserGoogleTokenQuery} from '@/graphql/query/user'
import { CredentialResponse, GoogleLogin } from '@react-oauth/google'
import { useQueryClient } from '@tanstack/react-query'
import React, { useCallback } from 'react'
import toast from 'react-hot-toast'

const SigninWIthGoogle = () => {

  const queryClient = useQueryClient()

  const handleLoginWithGoogle = useCallback(async(cred: CredentialResponse) => {
    const googleToken = cred.credential
    if(!googleToken) return toast.error('Google token not found')

    try{
      const {verifyGoogleToken} = await graphqlClient.request(
        verifyUserGoogleTokenQuery, {token: googleToken}
      )
  
      toast.success('Verified Success')
      if(verifyGoogleToken) window.localStorage.setItem('__twitter_token', verifyGoogleToken)
  
      //invaidate query and again make request to get current user
      await queryClient.invalidateQueries({ queryKey: ['current-user'] });

    } catch(err){
      toast.error('Verification Failed')
      console.error('Error verifying google Token',err)
    }

  }, [queryClient])
  
  return (
    <>
    {/* <GoogleLogin onSuccess={(cred) => console.log(cred)} /> */}
    <GoogleLogin onSuccess={handleLoginWithGoogle} />
    </>
  )
}

export default SigninWIthGoogle