import React, { createContext, useState, useContext, FC } from "react";
import * as jose from "jose";

type UserId = string | null | undefined;

export const AuthContext = createContext({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const useProvideAuth = () => {
  const [openModal, setOpenModal] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState<UserId>(null);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  const signIn = async (username: string, password: string) => {
    const response = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    });
    const responseData = await response.json();
    return responseData;
  };

  const getUserInfo = async (userId: UserId) => {
    // const id = jose.decodeJwt(user.token)
    const response = await fetch(`https://fakestoreapi.com/users/${userId}`);
    const responseData = await response.json();

    return responseData;
  };

  const handleLogin = async (username: string, password: string) => {
    try {
      setLoading(true);
      const responseSignIn = await signIn(username, password);
      setUser(responseSignIn);
      const id = jose.decodeJwt(responseSignIn.token);
      setUserId(id.sub);
      const responseUserInfo = await getUserInfo(id.sub);
      setUserInfo(responseUserInfo);
      setLoading(false);
    } catch (error: any) {
      setErrors(error);
    }
  };

  const signUp = async (signUpData: {
    email: string;
    username: string;
    password: string;
    name: {
      firstname: string;
      lastname: string;
    };
    address: {
      city: string;
      street: string;
      number: number;
      zipcode: string;
      geolocation: {
        lat: string;
        long: string;
      };
    };
    phone: string;
  }) => {
    const response = await fetch("https://fakestoreapi.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signUpData),
    });
    const responseData = await response.json();
    return responseData;
  };

  const handleSignUp = async (signUpData: {
    email: string;
    username: string;
    password: string;
    name: {
      firstname: string;
      lastname: string;
    };
    address: {
      city: string;
      street: string;
      number: number;
      zipcode: string;
      geolocation: {
        lat: string;
        long: string;
      };
    };
    phone: string;
  }) => {
    try {
      setLoading(true);
      const responseSignUp = await signUp(signUpData);
      setOpenModal(true);
      console.log(responseSignUp, "  Success Sign Up");
      setLoading(false);
    } catch (error: any) {
      setErrors(error);
    }
  };

  const signOut = async () => {
    const response = await fetch(`https://fakestoreapi.com/users/${userId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      setUser(null);
      setUserInfo(null);
      setUserId(null);
      setUser(null);
    }
  };

  return {
    openModal,
    setOpenModal,
    handleSignUp,
    handleLogin,
    userId,
    user,
    userInfo,
    signOut,
    signUp,
    errors,
    loading,
  };
};
