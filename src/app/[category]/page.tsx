"use client";
import { useEffect, useState } from "react";
import { CircularProgress } from "@nextui-org/react";
import ProductList from "@/components/product-list";
import { useParams, usePathname } from "next/navigation";

export default function CategoryPages() {
  const pathname = useParams();
  const categoryPathname = pathname.category as string;
  const categoryName = decodeURI(categoryPathname);
  const [category, setCategory] = useState<any[]>([]);
  const [loadingCategory, setLoadingCategory] = useState(true);

  useEffect(() => {
    const sendRequest = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${categoryName}`
      );
      const responseData = await response.json();

      setCategory(responseData);
      setLoadingCategory(false);
    };
    sendRequest();
  }, [categoryName]);
  return (
    <main className='flex flex-col flex-1 items-center justify-between'>
      <>
        {loadingCategory ? (
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
            <div className='products'>
              <span className='text-8xl capitalize text-primary-500 font-bold flex items-center justify-center py-8'>
                {categoryName}
              </span>
              <ProductList products={category} />
            </div>
          </>
        )}
      </>
    </main>
  );
}
