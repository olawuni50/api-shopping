// import { fetchProductDetails } from "@/utils"

import { Button } from "@/components"
import { fetchDetails } from "@/utils"
import Image from 'next/image'

type Props = {
    searchParams: {[key:string]: string | string[] | undefined}
}

export default async function Page({searchParams}: Props) {
    const _idString = searchParams?._id
    const _id = Number(_idString)
           const detail = await fetchDetails(_id)
           console.log(detail)
   
    return <div className="max-container md:flex justify-evenly">

    <Image src={detail?.image} alt={detail?.name} width={500} height={550} className="object-contain" />
    <div className="w-3/5 p-2">
        <h1 className="mb-1 bg-blue-500 p-1 text-white w-36">Official Store</h1>
        <h1 className="text-4xl font-bold leading-normal mb-3"> {detail?.title}</h1>
        <h2 className="font-semibold text-xl mb-3">Price: ${detail?.price}</h2>
        <h2 className="mb-3 line-through">${detail?.previousPrice}</h2>

        <p className="mb-3 text-md">Brand: {detail?.brand}</p>
        
        <div className="mb-3">
        {detail.quantity > 0 ? `In Stock: ${detail.quantity}`: "Out of Stock"}
        </div>
        

        <p className="w-3/4 text-justify tracking-wide font-md leading-relaxed" > {detail?.description}</p>

        <Button text="Add to Cart" containerStyle="mt-4 w-2/3 items-center"/>
    </div>
   
    
    </div>

  }