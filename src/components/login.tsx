import { Card, Input, CardBody, Button, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import LoginImage from "../assets/login-image.png";

export default function Login() {
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
              />
              <Input
                classNames={{
                  label:
                    "text-xl font-semibold group-data-[filled-within=true]:text-primary-500",
                }}
                size='md'
                type='password'
                variant='underlined'
                color='primary'
                label='Password'
                placeholder='Enter your password'
              />
              <div className='w-full flex items-center justify-center'>
                <Button
                  size='lg'
                  className='w-full sm:w-1/3 font-semibold'
                  color='primary'
                  variant='ghost'
                  onClick={() => console.log("Clicked")}
                >
                  Login
                </Button>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
