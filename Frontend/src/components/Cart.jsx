import React from 'react'
import { AiFillDelete } from "react-icons/ai";
import { useSelector,useDispatch } from 'react-redux';

import {removeItem,increaseItemQuantity,decreaseItemQuantity,calculatePrice} from '../features/CartSlice'
const Cart = () => {

  const {cart,subTotal,shipping,tax,totalPrice}=useSelector((state)=>state.allCart)
  const dispatch=useDispatch();


  return (
     
        <div className='cart'>
          <main>
          { 
           cart.map((data)=>(
             <div className="cartItem">
               <img src={data.image} alt="Item" />
               <article>
                 <h3>{data.name}</h3>
                 <p>${data.price*data.quantity}</p>
               </article>

               <div>
                 <button onClick={()=>{dispatch(decreaseItemQuantity(data.id));dispatch(calculatePrice())}}>-</button>
                 <p>{data.quantity}</p>
                 <button onClick={()=>{dispatch(increaseItemQuantity(data.id));dispatch(calculatePrice())}}>+</button>
               </div>

               <AiFillDelete onClick={()=>{dispatch(removeItem(data.id));dispatch(calculatePrice())}}/>
             </div>))
          }
          </main>
          <aside>
            <h2>Subtotal:${subTotal}</h2>
            <h2>Shipping:${shipping}</h2>
            <h2>Tax:${tax}</h2>
            <h2>Total:${totalPrice}</h2>
          </aside>
        </div>
       
   
  )
}; 

// const CartItem = ({
//   imgSrc,
//   name,
//   price,
//   qty,
//   decrement,
//   increment,
//   deleteHandler,
//   id,
// }) => (
  
// );

export default Cart
