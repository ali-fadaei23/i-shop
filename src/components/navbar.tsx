"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import {
  BsFillPersonFill,
  BsFillBookmarkHeartFill,
  BsGridFill,
  BsBoxArrowDown,
} from "react-icons/bs";
import BrandLogo from "../assets/brand-logo.svg";
import AvatarImage from "../assets/women-clothes.jpg";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Button,
  AvatarIcon,
  DropdownItem,
  DropdownMenu,
  Avatar,
  DropdownTrigger,
  Dropdown,
} from "@nextui-org/react";
import Link from "next/link";
import { useAuth } from "@/shared/auth/auth-context";
import { usePathname } from "next/navigation";

const menuItems = [
  "Electronics",
  "Jewelery",
  "Men's Clothing",
  "Women's Clothing",
];
type Categories = string[];
export default function NavBar() {
  const pathname = usePathname();
  const auth = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [categories, setCategories] = useState<Categories>([]);
  const [loadingCategories, setLoadingCategories] = useState(false);
  // useEffect(() => {
  //   setCartItems([]);
  // }, [setCartItems]);

  useEffect(() => {
    const sendRequest = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/categories`
      );
      const responseData = await response.json();

      setCategories(responseData);
      setLoadingCategories(false);
    };
    sendRequest();
  }, []);
  return (
    <div>
      <Navbar
        classNames={{
          wrapper: "max-w-full w-full",
          item: [
            "flex",
            "relative",
            "h-full",
            "items-center",
            "data-[active=true]:after:content-['']",
            "data-[active=true]:text-primary",
            "data-[active=true]:after:absolute",
            "data-[active=true]:after:bottom-0",
            "data-[active=true]:after:left-0",
            "data-[active=true]:after:right-0",
            "data-[active=true]:after:h-[2px]",
            "data-[active=true]:after:rounded-[2px]",
            "data-[active=true]:after:bg-primary",
          ],
        }}
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent className='sm:hidden' justify='center'>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarContent className='sm:hidden pr-3' justify='center'>
          <NavbarBrand>
            <Link href={"/"}>
              <Image src={BrandLogo} width={64} height={64} alt='Brand Logo' />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className='hidden sm:flex gap-4' justify='center'>
          <NavbarBrand>
            <Link href={"/"}>
              <Image src={BrandLogo} width={64} height={64} alt='Brand Logo' />
            </Link>
          </NavbarBrand>
          {categories.map((v, index) => {
            return (
              <NavbarItem
                isActive={pathname.startsWith(`/${v}`) ? true : false}
                key={`${index}-categories`}
              >
                <Link className='capitalize' href={`/${v}`}>
                  {v}
                </Link>
              </NavbarItem>
            );
          })}
        </NavbarContent>
        {auth!.user ? (
          <NavbarContent as='div' justify='end'>
            <Dropdown placement='bottom-end'>
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as='button'
                  className='transition-transform bg-primary-500'
                  color='primary'
                  name='John doe'
                  size='md'
                  src='https://i.pravatar.cc/150?u=a04258114e29026302d'
                />
              </DropdownTrigger>
              <DropdownMenu aria-label='Profile Actions' variant='flat'>
                <DropdownItem key='profile' className='h-14 gap-2'>
                  <div className='flex flex-col'>
                    <p className='font-normal text-medium'>Signed in as</p>
                    <p className='font-semibold text-medium'>
                      {auth?.userInfo !== null && auth?.userInfo.email}
                    </p>
                  </div>
                </DropdownItem>
                <DropdownItem className='' key='profile' color='default'>
                  <div className='flex items-center flex-row text-primary-500 justify-between gap-3 text-medium'>
                    <BsFillPersonFill className='text-large' />
                    Profile
                  </div>
                </DropdownItem>
                <DropdownItem
                  className=''
                  showDivider
                  key='wishlist'
                  color='default'
                >
                  <div className='flex items-center flex-row text-primary-500 justify-between gap-3 text-medium'>
                    <BsFillBookmarkHeartFill className='text-large' />
                    Wishlist
                  </div>
                </DropdownItem>
                <DropdownItem
                  className=''
                  key='logout'
                  color='danger'
                  onClick={() => auth?.signOut()}
                >
                  <div className='flex items-center flex-row justify-between text-primary-500 hover:text-danger-500 gap-3 text-medium'>
                    <BsBoxArrowDown className='text-large' />
                    Log Out
                  </div>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarContent>
        ) : (
          <NavbarContent justify='end'>
            <NavbarItem className='hidden lg:flex'></NavbarItem>
            <NavbarItem>
              <Link className='hover:text-primary-500' href={"/login"}>
                Sign in
              </Link>
            </NavbarItem>
          </NavbarContent>
        )}

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link className='w-full' href='#'>
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
