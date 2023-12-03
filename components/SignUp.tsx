"use client"
import {FC, useRef, useState} from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast'

interface SignUpProps{
    isSignupFormOpen: boolean;
    // function that returns nothing
    toggleForm: () => void
}


const SignUp :FC<SignUpProps> = props => {
      
      const {isSignupFormOpen, toggleForm} = props

      // disable button when form is submitting
      const [isFormSubmitting, setIsFormSubmit] = useState(false);
      const [loading, setLoading] = useState(false);

      const emailRef = useRef<HTMLInputElement>(null)
      const passwordRef = useRef<HTMLInputElement>(null)

  const signupHandler = async () => {
    if(!emailRef.current || !passwordRef.current) return;

    setIsFormSubmit(true);
    setLoading(true)

    try {
      const response = await axios.post("/api/sign-up", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      if(response.data)toast.success(`${response.statusText}. Please sign in`)
      console.log(response)

      setIsFormSubmit(false);
      setLoading(false)

    } catch (error) {
      setIsFormSubmit(false);
      setLoading(false)
      toast.error('Something went wrong')
      console.log("Error", error);

    }
    toggleForm()
  }

    return isSignupFormOpen ? (
        <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-gray-900 bg-opacity-50 z-40">
          
            <div className="bg-white p-3 w-96 rounded shadow-lg">
                <h2 className="mb-3 text-lg font-bold flex justify-center">Sign up</h2>
                <form>
  

  <label className="block" >
    <span className="block text-md mb-2 font-medium text-slate-700">Email</span>
    <input type="email" ref={emailRef} id='email' className="peer ... p-2 rounded outline-none w-full bg-slate-200"/>
    <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
      Please provide a valid email address.
    </p>
  </label>

  <label className="block" >
    <span className="block text-md mb-2 font-medium text-slate-700">Password</span>
    <input type="password" ref={passwordRef} id='password' className="peer ... p-2 outline-none w-full rounded bg-slate-200"/>
    
  </label>

  <div className="flex justify-evenly items-center mt-5">
    <h1 className="hover:border-2 hover:text-red-500 hover:bg-slate-100 bg-red-900 text-white py-2 px-4 rounded cursor-pointer">
      <span onClick={() => toggleForm()}>Cancel</span></h1>
    {/* <Button text="Sign up" handleClick={signupHandler}   /> */}
    <button  type="submit"  onClick={signupHandler} disabled={isFormSubmitting} 
    className="bg-purple-900 text-white py-2 px-4 rounded shadow-lg cursor-pointer">{loading ? "Loading..." : "Sign Up"}</button>
    
  </div>

</form>
            </div>

        </div>
    ): (
    <></>
    ) 
}

export default SignUp



