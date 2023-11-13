import { CAR_TYPE } from "@/types"

export default function generateCarImageUrl(
   car: CAR_TYPE,
   angle?: string
) {
   const url = new URL("https://cdn.imagin.studio/getimage")
   const { make, model, year } = car

   url.searchParams.append("customer", "hrjavascript-mastery")
   url.searchParams.append("make", make)
   url.searchParams.append("modelFamily", model.split(" ")[0])
   url.searchParams.append("zoomType", "fullscreen")
   url.searchParams.append("modelYear", `${year}`)
   url.searchParams.append("angle", `${angle}`)

   return `${url}`
}
