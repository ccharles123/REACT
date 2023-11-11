import React from "react"
import { Link } from 'react-router-dom';
import Layout from "../../Components/Layout"
import { ShoppingCardContext } from '../../Context';
import OrdersCard from '../../Components/OrdersCard'

function MyOrders() {
  
  const {
    order
  }= React.useContext(ShoppingCardContext)

    return (
      <Layout>
      <div className="flex justify-center items-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">My Orders</h1>
      </div>
      <div className='px-6 overflow-y-scroll max-h-96 mt-6 flex-1 w-[27%]'>
      {order.map((order, index) => {
        // Calcula la sumatoria de la propiedad 'quantity' de cada producto en la orden
        const totalProducts = order.products.reduce((total, product) => total + product.quantity, 0);

        return (
          <Link key={index} to={`${index}`}>
            <OrdersCard
              data={order.data}
              totalPrice={order.totalPrice}
              totalProducts={totalProducts} // Pasa la sumatoria como 'totalProducts'
            />
          </Link>
        );
      })}
      </div>
    </Layout>
    )
  }
  
  export default MyOrders