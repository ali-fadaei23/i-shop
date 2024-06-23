"use client";
import {
  Card,
  Input,
  CardBody,
  Button,
  CardFooter,
  CircularProgress,
} from "@nextui-org/react";
import Image from "next/image";
import LoginImage from "../assets/login-image.png";

import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { useAuth } from "@/shared/auth/auth-context";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const auth = useAuth();
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    auth!.handleLogin(username, password);
  };

  useEffect(() => {
    if (auth!.user && !auth!.loading) {
      router.push("/");
    }
  }, [auth, router]);
  return (
    <>
      <Card className='w-full sm:w-1/2 h-full'>
        <CardBody className='overflow-visible p-0'>
          <div className='flex flex-row items-center'>
            <div>
              <Image
                className='w-96 p-0 bg-primary-400'
                src={LoginImage}
                width={1920}
                height={1080}
                alt='Login image'
              />
            </div>
            <div className='w-full sm:w-1/2 flex flex-col items-center justify-center mx-5 gap-5'>
              <div>
                <span className='text-4xl py-5 font-bold text-primary-500'>
                  Login
                </span>
              </div>
              <Input
                classNames={{
                  label:
                    "text-xl font-semibold group-data-[filled-within=true]:text-primary-500",
                }}
                size='md'
                type='text'
                variant='underlined'
                color='primary'
                label='Username'
                placeholder='Enter your username'
                value={username}
                onValueChange={setUsername}
              />
              <Input
                classNames={{
                  label:
                    "text-xl font-semibold group-data-[filled-within=true]:text-primary-500",
                }}
                endContent={
                  <button
                    className='focus:outline-none'
                    type='button'
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <FaEyeSlash className='text-2xl text-primary-500 pointer-events-none' />
                    ) : (
                      <FaEye className='text-2xl text-primary-500 pointer-events-none' />
                    )}
                  </button>
                }
                type={isVisible ? "text" : "password"}
                size='md'
                variant='underlined'
                color='primary'
                label='Password'
                placeholder='Enter your password'
                value={password}
                onValueChange={setPassword}
              />
              <form
                onSubmit={handleSubmit}
                className='w-full flex items-center justify-center'
              >
                <Button
                  type='submit'
                  size='lg'
                  className='w-full sm:w-1/3 font-semibold'
                  color='primary'
                  variant='ghost'
                  isDisabled={auth!.loading}
                >
                  Login
                </Button>
                {auth!.loading && (
                  <CircularProgress
                    size='sm'
                    color='primary'
                    className='absolute text-black'
                  />
                )}
              </form>
              <div className='w-full flex items-center justify-center'>
                <Link
                  className='text-primary-500 hover:text-primary-700 font-semibold'
                  href={"/signup"}
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
