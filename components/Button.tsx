import { MouseEventHandler } from "react";

interface Props{
    text: string;
    containerStyle?:string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({text, containerStyle, handleClick}: Props) =>{
    return(
        <button className={`btnStyle ${containerStyle}`} onClick={handleClick} >
            {text}
        </button>

    )
}

export default Button