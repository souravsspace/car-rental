"use client"

import { SHOW_MORE_TYPE } from "@/types"
import CustomButton from "./ui/custom-button"
import { usePathname, useRouter } from "next/navigation"
import updateSearchParams from "@/utils/update-search-params"

export default function ShowMore({ isNext, pageNumber }: SHOW_MORE_TYPE) {
   const router = useRouter()
   const pathname = usePathname()

   const handleNavigation = () => {
      const newLimit = (pageNumber + 1) * 10
      router.push(`${pathname}?limit=${newLimit}`, {
         scroll: false,
      })
      // const newPathname = updateSearchParams("limit", `${newLimit}`)
      // router.push(newPathname)
   }

   return (
      <div className="w-full flex-center gap-5 mt-10">
         {!isNext && (
            <CustomButton
               btnType="button"
               title="Show More"
               containerStyles="bg-primary-blue rounded-full text-white"
               handleClick={handleNavigation}
            />
         )}
      </div>
   )
}
