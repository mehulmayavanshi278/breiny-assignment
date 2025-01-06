import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";


const CartContext = createContext({});


const CartProvider = ({ children }) => {
        const [products, setProducts] = useState([
            {
              id: 1,
              name: "Wireless Earbuds",
              price: 1499,
              image: "https://via.placeholder.com/150"
            },
            {
              id: 2,
              name: "Smartphone",
              price: 12999,
              image: "https://via.placeholder.com/150"
            },
            {
              id: 3,
              name: "Laptop",
              price: 54999,
              image: "https://via.placeholder.com/150"
            },
            {
              id: 4,
              name: "Smartwatch",
              price: 4999,
              image: "https://via.placeholder.com/150"
            }
          ]);
  const [cartItems , setCartItems] = useState([]); 
  const addToCarts =  (id)=>{
    console.log("cartitems:" , cartItems)
    console.log(id);
    let isincart=false;
    for(let i=0;i<cartItems.length;i++){
        if(cartItems[i].id==id){
            isincart=true;
            console.log("already in");
        }
    }
    console.log("isincart is ", isincart)
    if(isincart){
        toast.success("Item already in cart");
        console.log("true");
        return;
    }
    console.log("after ")
    setCartItems([...cartItems , products[id-1]])
  }
  const DeleteFromCarts =  (id)=>{
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  }
  return (
    <CartContext.Provider value={{cartItems , setCartItems , addToCarts , DeleteFromCarts , products}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;


export const useCart = () => {
  return useContext(CartContext);
};
