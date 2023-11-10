import { ChevronRightIcon } from '@heroicons/react/24/solid'

const OrdersCard = props =>{
    // eslint-disable-next-line react/prop-types
    const{ totalPrice, totalProducts, data } = props

    return(
        <div className="flex justify-between items-center mb-4 border border-black rounded-lg p-4 w-80">
            <div className="flex justify-between items-center w-[100%]">
                <p className="flex flex-col">
                    <span className="font-medium">{data}</span>
                    <span className="font-medium">{totalProducts} articles</span>
                </p>
                <p className='flex justify-center items-center'>
                <span className="font-medium text-2xl">${totalPrice}</span>
                <ChevronRightIcon className="h-5 w-6 text-black cursor-pointer ml-2" />
                </p>
            </div>
        </div>
    )
}
export default OrdersCard