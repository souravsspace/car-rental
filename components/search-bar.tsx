"use client"

import SearchManufacturer from "@/components/ui/search-manufacturer"
import { useState } from "react"

export default function SearchBar() {
   const [manufacturer, setManufacturer] = useState("")

   const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
   }
   return (
      <form className="searchbar" onSubmit={handleSearch}>
         <div className="searchbar__item">
            <SearchManufacturer
               manufacturer={manufacturer}
               setManufacturer={setManufacturer}
            />
         </div>
      </form>
   )
}
