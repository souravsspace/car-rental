import CarCard from "@/components/car-card"
import Hero from "@/components/hero"
import SearchBar from "@/components/search-bar"
import ShowMore from "@/components/show-more"
import CustomFilter from "@/components/ui/custom-filter"
import { fuels, yearsOfProduction } from "@/constants"
import { CAR_FILTER_TYPE } from "@/types"
import getAllCars from "@/utils/get-all-cars"

export default async function Home({
   searchParams,
}: {
   searchParams: CAR_FILTER_TYPE
}) {
   const allCars = await getAllCars({
      manufacturer: searchParams.manufacturer || "",
      model: searchParams.model || "",
      fuel: searchParams.fuel || "",
      year: searchParams.year || 2022,
      limit: searchParams.limit || 10,
   })

   const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars

   return (
      <main className="overflow-hidden">
         <Hero />
         <div className="mt-10 padding-x padding-y max-width" id="discover">
            <div className="home__text-container">
               <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
               <p>Explore out cars you might like</p>
            </div>

            <div className="home__filters">
               <SearchBar />
               <div className="home__filter-container">
                  <CustomFilter title="fuel" options={fuels} />
                  <CustomFilter title="year" options={yearsOfProduction} />
               </div>
            </div>

            {!isDataEmpty ? (
               <section>
                  <div className="home__cars-wrapper">
                     {allCars?.map((car, index) => (
                        <CarCard key={index} car={car} />
                     ))}
                  </div>
                  <ShowMore
                     pageNumber={searchParams.pageNumber || 10 / 10}
                     isNext={searchParams.limit || 10 > allCars.length}
                  />
               </section>
            ) : (
               <section className="home__error-container">
                  <h2 className="text-black text-xl font-bold">
                     No Cars Found!
                  </h2>
                  <p>{allCars?.message}</p>
               </section>
            )}
         </div>
      </main>
   )
}
