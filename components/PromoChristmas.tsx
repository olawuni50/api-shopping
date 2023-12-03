import Image from 'next/image'

const PromoChristmas = () =>{
    return(
        <section className="items-center p-5 bg-violet-300 rounded shadow-lg">
            <Image src="/santa.png" alt="christmas" className="object-contain" width={300} height={300} />
            <h1 className="text-2xl font-bold leading-relaxed">Enjoy Unlimited discount this Christmas on all our products</h1>


            </section>

    )
}

export default PromoChristmas