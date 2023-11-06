import React from "react";


const ShoppingCardContext = React.createContext();

function ShoppingCardProvider({children}) {
    
    //ShoppingCard * Increments Quantity buy Car 
    const [count, setCount] = React.useState(0);

    //Product * Details Open/CLose
    const [isProductDetailsOpen, setIsProductDetailsOpen] = React.useState(false);
    const openProductDetails = ()=>{setIsProductDetailsOpen(true)};
    const closeProductDetails = ()=>{setIsProductDetailsOpen(false)};

    //Product Detail * Show product

    const [productToShow, setProductToShow] = React.useState({});

    const showProduct = (productDetail)=>{
        openProductDetails()
        setProductToShow(productDetail.data)
    }

    console.log(productToShow)

    return(
        <ShoppingCardContext.Provider value={{
            count, 
            setCount,
            openProductDetails,
            closeProductDetails,
            isProductDetailsOpen,
            productToShow,
            setProductToShow,
            showProduct
        }}>
            {children}
        </ShoppingCardContext.Provider>
    );
}

export { ShoppingCardContext, ShoppingCardProvider }