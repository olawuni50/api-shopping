import { ProductProps } from "@/types"


export async function fetchProduct(){

    const response = await fetch('https://jsonserver.reactbd.com/amazonPro')
    
    const result = await response.json()

    return result
}


export async function fetchPhone(){

    const res = await fetch('https://jsonserver.reactbd.com/phone')
    
    const resul = await res.json()

    return resul
}

export async function fetchPhoneCases(){

    const res = await fetch('https://jsonserver.reactbd.com/phonecase')
    
    const result = await res.json()

    return result
}

export async function fetchAccessories(){

    const res = await fetch('https://jsonserver.reactbd.com/accessories')
    
    const result = await res.json()

    return result
}

// export async function fetchProductDetails(id:any){
//     // const response = await fetch(`https://fakestoreapi.com/products/${id}`)

//     // const string = await response.text();
//     //   const json = string === "" ? {} : JSON.parse(string);
//     //   return json;
    

//       const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
//         method: 'GET'
//       });
//       const string = await response.text();
//       const json = string === "" ? {} : JSON.parse(string);
//       return json;
// }


export const fetchDetails = async (_id: number) =>{
  const details = await fetchProduct();  

  const singleItem = await details.find((product: any) =>product._id === _id);

  return singleItem

}