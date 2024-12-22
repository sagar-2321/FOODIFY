import { createSlice } from "@reduxjs/toolkit"


const cartSlice = createSlice({
  name:'cart',
  initialState: {
    items: []
  },
  reducers:{
    addItem: (state, action) => {
      const item=action.payload;
      console.log(item);
      const existingItem = state.items.find(
        (it) => it.card.info.id === item.card.info.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const id=action.payload;
      console.log(id);
      const existingItem = state.items.find(
        (it) => it.card.info.id === id
      );
      if (existingItem.quantity) {
        existingItem.quantity -= 1;
      }
      if(existingItem.quantity===0) {
        state.items=state.items.filter((it)=>it.card.info.id !== id)
      }
      
    },
    clearCart: (state) => {
      state.items.length = 0;
    }
  }

}
);
export const {addItem, removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;
