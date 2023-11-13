import { MouseEventHandler } from "react"

type CUSTOM_BUTTON_TYPE = {
   title: string
   containerStyles?: string
   handleClick?: MouseEventHandler<HTMLButtonElement>
   btnType?: "button" | "submit"
}

type FUEL_TYPE = {
   title: string
   value: string
}

type YEAR_OF_PRODUCTION = {
   title: string
   value: string
}

type CUSTOM_FILTER_TYPE = {
   title: string
   options: FUEL_TYPE[] | YEAR_OF_PRODUCTION[]
}

type SEARCH_MANUFACTURER_TYPE = {
   manufacturer: string
   setManufacturer: (manufacturer: string) => void
}
