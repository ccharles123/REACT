import { XMarkIcon } from '@heroicons/react/24/solid'


const OrderCard = props =>{
    // eslint-disable-next-line react/prop-types
    const{ title, imageUrl, price } = props
    return(
        <div className="flex justify-between items-center mb-3">
            <div className='flex items-center gap-2 h-[20%]'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-contain' src={imageUrl} alt={title} />
                </figure>
            <div className='w-[60%]'>
                <p className='text-sm font-light'>{title}</p>
            </div>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>${price}</p>
                <XMarkIcon className="h-6 w-6 text-black cursor-pointer" />            
            </div>
        </div>
    )
}
export default OrderCard