import Layout from "../../Components/Layout"
import React from 'react';
import { ShoppingCardContext } from '../../Context';
import OrderCard from '../../Components/OrderCard';
import {totalprice} from '../../Utils'

function MyOrder() {
  const {
    order,
} = React.useContext(ShoppingCardContext)

    return (
      <Layout>
        MyOrder
        <div className=''>
          {
            order?.slice(-1)[0].products.map(product=>(
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
          <p className='flex justify-between items-center bg-white mb-2'>
            <samp className='font-medium'>Total:</samp>
            <span className='font-medium text-2xl'>${0}</span>
          </p>
      </div>
      </Layout>
    )
  }
  
  export default MyOrder