"use client"
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react'
import { client } from '../../../sanity/lib/client';

const Login = () => {

  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const onSubmit = async (e: React.FormEvent) => {
    console.log('click')
    // e.preventDefault();
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: 'test@gmail.com',
        password: 'passsword',
        callbackUrl,
      });
      console.log("🚀 ~ onSubmit ~ res:", res)

      if (!res?.error) {
        router.push(callbackUrl);
      } else {
        console.log("invalid email or password");
      }
    } catch (error: any) {
      console.log("🚀 ~ onSubmit ~ error:", error)
    }
  };


  const createUser = () =>{
    const doc = {
      fname:  'users',
      lname:  'users',
      gender:  'users',
      dateofbirth:  'users',
      email:  'users',
      password: "hashed_password",
    }    
   
    fetch("http://localhost:3000/api/create-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer skP2S7MCtS3jgy2tHbkxY6JpgaMAwJxDv9Lp94WL2e5bRci5jHBXlOQiymO6UIq9KMRvmHaDLvlQg3vKz8x8omnTGAp35aQfWrA29gEHU1PLoTdaGDWVBu7pG5X4W5Aeoz737jZ0nmZeVFZdHzUJnaH23VVcjN3dVrizmxMkUnfpHrAHdxS8",
      },
      body: JSON.stringify(doc)

    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  } 


  return (
    <button onClick={createUser}>click me</button>
  )
}

export default Login