import {createSlice} from "@reduxjs/toolkit";
const INITIAL_STATE = {
    cartList:[],
    cartCount:0,
    totalPrice:0,
    totalCount:0,
    ordertotal:0,
    totalgst:0,
};
const cartSlice = createSlice({
 name:"cart",
 initialState:INITIAL_STATE,
 reducers:{
    addToCart: (state, action) => {
      const itemExist = state.cartList.find((item) => item.id === action.payload.id);
      if(itemExist) {
       state.cartList.forEach((item) => {
        item.price2=Number(item.price)
 if(item?.id === action.payload.id){
    item.count = 1;
   
 }
});
return;
}
        state.cartList.push({
            ...action.payload,
            count:1,
            price2:0,
        });
    },
    increment: (state,action) => {
        const productID = action.payload;
        state.cartList.forEach((item)=> {
            if (item?.id === productID) {
                item.count++;
                item.price2=Number(item.price)*Number(item.count);
            }
        });
    },
    decrement: (state,action) => {
        const productID = action.payload;
        state.cartList.forEach((item)=> {
            if (item.count > 1 ) {
                item.count--;
                item.price2= (Number(item.price2)-Number(item.price));
            }
        });
    },
    gettotalprice:(state,action) => {
        let {totalPrice,totalCount,ordertotal,totalgst} = state.cartList.reduce(
            (total,cartitem) => {
                const {price,count,gst} = cartitem;
                const totalamount = price*count;
                const totalG = gst*count;
               
                total.totalPrice += totalamount;
                total.totalCount +=count;
                total.totalgst += totalG;
                total.ordertotal = totalamount+totalG;

                return total;

            },
           {
            totalPrice:0,
            totalCount:0,
            totalgst:0,
            ordertotal:0,
           } 
        )
        state.totalPrice = parseInt(totalPrice);
        state.totalCount = totalCount;
        state.totalgst = totalgst;
        state.ordertotal =ordertotal;
    }
 }
});

export const{increment,decrement,addToCart,gettotalprice} = cartSlice.actions;


export default cartSlice.reducer;           