import { CAR_FILTER_TYPE } from "@/types"

const getAllCars = async (filters: CAR_FILTER_TYPE) => {
   const { manufacturer, model, year, fuel, limit } = filters

   const headers = {
      "X-RapidAPI-Key": "3135537b5amsh9406d51b75b544ap1df46djsn295ac4df429f",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
   }
   try {
      const response = await fetch(
         `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&fuel_type=${fuel}&limit=${limit}`,
         {
            method: "GET",
            headers,
         }
      )
      const result = await response.json()
      return result
   } catch (error) {
      return error
   }
}

export default getAllCars
