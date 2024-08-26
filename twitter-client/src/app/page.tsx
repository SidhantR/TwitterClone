"use client"
import React from "react";
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
import { BiHomeCircle, BiHash, BiUser, BiMoney } from "react-icons/bi";
import { SlOptions } from "react-icons/sl";
import FeedCard from "../components/FeedCard";
import SigninWithGoogle from "@/components/SigninWithGoogle";
import { useCurrentUser } from "@/hooks/user";

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

  const user = useCurrentUser()
  console.log(user, 'useruseruser')
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 pt-1 ml-25">
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
        </div>
        <div className="col-span-5 border-r-[1px] border-l-[1px] h-screen overflow-scroll border-gray-600 ">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3 ">
          <div className="border p-5 bg-slate-700 rounded-lg">
            <h1 className="text-2xl my-2">New to Twitter ?</h1>
            <SigninWithGoogle />
          </div>
        </div>
      </div>
    </div>
  );
}
