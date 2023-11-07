/** This funtions calculate total prices of a new orden
*@param {Array} products cartProduct: Array of Object
*@returns {Number} Total price
*/
export const totalprice = 
    (products) => {
        const total = products.reduce((total, product) => total + product.price * product.quantity, 0);
        const formattedTotal = total % 1 === 0 ? total : total.toFixed(2);

        return formattedTotal;
      }