import { ProductProps } from "@/types"
import Link from 'next/link'
import Image from 'next/image'
import Button from "./Button"


interface Props{
    phoneData: ProductProps
}

const PhoneCases = ({phoneData} : Props) =>{ 
    const {title, image, price} = phoneData
    return(

        <section className="p-3 shadow-md h-96 mb-10">
            <Link href={{pathname: `/shopping/${title}/`, query:{_id: phoneData?._id}}}>
           
           <div className="flex justify-center">
         
            <Image src={image} alt={title} width={200} height={250} className="object-contain" />

            </div>
            <div className="text-xl font-montserrat mt-1 leading-relaxed">
            {title}
                </div>
            <div className="mt-1 mb-5 font-bold">
            ${price}             {/* {rating} */}
            </div>


            
            <Button text="Add to Cart" containerStyle="w-full"/>            
            </Link>

             

        
        </section>



    )
}

export default PhoneCases