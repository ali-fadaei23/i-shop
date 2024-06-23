"use client";
import Login from "@/components/login";
import { useEffect, useState } from "react";

export default function LoginPage() {
  return (
    <main className='min-h-[90.8vh] flex flex-col items-center justify-center'>
      <div className='w-full flex items-center justify-center py-4'>
        <Login />
      </div>
    </main>
  );
}
