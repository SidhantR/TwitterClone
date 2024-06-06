import Image from "next/image";
import React from "react";
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
import { BiHomeCircle, BiHash, BiUser } from "react-icons/bi";

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
    title: 'Profile',
    icon: <BiUser />
  }
]

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 pt-8 px-4">
          <div className="text-4xl rounded-full p-4 hover:bg-gray-800 h-fit w-fit cursor-pointer transition-all">
            <BsTwitter />
          </div>
          <div className="mt-4 text-[1.8]xl pr-4">
            <ul>
              {sideBarMenuIcons.map((item) =>
                <li className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-4 py-2 w-fit cursor-pointer transition-all" key={item.title}>
                  <span>{item.icon}</span> <span>{item.title}</span>
                </li>)
              }
            </ul>
            <div className="mt-5 px-3">
              <button className="bg-[#1d9bf0] p-3 rounded-full w-full text-lg font-semibold ">Tweet</button>
            </div>
          </div>
        </div>
        <div className="col-span-6 border-r-[1px] border-l-[1px] border-gray-400 "></div>
        <div className="col-span-3 "></div>
      </div>
    </div>
  );
}
