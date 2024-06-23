"use client";
import { useEffect, useState } from "react";
import ProductList from "@/components/product-list";
import Slider from "@/components/slider";
import { CircularProgress } from "@nextui-org/react";
import Image from "next/image";

export default function Home() {
  // const [categoryItem, setCategoryItem] = useState([]);
  // const [cartItems, setCartItems] = useState([]);
  // const [wishlist, setWishlist] = useState([]);
  const [products, setProducts] = useState([]);
  const [loadingProduct, setLoadingProduct] = useState(true);

  useEffect(() => {
    const sendRequest = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const responseData = await response.json();
      setProducts(responseData);
      setLoadingProduct(false);
    };
    sendRequest();
  }, []);

  return (
    <main className='flex flex-col items-center justify-between'>
      <>
        {loadingProduct ? (
          <div className='absolute left-0 top-0 w-screen h-screen opacity-40 flex items-center justify-center'>
            <CircularProgress
              size='lg'
              color='primary'
              label='Now Loading'
              className='absolute left-1/2 top-1/2 text-black'
            />
          </div>
        ) : (
          <>
            <Slider />
            <div className='products'>
              <span className='text-7xl text-primary-500 font-extrabold flex items-center justify-center py-8'>
                All Products
              </span>
              <ProductList products={products} />
            </div>
          </>
        )}
      </>
    </main>
  );
}
