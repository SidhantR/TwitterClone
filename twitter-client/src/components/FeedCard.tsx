import { Tweet } from '@/gql/graphql'
import Image from 'next/image'
import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { BiMessageRounded, BiUpload } from 'react-icons/bi'
import { FaRetweet } from 'react-icons/fa'

interface FeedCardProps {
    data: Tweet
}

const FeedCard: React.FC<FeedCardProps> = (props) => {
    const {data} = props
    return (
        <div className='border border-l-0 border-r-0 border-b-0 border-gray-600  p-5 hover:bg-slate-900 cursor-pointer transition-all'>
            <div className='grid grid-cols-12 gap-3'>
                <div className='col-span-1'>
                    {data.author?.profileImageURL &&  
                        <Image 
                            src={data.author?.profileImageURL}
                            className='rounded-full'
                            alt="user-image" 
                            height={50} 
                            width={50} />
                    }
                </div>
                <div className='col-span-11'>
                    <h5>{data?.author?.firstName} {data?.author?.lastName}</h5>
                    <span>{data.content}</span>
                    <div className='flex justify-between mt-5 text-xl items-center p-2 pr-10 w-[90%]'>
                        <div>
                            <BiMessageRounded />
                        </div>
                        <div>
                            <FaRetweet />
                        </div>
                        <div>
                            <AiOutlineHeart />
                        </div>
                        <div>
                            <BiUpload />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedCard