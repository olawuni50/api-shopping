import { fetchWatch } from "@/utils"
import WatchCard from "@/components/WatchCard"

export default async function Watch(){
    const watches = await fetchWatch();

    const isData = !Array.isArray(watches) || watches.length < 1 || !watches

    return(
        <section className="max-container">
            <h1 className="font-bold text-2xl mt-5 rounded
             bg-blue-500 text-white p-1 leading-loose mb-5">Watches</h1>
             
            <div className="grid grid-cols-4 max-sm:grid-cols-1">
                {isData ? (
                    <div>No Data</div>
                ):(
                    watches.map((watch) => (
                        <div>
                            <WatchCard watch={watch} key={watch.id} />

                            </div>
                    ))
                )}

                </div>

            </section>


    )
}