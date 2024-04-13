"use client"
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import FeatureCreator from "./feature-creator";

export function Hero() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
          
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 "
      >
        <div className="h-screen relative flex flex-col gap-4 items-center justify-center px-4  ">
        <div className="text-3xl md:text-7xl font-normal dark:text-white text-center pt-20">
          <span className="font-bold">Money Glitch</span> - content platform for traders.
        </div>
       
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4 text-center">
        Create, consume trading content 
and make money
        </div>
        <div className="w-full max-w-md">
  <div>
    <form action="" className="flex flex-col items-center space-y-6 pb-36">
      <Input type="email"  placeholder="Email" className="ring-2"/>
      <Button type="submit" variant="secondary" className="hover:bg-gray-400 text-black rounded-lg">Get notification on launch</Button>
    </form>
    
  </div>
    <div className="text-center text-[90px]">🛠️</div>
    <div className="text-white text-center">coming soon...</div>
</div>

        </div>
        
<FeatureCreator></FeatureCreator>
      </motion.div>
    </AuroraBackground>
  );
}
