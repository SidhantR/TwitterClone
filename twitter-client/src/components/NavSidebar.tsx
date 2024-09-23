"use client"
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
import { BiHomeCircle, BiHash, BiUser, BiMoney, BiImageAlt } from "react-icons/bi";
import { SlOptions } from "react-icons/sl";
import { useCurrentUser } from "@/hooks/user";
import Image from "next/image";

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

const NavSideBar = () => {

    const { user } = useCurrentUser()

    return (<div className="col-span-3 pt-1 ml-25 relative">
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
    </div>)
}

export default NavSideBar