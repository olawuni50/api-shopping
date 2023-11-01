import Image from "next/image"
import { ProductProps } from "@/types"
import Button from "./Button"

interface Props{
    product: ProductProps
}



const ProductCard = ({product}:Props) =>{
    const {title, id, price, image, rating} = product
    return(
        <section className="p-5 shadow-md h-full mb-10">
           
           <div className="flex justify-center">
            <Image src={image} alt={title} width={200} height={250} className="object-contain" />

            </div>
            <div className="text-xl font-montserrat mt-3 leading-relaxed">
            {title}
                </div>
            <div className="mt-3 mb-5 font-bold">
            ${price}             {/* {rating} */}
            </div>
            
            <Button text="Add to Cart" containerStyle="w-full"/>

             

        
        </section>

    )
}

export default ProductCard