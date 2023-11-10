import Layout from "../../Components/Layout"
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import React from 'react';
import { ShoppingCardContext } from '../../Context';
import OrderCard from '../../Components/OrderCard';
import { Link } from "react-router-dom";


function MyOrder() {
  const {
    order,
} = React.useContext(ShoppingCardContext)

const currentPath = window.location.pathname
let index = currentPath.substring(currentPath.lastIndexOf("/") + 1)
if(index =="last") index = 0
console.log(index)
console.log("position", order[index])

    return (
      <Layout>
        <div className="flex justify-center items-center relative w-80">
          <Link to="/my-orders" className="absolute left-0"> 
            <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer"/>
          </Link>
          <h1>My Order</h1>
        </div>
          <div className='px-6 overflow-y-scroll max-h-96 mt-6 flex-1 w-[35%]'>
            {
              order?.[index]?.products.map(product=>(
                  <OrderCard
                  key={product.id}
                  id={product.id} 
                  title={product.title}
                  imageUrl={product.image}
                  price={product.price}
                  quantity={product.quantity} // Mostrar la cantidad en lugar de contar entradas
                  />
                  ))
            }
        </div>
        <p className='flex justify-between items-center bg-white'>
          <samp className='font-medium'>Total:</samp>
          <span className='font-medium text-2xl'>${order[index].totalPrice}</span>
        </p>
      </Layout>
    )
  }
  
  export default MyOrder