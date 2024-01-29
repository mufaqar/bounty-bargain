"use client";
import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [copan, setCopan] = useState()

  function closeModal() {
     setModalIsOpen(false);
  }
  function openModal() {
     setModalIsOpen(true);
  }

  return (
    <GlobalContext.Provider
      value={{
          modalIsOpen, setModalIsOpen, closeModal, openModal,
          copan, setCopan
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
