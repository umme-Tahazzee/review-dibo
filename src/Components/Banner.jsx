'use client'

import { motion } from "framer-motion";

export default function Banner(){
return (
  <motion.section
       initial={{ opacity: 0 }}
       animate={{
         opacity: 1,
         transition: { delay: 0.3, duration: 0.4, ease: "easeIn" },
       }}
       className="py-6"
     >
    <div className='m-5'>
      <h1 className="text-5xl md:text-6xl font-bold font-mono tracking-normal 
      text-center">
      Your <span className="text-green-500 animate-ping-fast ">Voice</span>, Our Platform
      </h1>

    </div>
    </motion.section>
  )
}

