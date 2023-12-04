"use client"

import {useState} from 'react'
import Button from "./Button"
import Link from 'next/link'
import SignUp from "./SignUp"
import {signIn, useSession, signOut} from 'next-auth/react'



const Navbar = () =>{
    const [isSignupFormOpen, setIsSignupFormOpen] = useState(false);

    const {status, data:session} = useSession({required:true, onUnauthenticated(){
    }})

    console.log(session)

    const toggleForm = () => {
        setIsSignupFormOpen(!isSignupFormOpen)
      }

      // Sign In
      const signinHandler = async () =>{
        try{
          await signIn();
        }catch(error){
          console.log('SIGN IN ERROR', error)    
        }
      }

      // Sign Out
      const signoutHandler = async () =>{
        try{
          await signOut();
        }catch(error){
          console.log('SIGN out ERROR', error)    
        }
      }
      

    return(
        <header>
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
                   {session ? (
                    <>
                    <div>{session?.user?.name}</div>                    
                    <Button handleClick={signoutHandler} text='Log out' />
                    
                    </>
                   ): (
                    <div>
                        <Button handleClick={toggleForm} text="Sign Up" containerStyle="mr-2" />
                        <Button handleClick={signinHandler}  text="Sign In" />
                        
                    </div>
                   )}        
                    
                </ul>
            </nav>
            </header>
    )
}

export default Navbar