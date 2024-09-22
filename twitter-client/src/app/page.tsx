"use client"
import React, { useCallback, useState } from "react";
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
import { BiHomeCircle, BiHash, BiUser, BiMoney, BiImageAlt } from "react-icons/bi";
import { SlOptions } from "react-icons/sl";
import FeedCard from "../components/FeedCard";
import SigninWithGoogle from "@/components/SigninWithGoogle";
import { useCurrentUser } from "@/hooks/user";
import Image from "next/image";
import { useCreateTweet, useGetAllTweets } from "@/hooks/tweet";
import { Tweet } from "@/gql/graphql";

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode
}

const sideBarMenuIcons: TwitterSidebarButton[] = [
  {
    title: 'Home',
    icon: <BiHomeCircle />
  },
  {
    title: 'Explore',
    icon: <BiHash />
  },
  {
    title: 'Notification',
    icon: <BsBell />
  },
  {
    title: 'Messages',
    icon: <BsEnvelope />
  },
  {
    title: 'Bookmarks',
    icon: <BsBookmark />
  },
  {
    title: 'Twitter Blue',
    icon: <BiMoney />
  },
  {
    title: 'Profile',
    icon: <BiUser />
  },
  {
    title: 'More',
    icon: <SlOptions />
  }
]

export default function Home() {

  const {user} = useCurrentUser()
  const { tweets = []} = useGetAllTweets()
  const { mutate } = useCreateTweet()

  const [content, setContent] = useState('')
  
  const handleCreateTweet = useCallback(() => {
    mutate({content})
  }, [content, mutate])

  const handleSelectImage = useCallback(() => {
    const input = document.createElement('input')
    input.setAttribute('type', 'file')
    input.setAttribute('accept', "image/*")
    input.click()
  }, [])


  console.log(tweets, 'tweets')

  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 pt-1 ml-25 relative">
          <div className="text-2xl rounded-full p-4 hover:bg-gray-800 h-fit w-fit cursor-pointer transition-all">
            <BsTwitter />
          </div>
          <div className="mt-1 text-[1.8]xl pr-4">
            <ul>
              {sideBarMenuIcons.map((item) =>
                <li className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-3 py-3 w-fit cursor-pointer transition-all" key={item.title}>
                  <span className="text-3xl">{item.icon}</span> <span>{item.title}</span>
                </li>)
              }
            </ul>
            <div className="mt-5 px-3">
              <button className="bg-[#1d9bf0] py-2 px-3 rounded-full w-full text-lg font-semibold ">Tweet</button>
            </div>
          </div>
          {user && 
          (<div className="absolute bottom-5 flex gap-2 items-center bg-slate-800 px-3 py-2 rounded-full">
            <Image src={user?.profileImageURL || ""} alt="image" height={50} width={50} className="rounded-full" />
            <div>
              <h3 className="text-l">{user.firstName} {user.lastName}</h3>
            </div>
          </div>)
          }
        </div>
        <div className="col-span-5 border-r-[1px] border-l-[1px] h-screen overflow-scroll border-gray-600 ">
          <div>
            <div className='border border-l-0 border-r-0 border-b-0 border-gray-600  p-5 hover:bg-slate-900 cursor-pointer transition-all'>
              <div className="grid grid-cols-12 gap-3">
                <div className="col-span-1">
                  {user && <Image src={user?.profileImageURL || ""} alt="user-image" className="rounded-full" height={50} width={50} /> }
                </div>
                <div className="col-span-11">
                  <textarea 
                    className="w-full bg-transparent text-l px-3 border-b border-slate-700" 
                    placeholder="What's happening?"
                    onChange= {(e) => setContent(e.target.value)}
                    rows={3}
                  ></textarea>
                  <div className="mt-2 flex justify-between items-center">
                    <BiImageAlt onClick={handleSelectImage} className="text-xl" />
                    <button 
                      className="text-sm py-1 px-4 rounded-full font-semibold bg-[#1d9bf0]"
                      onClick={handleCreateTweet}
                    >
                      Tweet
                    </button>
                  </div>
                </div>
              </div> 
            </div>
          </div>
          {tweets?.map((tweet) => tweet ? <FeedCard key={tweet?.id} data={tweet as Tweet} /> : null)}
        </div>
        <div className="col-span-3 ">
          {!user && <div className="border p-5 bg-slate-700 rounded-lg">
            <h1 className="text-2xl my-2">New to Twitter ?</h1>
            <SigninWithGoogle />
          </div>}
        </div>
      </div>
    </div>
  );
}
