import { Hero, ProductCard, Promo, PromoChristmas } from '@/components'

import { ProductProps } from '@/types'
import { fetchProduct } from '@/utils'
import Image from 'next/image'

export default async function Home() {
  const products = await fetchProduct()

  console.log(products)

  const isDataEmpty =!Array.isArray(products) || products.length <1 || !products


  return (
    <main className="overflow-hidden">

      <section className="pt-24 max-sm:mx-10 max-sm:w-5/6">
        <Hero />
      </section>

      
      <section className="max-container mb-5">        
        <Promo />
        </section>

        <section className="max-container">
      <h1 className="font-bold text-3xl text-blue-500 leading-loose mb-5 mt-10">Popular Products</h1>
       
       <div  className="grid grid-cols-4 gap-10 max-sm:grid-cols-1">
       <PromoChristmas />
        {isDataEmpty ? (
          <div>No Data</div>
        ):(

          products?.map((product:any) => (
            <div>
              <ProductCard product={product} key={product.id} />
            </div>
          ))
        )}

        
       
       </div>
        
      </section>
      
    </main>
  )
}
