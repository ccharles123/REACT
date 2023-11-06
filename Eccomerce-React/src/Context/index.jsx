import React from "react";


const ShoppingCardContext = React.createContext();

// eslint-disable-next-line react/prop-types
function ShoppingCardProvider({children}) {
    
    //ShoppingCard * Increments Quantity buy Car 
    const [count, setCount] = React.useState(0);

    //Product * Details Open/CLose
    const [isProductDetailsOpen, setIsProductDetailsOpen] = React.useState(false);
    const openProductDetails = ()=>{setIsProductDetailsOpen(true)};
    const closeProductDetails = ()=>{setIsProductDetailsOpen(false)};

    //CheckoutSideMenu *Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = React.useState(false);
    const openCheckoutSideMenu = ()=>{setIsCheckoutSideMenuOpen(true)};
    const closeCheckoutSideMenu = ()=>{setIsCheckoutSideMenuOpen(false)};

    console.log("open?",isCheckoutSideMenuOpen)

    //Product Detail * Show product
    const [productToShow, setProductToShow] = React.useState({});

    //agregar producto en nuestro carrito:
    const [cartProduct, setCartProduct] = React.useState([]);

    const showProduct = (productDetail)=>{
        openProductDetails()
        closeCheckoutSideMenu()
        setProductToShow(productDetail.data)
    }
    const addCartProductsToCart = (productData)=>{
        openCheckoutSideMenu()
        closeProductDetails()
        setCount(count + 1)
        setCartProduct([...cartProduct, productData])
    }

    console.log("CART", cartProduct)


    console.log("PRODUCT TO SHOW",productToShow)

    return(
        <ShoppingCardContext.Provider value={{
            count, 
            setCount,
            openProductDetails,
            closeProductDetails,
            isProductDetailsOpen,
            productToShow,
            setProductToShow,
            showProduct,
            cartProduct,
            setCartProduct,
            addCartProductsToCart,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            isCheckoutSideMenuOpen,
        }}>
            {children}
        </ShoppingCardContext.Provider>
    );
}

export { ShoppingCardContext, ShoppingCardProvider }