import Button from "./Button"
import Link from 'next/link'



const Navbar = () =>{
    return(
        <section>
            <nav>
                <ul className="flex justify-between max-container py-4 items-center">
                    
                    <Link href="/">
                    <li className="text-2xl font-bold text-bold">ShopAPI</li>
                    </Link>

                    <Link href="/phones">
                    <li className="font-bold">Phones</li>
                    </Link>

                    <Link href="/phoneCase">
                    <li className="font-bold">Phone Cases</li>
                    </Link>

                    <Link href="/accessories">
                    <li className="font-bold">Accessories</li>
                    </Link>

                    <li>
                        <Button text="Sign In" />
                    </li>
                </ul>
            </nav>
            </section>
    )
}

export default Navbar