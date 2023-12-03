import Button from "./Button"
import Image from "next/image"



const Hero = () =>{
    return(
        <section className="min-h-0">

            <div className="flex justify-between items-center max-container max-lg:flex-col">

            <div className="leading-loose">
                <h1 className="text-xl font-semibold leading-loose text-blue-500">CHRISTMAS PROMO</h1>
                <h2 className="capitalize font-bold text-5xl py-10 leading-relaxed
                font-palanquin max-sm:text-2xl max-sm:leading-loose max-sm:py-5">Shop our lastest <span className="text-blue-500"> product</span> and get 
                <span className="text-blue-500"> 30% discount</span> on all purchases</h2>
                <Button text="Shop Now" />
            </div>
            <Image src={"/2.png"} width={350} alt="shopping" height={350} className="object-contain" />

            </div>
            


        </section>

    )
}

export default Hero