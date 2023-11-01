import { ProductProps } from "@/types"


export async function fetchProduct(){

    const response = await fetch('https://fakestoreapi.com/products')

    const result = await response.json()

    return result
}