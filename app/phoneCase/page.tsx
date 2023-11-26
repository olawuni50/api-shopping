import { fetchPhoneCases } from "@/utils"
import PhoneCases from '@/components/PhoneCases'

export default async function Page(){
    const phoneDatas = await fetchPhoneCases()
    
    const isData = !Array.isArray(phoneDatas) || phoneDatas.length < 1 || !phoneDatas
    

    return(
        <section className="max-container">

            <h1 className="font-bold text-2xl mt-5 rounded
             bg-blue-500 text-white p-1 leading-loose mb-5">Phone Cases</h1>

            <div className="grid grid-cols-4 gap-10 max-sm:grid-cols-1">

            {isData ? (
                <h1>No Data </h1>
            ): (
                phoneDatas.map((phoneData) => (
                    <div>
                        <PhoneCases phoneData={phoneData} key={phoneData.id} />
                    </div>
                ))
            )}
            </div>

        </section>



    )
}