import AccessoryCard from "@/components/AccessoryCard"
import { fetchAccessories } from "@/utils"


export default async function Accessory(){
    const accessories = await fetchAccessories()

    const isData = !Array.isArray(accessories) || accessories.length < 1 || !accessories

    return(
        <section className="max-container">
            <h1 className="font-bold text-2xl mt-5 rounded
             bg-blue-500 text-white p-1 leading-loose mb-5">Accessories</h1>

            <div className="grid grid-cols-4 gap-10 max-sm:grid-cols-1">
                {isData ? (
                    <div>No Data </div>
                ):(
                    accessories.map((accessory) =>(
                        <div>
                            <AccessoryCard accessory={accessory} key={accessory.id} />

                            </div>
                    ))
                )}
            </div>

        </section>

    )
}