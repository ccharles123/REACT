import { XMarkIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { ShoppingCardContext } from '../../Context';
import './styles.css'

const ProductDetail = () =>{
    const {
        isProductDetailsOpen,
        closeProductDetails,
        productToShow
    } = React.useContext(ShoppingCardContext)

    console.log("product", productToShow)

    return(
        <aside 
        className={`${isProductDetailsOpen ? 'productDetailOpen' : 'productDetailClosed'} productDetail  flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div onClick={()=> closeProductDetails()} ><XMarkIcon className="h-6 w-6 text-black cursor-pointer" /></div>
            </div>
            <figure className='flex items-center justify-center px-6 h-[40%] '>
                <img className=' w-full h-full object-contain' src={productToShow.image} alt={productToShow.title} />
            </figure>
            <p className='flex flex-col p-4'>
                <span className='font-medium text-2xl mb-2'>${productToShow.price}</span>
                <span className='font-medium text-md'>{productToShow.title}</span>
                <span className='font-light text-sm'>{productToShow.description}</span>
            </p>
        </aside>
    )
}

export default ProductDetail;