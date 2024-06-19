import { products } from "../Constants"

const Products = () => {
  return (
    <section className="max-container max-sm:mt-16">
      <div className="flex flex-col justify-start gap-5">
        <h1 className="text-3xl font-palanquin font-extrabold ">Products</h1>
        <p className="font-montserrat lg:max-w-2xl mt-2 text-slate-gray">The water pump serves as an essential tool in both rural and urban settings, drawing water from reservoirs to support agriculture, industry, and communities. Its constant operation ensures a reliable supply of life-sustaining water, vital for nourishing crops, sustaining livelihoods, and fostering economic development.</p>
        <div 
        className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-16 mt-8">
          {products.map((img)=>(
           <div className='flex flex-col w-full max-sm:w-full items-center bg-blue-200 bg-center bg-cover rounded-xl shadow-2xl'>
           <img src={img} className='w-[242px] h-[242px] object-contain p-4' />
         </div>
          ))}          
        </div>
      </div>
    </section>
  )
}

export default Products