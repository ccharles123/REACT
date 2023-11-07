import { XMarkIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { Link } from 'react-router-dom';
import { ShoppingCardContext } from '../../Context';
import OrderCard from '../OrderCard';
import {totalprice} from '../../Utils'
import './style.css'


const CheckoutSideMenu = () =>{
    const {
        isCheckoutSideMenuOpen,
        closeCheckoutSideMenu,
        cartProduct,
        setCartProduct,
        handleCheckout
    } = React.useContext(ShoppingCardContext)

    const handleDelete = (id) =>{
        const filteredProducts = cartProduct.filter(product => product.id != id);
        setCartProduct(filteredProducts)
    }
    return(
        <aside 
        className={`${isCheckoutSideMenuOpen ? 'checkoutSideMenuOpen' : 'checkoutSideMenuClosed'} checkoutSideMenu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6' >
                <h2 className='font-medium text-xl'>My Order</h2>
                <div onClick={()=> closeCheckoutSideMenu()} ><XMarkIcon className="h-6 w-6 text-black cursor-pointer" /></div>
            </div>
            <div className='px-6 overflow-y-scroll max-h-[70%]'>
                {
                    cartProduct.map(product=>(
                        <OrderCard
                        key={product.id}
                        id={product.id} 
                        title={product.title}
                        imageUrl={product.image}
                        price={product.price}
                        quantity={product.quantity} // Mostrar la cantidad en lugar de contar entradas
                        handleDelete = {handleDelete}
                        />
                        ))
                }
            </div>
            <div className='px-6 absolute bottom-0 w-[100%] mb-6'>
                <p className='flex justify-between items-center bg-white mb-2'>
                    <samp className='font-medium'>Total:</samp>
                    <span className='font-medium text-2xl'>${totalprice(cartProduct)}</span>
                </p>
                <Link to='/my-orders/last' >
                    <button className={'bg-black py-3 text-white rounded-lg w-full'} onClick={()=>handleCheckout()}>Checkout</button>
                </Link>
            </div>
        </aside>
    )
}

export default CheckoutSideMenu;