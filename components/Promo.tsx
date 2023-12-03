import Button from "./Button"
import Image from 'next/image'

const Promo = () =>{
    return(
        <section className="max-container">

            <div className="grid grid-cols-3 gap-10 max-sm:grid-cols-1">

            <div className="promo-card bg-red-200">
                <div>
                <h2 className="promo-text">New Arrivals, Get Your Customized Mug</h2>
                <Button text="Shop Now" />
                </div>

                <Image src="/mug.png" alt="phone" width={200} height={250} className="object-contain" />
            </div>

            <div className="promo-card bg-blue-300">
                <div>
                <h2 className="promo-text">Enjoy 30% on all our iPhone 12 this Christmas</h2>
                <Button text="Shop Now" />
                </div>

                <Image src="/smartphone.png" alt="phone" width={150} height={150} className="object-contain" />
            </div>
            
            <div className="promo-card bg-violet-300">
                <div>
                <h2 className="promo-text">20% off <br/> on all Zara bag this Christmas</h2>
                <Button text="Shop Now" />
                </div>

                <Image src="/handbag.png" alt="phone" width={150} height={150} className="object-contain" />
            </div>
                
            </div>
            
        </section>

    )
}

export default Promo