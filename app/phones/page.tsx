import PhoneCard from "@/components/PhoneCard";
import { fetchPhone } from "@/utils"


export default async function Phones(){
    const products = await fetchPhone();
    console.log(products)

    const isDataEmpty =!Array.isArray(products) || products.length <1 || !products



    return (
        <section className="max-container">

            <h1 className="font-bold text-2xl mt-5 rounded
             bg-blue-500 text-white p-1 leading-loose mb-5">Phones</h1>

            <div className="grid grid-cols-4 gap-10 max-sm:grid-cols-1">            

            {isDataEmpty ? (
                <h1>No Data</h1>
            ): (
                products.map((product:any) => (
                    <div>
                        <PhoneCard product={product} key={product.id} />
                        </div>
                ))
            )}
            </div>            

        </section>
        
    )

}