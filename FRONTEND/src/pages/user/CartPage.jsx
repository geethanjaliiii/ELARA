import React, { useState, useEffect } from "react";
import CartItem from "@/components/user/cart/cartItem";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PriceDetails from "@/components/user/cart/PriceDetails";
import { axiosInstance } from "@/config/axiosConfig";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { useCart } from "@/context/CartContext";

export default function CartPage() {

  const {cart,cartItems,updateQuantity,removeItem,fetchCart}=useCart()
  const navigate=useNavigate()
 console.log("cart==",cart);
 
 useEffect(()=>{
  fetchCart()
 },[])
  // const [cart, setCart] = useState({});
  // const [cartItems, setCartItems] = useState([]);
  
  // const navigate = useNavigate();
  // const userId = useSelector((state) => state?.user.userInfo._id);
  // useEffect(() => {
  //   async function fetchCart() {
  //     try {
  //       const response = await axiosInstance.get(`/api/users/${userId}/cart`);
  //       const { items, ...cartInfo } = response.data.cart;
  //       console.log("response", response.data);
  //       console.log("items", items);
  //       setCart(response.data.cart);
  //       setCartItems(items);
  //     } catch (error) {
  //       console.log("cart not found", error);
  //     }
  //   }
  //   fetchCart();
  // }, [userId]);


  // const updateQuantity = async (itemId, newQty) => {
  //   try {
  //   const response=  await axiosInstance.patch(`/api/users/${userId}/cart/${itemId}`,{quantity:newQty});
  //  console.log("product",response.data);
  //  setCart(response.data.cart)
  //  setCartItems(response.data.cart.items)
  //   } catch (error) {
  //     console.log("error updating quantity",error);
  //   }
  // };

  // const removeItem = async(itemId) => {
  //   try {
  //   const response=  await axiosInstance.delete(`/api/users/${userId}/cart/${itemId}`)
  //   setCart(response.data.cart)
  //   setCartItems(response.data.cart.items)
  //   } catch (error) {
  //     console.log("Item not removed",error);
  //   }
  // };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto p-4 lg:p-6 flex-grow">
        {cartItems && cartItems.length>0 ?(
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="mb-6">
                <Label htmlFor="pincode">Delivery Pincode</Label>
                <div className="flex gap-2">
                  <Input
                    id="pincode"
                    placeholder="Enter Delivery Pincode"
                    className="max-w-[200px]"
                  />
                  <Button variant="outline">Check</Button>
                </div>
              </div>
              {/* cartitems */}
              <CartItem
                cartItems={cartItems}
                updateQuantity={updateQuantity}
                removeItem={removeItem}
              />
            </div>
            { <PriceDetails
              cart={cart}
              step={"bag"}
            />}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-auto text-center space-y-4">
            <p className="text-xl font-semibold text-gray-600">
              Your cart is empty!
            </p>
            <p className="text-gray-500">
              Looks like you haven’t added anything to your cart yet.
            </p>
            <Button
              variant="primary text-sm-bold"
              onClick={() => navigate("/shop")}
            >
              Start Shopping
            </Button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}