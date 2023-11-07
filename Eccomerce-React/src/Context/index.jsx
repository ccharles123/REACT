import React from "react";
import { totalprice } from "../Utils";


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

    //Shopping Cart: Add product to cart
    const [cartProduct, setCartProduct] = React.useState([]);

    //Shopping Cart: Order
    const [order, setOrder] = React.useState([]);

    const showProduct = (productDetail)=>{
        openProductDetails()
        closeCheckoutSideMenu()
        setProductToShow(productDetail.data)
    }

    const addCartProductsToCart = (productData)=>{
        openCheckoutSideMenu()
        closeProductDetails()
        setCount(count + 1)
        
  // Verifica si el producto ya está en el carrito
        const existingProductIndex = cartProduct.findIndex((product) => product.id === productData.id);

        if (existingProductIndex !== -1) {
            // Si el producto ya está en el carrito, aumenta la cantidad
            const updatedCartProduct = [...cartProduct];
            updatedCartProduct[existingProductIndex].quantity += 1;
            setCartProduct(updatedCartProduct);
        } else {
            // Si el producto no está en el carrito, agrégalo con cantidad 1
            setCartProduct([...cartProduct, { ...productData, quantity: 1 }]);
        }
    }

    const handleCheckout = ()=>{ 
        const orderToAdd ={
            data: "01.02.2023",
            product: cartProduct,
            totalProduct: cartProduct.length,
            totalPrice: totalprice(cartProduct)
        }
        setOrder([...order + orderToAdd])
        setCartProduct([])
    }

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
            handleCheckout
        }}>
            {children}
        </ShoppingCardContext.Provider>
    );
}

export { ShoppingCardContext, ShoppingCardProvider }