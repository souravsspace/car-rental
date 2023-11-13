import { MouseEventHandler } from "react"

type CUSTOM_BUTTON_TYPE = {
   title: string
   containerStyles?: string
   handleClick?: MouseEventHandler<HTMLButtonElement>
   btnType?: "button" | "submit"
   textStyles?: string
   rightIcon?: string
   isDisabled?: boolean
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

type CAR_TYPE = {
   city_mpg: number
   class: string
   combination_mpg: number
   cylinders: number
   displacement: number
   drive: string
   fuel_type: string
   highway_mpg: number
   make: string
   model: string
   transmission: string
   year: number
}

type CAR_CARD_TYPE = {
   car: CAR_TYPE
}

type CAR_DETAILS_TYPE = {
   isOpen: boolean
   closeModal: () => void
   car: CAR_TYPE
}

type CAR_FILTER_TYPE = {
   manufacturer: string
   model: string
   fuel: string
   year: number
   limit: number
}

type SHOW_MORE_TYPE = {
   pageNumber: number
   isNext: boolean
}
