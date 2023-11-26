import { fetchWatch } from "@/utils"
import WatchCard from "@/components/WatchCard"

export default async function Watch(){
    const watches = await fetchWatch();

    const isData = !Array.isArray(watches) || watches.length < 1 || !watches

    return(
        <section className="max-container">
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