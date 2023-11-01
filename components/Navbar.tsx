import Button from "./Button"



const Navbar = () =>{
    return(
        <section>
            <nav>
                <ul className="flex justify-between max-container py-4 items-center">
                    <li className="text-2xl font-bold text-bold">ShopAPI</li>
                    <li>
                        <Button text="Sign In" />
                    </li>
                </ul>
            </nav>
            </section>
    )
}

export default Navbar