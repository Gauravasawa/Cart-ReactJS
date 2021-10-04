export const reducer=( state, action)=>{
    if (action.type === "REMOVE_ITEM") {
        return {
            ...state, 
            item: state.item.filter((CurrElem)=>{
                return CurrElem.id !== action.payload;
            })
        }
    }

    if (action.type=== "CLEAR_CART"){
        
        return{
            ...state,
            item: [],
        }
    } 

    if (action.type === "INCREMENT_CART"){
        
        const updatedCart = state.item.map((CurrElem) => {
          if (CurrElem.id === action.payload) {
            return {
              ...CurrElem,
              quantity: CurrElem.quantity + 1,
            };
          }
          return CurrElem;
        });
        return {...state, item: updatedCart}
       
    }
    
    
    if (action.type === "DECREMENT_CART") {
      const updatedCart = state.item
        .map((CurrElem) => {
          if (CurrElem.id === action.payload) {
            return {
              ...CurrElem,
              quantity: CurrElem.quantity - 1,
            };
          }
          return CurrElem;
        })
        .filter((CurrElem) => {
            return CurrElem.quantity !== 0
        });
      return { ...state, item: updatedCart };
     
    }

    if (action.type === "CART_TOTAL"){
        let { totalItem, totalAmt } = state.item.reduce(
          (accum, currVal) => {
            let { price, quantity } = currVal;
            let updatedTotalAmt = price * quantity;
            accum.totalAmt += updatedTotalAmt;
            accum.totalItem += quantity;
            return accum;
          },
          {
            totalItem: 0,
            totalAmt: 0,
          }
        );
        return { ...state, totalItem, totalAmt };
    } 
    
    
    return state;

}