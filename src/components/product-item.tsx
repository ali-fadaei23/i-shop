import "./ProductItem.css";
import { useContext, useState } from "react";
// import { Context } from "../../shared/context/Context";
// import { useSnackbar } from "notistack";
// import { useAuth } from "../../shared/auth/AuthContext";
// import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import Link from "next/link";
import { Button, Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
// import { ReactComponent as AddWishlist } from "../../assets/img/add-wishlist.svg";
// import { ReactComponent as RemoveWishlist } from "../../assets/img/remove-wishlist.svg";

export default function ProductItem(props: {
  product: {
    id: string;
    category: string;
    image: string;
    title: string;
    price: string;
    description: string;
  };
}) {
  const { id, category, image, title, price, description } = props.product;
  //   let auth = useAuth();
  //   const { enqueueSnackbar } = useSnackbar();
  //   const { setWishlist } = useContext(Context);
  const [showBtn, setShowBtn] = useState(false);
  const [showAdded, setShowAdded] = useState(false);

  // Wishlist
  //   const wishlistCard = {
  //     id,
  //     category,
  //     image,
  //     title,
  //     price,
  //     description,
  //     added: showAdded,
  //   };

  //   const addToWishlist = (variant) => {
  //     setWishlist((prev) => {
  //       const state = prev.map((u) => ({ ...u }));
  //       const i = state.findIndex((v) => v.id === wishlistCard.id);
  //       if (state[i]?.id === wishlistCard.id) {
  //         setShowBtn(false);
  //         state.splice(i, 1);
  //       } else if (!auth.user) {
  //         enqueueSnackbar("You must log in!", { variant });
  //       } else {
  //         setShowBtn(true);
  //         setShowAdded(true);
  //         return [...prev, wishlistCard];
  //       }

  //       return state;
  //     });
  //   };

  return (
    <Card className='flex flex-col relative overflow-hidden h-auto text-foreground box-border bg-content1 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none w-[420px]'>
      <CardBody className='relative flex w-full p-3 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased px-3 pb-1'>
        <div
          className='relative shadow-black/5 shadow-none rounded-large'
          style={{ maxWidth: "fit-content" }}
        >
          <Image
            src={image}
            className='relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large aspect-video w-full object-cover object-top'
            alt='Card image'
            data-loaded='true'
            title={title}
          />
        </div>
        <span
          aria-hidden='true'
          className='w-px h-px block'
          style={{ marginLeft: "0.25rem", marginTop: "0.5rem" }}
        />
        <div className='flex flex-col gap-2 px-2'>
          <p className='text-large font-medium'>{category}</p>
          <p className='text-large font-medium'>{title}</p>
          <p className='text-large font-medium'>{"$ " + price}</p>
          <p className='text-small text-default-400'>{description}</p>
        </div>
      </CardBody>
      <CardFooter className='p-3 h-auto flex w-full items-center overflow-hidden color-inherit subpixel-antialiased rounded-b-large justify-end gap-2'>
        <Button
          className='z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-4 min-w-20 h-10 text-small gap-2 rounded-medium w-full [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none bg-transparent text-default-foreground data-[hover=true]:bg-default/40'
          type='button'
          variant='flat'
        >
          Wishlist
        </Button>
      </CardFooter>
    </Card>
  );
}
