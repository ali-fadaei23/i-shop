import "./ProductList.css";
import ProductItem from "./product-item";
// import { SnackbarProvider } from "notistack";

export default function ProductList(props: { products: [] }) {
  const { products } = props;
  return (
    <>
      {products.map((item, index) => {
        return (
          //   <SnackbarProvider key={index} maxSnack={2}>
          //   </SnackbarProvider>
          <ProductItem key={`ishop-product-${index}`} product={item} />
        );
      })}
    </>
  );
}
