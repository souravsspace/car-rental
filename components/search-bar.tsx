"use client"

import SearchManufacturer from "@/components/ui/search-manufacturer"
import { useState } from "react"
import SearchButton from "./ui/search-button"
import Image from "next/image"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"

export default function SearchBar() {
   const [manufacturer, setManufacturer] = useState("")
   const [model, setModel] = useState("")

   const router = useRouter()

   const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (manufacturer === "" && model === "") {
         return toast.error("Please enter a manufacturer and model")
      }

      updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase())
   }

   const updateSearchParams = (theModel: string, theManufacturer: string) => {
      const searchParams = new URLSearchParams(window.location.search)

      if (theModel) {
         searchParams.set("model", theModel)
      } else {
         searchParams.delete("model")
      }

      if (theManufacturer) {
         searchParams.set("manufacturer", theManufacturer)
      } else {
         searchParams.delete("manufacturer")
      }

      const newPathname = `${
         window.location.pathname
      }?${searchParams.toString()}`

      router.push(newPathname, { scroll: false })
   }

   return (
      <form className="searchbar" onSubmit={handleSearch}>
         <div className="searchbar__item">
            <SearchManufacturer
               manufacturer={manufacturer}
               setManufacturer={setManufacturer}
            />
            <SearchButton otherClasses="sm:hidden" />
         </div>
         <div className="searchbar__item">
            <Image
               src="/model-icon.png"
               width={25}
               height={25}
               className="absolute w-[20px] h-[20px] ml-4"
               alt="car model"
            />
            <input
               type="text"
               name="model"
               value={model}
               onChange={(e) => setModel(e.target.value)}
               className="searchbar__input"
               placeholder="Tiguan"
            />
            <SearchButton otherClasses="sm:hidden" />
         </div>
         <SearchButton otherClasses="max-sm:hidden" />
      </form>
   )
}
