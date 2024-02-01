"use client";
import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

  const [modalIsOpen, setModalIsOpen] = useState();
  const [copan, setCopan] = useState()
  const [newsLetterConfurmation, setNewsLetterConfurmation] = useState(false)
  const [selectSurvey, setSelectSurvey] = useState([])

  function closeModal() {
     setModalIsOpen(false);
  }
  function openModal(label) {
     setModalIsOpen(label);
  }

  return (
    <GlobalContext.Provider
      value={{
          modalIsOpen, setModalIsOpen, closeModal, openModal,
          copan, setCopan,
          newsLetterConfurmation, setNewsLetterConfurmation,
          selectSurvey, setSelectSurvey
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
