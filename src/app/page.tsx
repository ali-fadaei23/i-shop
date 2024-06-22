"use client";
import { useEffect, useState } from "react";
import ProductList from "@/components/product-list";
import Slider from "@/components/slider";
import { CircularProgress } from "@nextui-org/react";
import Image from "next/image";

export default function Home() {
  const [products, setProducts] = useState([]);
  // const [loadingProduct, setLoadingProduct] = useState(true);

  useEffect(() => {
    const sendRequest = async () => {
      const response = await fetch("https://fakestoreapi.com/products");

      const responseData = await response.json();
      setProducts(responseData);
      // setLoadingProduct(false);
    };
    sendRequest();
  }, []);
  console.log(products);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <Slider />
      <>
        {/* {loadingProduct ? (
          <div className='w-screen h-[90vh]'>
            <div className='absolute top-1/2 left-1/2'>
              <CircularProgress label='NOW LOADING...' />
            </div>
          </div>
        ) : ( */}
        <div className='products'>
          <span className='text-6xl font-extrabold flex items-center justify-center py-8'>
            All Products
          </span>
          <ProductList products={products} />
        </div>
        {/* )} */}
      </>
    </main>
  );
}
