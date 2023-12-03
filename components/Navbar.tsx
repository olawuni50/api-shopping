"use client"

import {useState} from 'react'
import Button from "./Button"
import Link from 'next/link'
import SignUp from "./SignUp"



const Navbar = () =>{
    const [isSignupFormOpen, setIsSignupFormOpen] = useState(false);

    const toggleForm = () => {
        setIsSignupFormOpen(!isSignupFormOpen)
      }
    

    return(
        <section>
            <SignUp isSignupFormOpen={isSignupFormOpen} toggleForm={toggleForm} />
            <nav>
                <ul className="flex justify-between max-container py-4 items-center">
                    
                    <Link href="/">
                    <div className="text-2xl font-bold text-bold">ShopAPI</div>
                    </Link>

                    <div className="flex justify-between gap-10">
                    <Link href="/phones">
                    <li className="font-bold">Phones</li>
                    </Link>

                    <Link href="/phoneCase">
                    <li className="font-bold">Phone Cases</li>
                    </Link>

                    <Link href="/accessories">
                    <li className="font-bold">Accessories</li>
                    </Link>

                    <Link href="/watches">
                    <li className="font-bold">Watches</li>
                    </Link>

                   </div>                 
                                          
                    <div>
                    <Button handleClick={toggleForm} text="Sign Up" />
                        <Button  text="Sign In" />
                    </div>
                    
                </ul>
            </nav>
            </section>
    )
}

export default Navbar