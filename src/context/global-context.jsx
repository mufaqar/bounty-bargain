"use client";
import React, { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

  const [modalIsOpen, setModalIsOpen] = useState();
  const [copan, setCopan] = useState()
  const [newsLetterConfurmation, setNewsLetterConfurmation] = useState(false)
  const [selectSurvey, setSelectSurvey] = useState([])
  const [isCategory, setIsCategory] = useState(false)

  function closeModal() {
     setModalIsOpen(false);
  }
  function openModal(label) {
     setModalIsOpen(label);
  }

  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let timeoutId;

    function handleScroll() {
      setIsScrolling(true);
      clearTimeout(timeoutId);
      setIsCategory(false)
      timeoutId = setTimeout(() => {
        setIsScrolling(false);
      }, 150); // Adjust the delay as needed
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <GlobalContext.Provider
      value={{
          modalIsOpen, setModalIsOpen, closeModal, openModal,
          copan, setCopan,
          newsLetterConfurmation, setNewsLetterConfurmation,
          selectSurvey, setSelectSurvey, isScrolling,
          isCategory, setIsCategory
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
