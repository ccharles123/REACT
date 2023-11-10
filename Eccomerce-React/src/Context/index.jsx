import React from "react";
import { totalprice } from "../Utils";
import swal from "sweetalert";
import { useState, useEffect } from "react";



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

    //consumir nuestra appi
    const apiUrl = "https://fakestoreapi.com"
    const [items, setItems] = useState(null)

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`${apiUrl}/products`)
          const data = await response.json()
          setItems(data)
        } catch (error) {
          console.error(`Oh no, ocurrió un error: ${error}`);
        }
      }
      fetchData()
    }, [])

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

    const handleCheckout = () => {
        if (cartProduct.length === 0) {
            swal("Agregar producto", "", "warning")
        } else {
        const currentDate = new Date();
        const formattedDate = `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()} ${currentDate.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
        })}`;
        const orderToAdd ={
            data: formattedDate,
            products: cartProduct,
            totalProducts: cartProduct.length,
            totalPrice: totalprice(cartProduct)
        }
        // Agregar el nuevo pedido al principio de la lista de pedidos
        setOrder([orderToAdd, ...order]);
        setCartProduct([])
        swal("Orden Agregada Exitosamente", "", "success")
        setCount(0)
        closeCheckoutSideMenu()
    }}
    
    console.log("cartProduct", cartProduct)
    console.log("Order", order)

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
            handleCheckout,
            order,
            items,
            useEffect
        }}>
            {children}
        </ShoppingCardContext.Provider>
    );
}

export { ShoppingCardContext, ShoppingCardProvider }