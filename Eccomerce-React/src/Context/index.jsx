import React from "react";


const ShoppingCardContext = React.createContext();

function ShoppingCardProvider({children}) {

    const [count, setCount] = React.useState(0);

    return(
        <ShoppingCardContext.Provider value={{
            count, 
            setCount
        }}>
            {children}
        </ShoppingCardContext.Provider>
    );
}

export { ShoppingCardContext, ShoppingCardProvider }