import React from 'react'
import Image  from 'next/image';

const Header = () => {
  return (
    <div className="flex gap-2 font-serif">
        {/* logo  */}
       <div className="cursor-pointer p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg">
  <Image
    src="/img/logo.png"
    width={50}
    height={50}
    alt="Logo"
    className="animate-pulse"
  />
</div>

         <h1 className="text-3xl font-bold mt-2">
           Review Dibo
         </h1>
    </div>
  )
}

export default Header