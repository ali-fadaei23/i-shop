"use client";
import { useEffect, useState } from "react";
import ProductList from "@/components/product-list";
import Slider from "@/components/slider";
import { CircularProgress } from "@nextui-org/react";
import Image from "next/image";

export default function Home() {
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
  console.log(products);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <Slider />
      <>
        {loadingProduct ? (
          <div className='absolute left-0 top-0 w-screen h-screen bg-neutral-900'>
            <CircularProgress className='absolute left-1/2 top-1/2' />
          </div>
        ) : (
          <div className='products'>
            <span className='text-6xl font-extrabold flex items-center justify-center py-8'>
              All Products
            </span>
            <ProductList products={products} />
          </div>
        )}
      </>
    </main>
  );
}
