"use client"

import { CUSTOM_BUTTON_TYPE } from "@/types"
import Image from "next/image"

export default function CustomButton({
   title,
   containerStyles,
   handleClick,
   btnType,
   textStyles,
   rightIcon,
   isDisabled,
}: CUSTOM_BUTTON_TYPE) {
   return (
      <button
         disabled={isDisabled}
         type={btnType || "button"}
         className={`custom-btn ${containerStyles}`}
         onClick={handleClick}
      >
         <span className={`flex-1 ${textStyles}`}>{title}</span>
         {rightIcon && (
            <div className="relative h-6 w-6">
               <Image
                  src={rightIcon}
                  alt="right-icon"
                  layout="fill"
                  objectFit="contain"
               />
            </div>
         )}
      </button>
   )
}
