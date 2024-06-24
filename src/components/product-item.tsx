import { useContext, useState } from "react";
// import { Context } from "../../shared/context/Context";
// import { useSnackbar } from "notistack";
// import { useAuth } from "../../shared/auth/AuthContext";
// import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import Link from "next/link";
import { Button, Card, CardBody, CardFooter } from "@nextui-org/react";
import { BsBookmarkPlusFill, BsBookmarkHeartFill } from "react-icons/bs";
import { AiFillDollarCircle } from "react-icons/ai";
import { Chip } from "@nextui-org/react";

import Image from "next/image";
// import { ReactComponent as AddWishlist } from "../../assets/img/add-wishlist.svg";
// import { ReactComponent as RemoveWishlist } from "../../assets/img/remove-wishlist.svg";

export default function ProductItem(props: {
  product: {
    id: number;
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

  // const wishlistCard = {
  //   id,
  //   category,
  //   image,
  //   title,
  //   price,
  //   description,
  //   added: showAdded,
  // };

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
    <Card className='flex flex-col w-80 h-[22rem] relative overflow-hidden text-foreground box-border bg-content1 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none'>
      <CardBody className='relative flex w-full p-3 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased px-3 pb-1'>
        <div className='relative shadow-none min-w-full flex justify-center'>
          <Link href={`/products/${id}`}>
            <Image
              src={image}
              width={100}
              height={100}
              className='w-60 h-44 relative hover:opacity-90 z-10 object-contain'
              alt='Card image'
              title={title}
            />
          </Link>
        </div>
        <span
          aria-hidden='true'
          className='w-px h-px block'
          style={{ marginLeft: "0.25rem", marginTop: "0.5rem" }}
        />
        <div className='flex flex-col gap-2 px-2 mt-2'>
          <p className='text-xs text-gray-500 font-normal'>{category}</p>
          <p className='text-sm max-h-fit overflow-hidden font-extralight truncate'>
            {title}
          </p>
          <Chip
            classNames={{
              base: "",
              content: "font-bold",
            }}
            startContent={<AiFillDollarCircle className='text-medium' />}
            className='text-xs'
            variant='flat'
            size='sm'
            color='primary'
          >
            {price}
          </Chip>
          <p className='text-large font-medium bg'></p>
        </div>
      </CardBody>
      <CardFooter className='p-3 pt-0 h-auto flex w-full items-center overflow-hidden color-inherit subpixel-antialiased rounded-b-large justify-end gap-2'>
        <Button
          className='w-full hover:text-orange-500'
          type='button'
          variant='ghost'
          color='primary'
        >
          {showBtn && showAdded ? (
            <BsBookmarkHeartFill style={{ width: "1rem", height: "1rem" }} />
          ) : (
            <BsBookmarkPlusFill style={{ width: "1rem", height: "1rem" }} />
          )}
          Wishlist
        </Button>
      </CardFooter>
    </Card>
  );
}
