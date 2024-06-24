"use client";
import { useEffect, useState } from "react";
import ProductList from "@/components/product-list";
import Slider from "@/components/slider";
import { CircularProgress } from "@nextui-org/react";
import Login from "@/components/login";

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

  return (
    <main className='flex flex-col flex-1 items-center justify-between'>
      <>
        {loadingProduct ? (
          <div className='relative z-[90] w-screen h-[90vh] opacity-40 flex items-center justify-center'>
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
              <span className='text-8xl text-primary-500 font-bold flex items-center justify-center py-8'>
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
