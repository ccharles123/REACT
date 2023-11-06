import { XMarkIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { ShoppingCardContext } from '../../Context';
import OrderCard from '../OrderCard';
import './style.css'


const CheckoutSideMenu = () =>{
    const {
        isCheckoutSideMenuOpen,
        closeCheckoutSideMenu,
        cartProduct,
    } = React.useContext(ShoppingCardContext)

    return(
        <aside 
        className={`${isCheckoutSideMenuOpen ? 'checkoutSideMenuOpen' : 'checkoutSideMenuClosed'} checkoutSideMenu  flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div onClick={()=> closeCheckoutSideMenu()} ><XMarkIcon className="h-6 w-6 text-black cursor-pointer" /></div>
            </div>
            <div className='px-6'>
                {
                    cartProduct.map(product=>(
                        <OrderCard
                        key={product.id} 
                        title={product.title}
                        imageUrl={product.image}
                        price={product.price}
                        />
                        ))
                }
            </div>
        </aside>
    )
}

export default CheckoutSideMenu;