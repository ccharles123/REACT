import React from "react";


const ShoppingCardContext = React.createContext();

function ShoppingCardProvider({children}) {

    return(
        <ShoppingCardContext.Provider>
            {children}
        </ShoppingCardContext.Provider>
    );
}

export default { ShoppingCardContext, ShoppingCardProvider }