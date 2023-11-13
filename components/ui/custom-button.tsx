"use client"

import { CUSTOM_BUTTON_TYPE } from "@/types"

export default function CustomButton({
   title,
   containerStyles,
   handleClick,
   btnType,
}: CUSTOM_BUTTON_TYPE) {
   return (
      <button
         disabled={false}
         type={btnType || "button"}
         className={`custom-btn ${containerStyles}`}
         onClick={handleClick}
      >
         <span className={`flex-1`}>{title}</span>
      </button>
   )
}
