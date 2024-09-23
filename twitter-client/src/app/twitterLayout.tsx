import React from 'react'



interface TwitterLayoutProps {
  children: React.ReactNode;
}
const TwitterLayout: React.FC<TwitterLayoutProps> = (props) => {


  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-5 border-r-[1px] border-l-[1px] h-screen overflow-scroll border-gray-600 ">
          {props.children}
        </div>
      </div>
    </div>)
}

export default TwitterLayout