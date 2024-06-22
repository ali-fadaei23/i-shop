import ProductItem from "./product-item";
// import { SnackbarProvider } from "notistack";

export default function ProductList(props: {
  products: {
    id: number;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
  }[];
}) {
  const { products } = props;
  return (
    <div className='flex flex-row flex-wrap items-start justify-center gap-3'>
      {products.map((item, index) => {
        return (
          //   <SnackbarProvider key={index} maxSnack={2}>
          //   </SnackbarProvider>
          <ProductItem key={`ishop-product-${index}`} product={item} />
        );
      })}
    </div>
  );
}
