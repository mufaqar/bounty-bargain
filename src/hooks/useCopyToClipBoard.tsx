import React, { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const useCopyToClipBoard = () => {
     const inputRef = useRef<any>(null)

     const notify = () => toast("Text successfully copied to clipboard !");
     const errNotify = () => toast.error('Unable to copy text to clipboard')

     const handleCopyToClipboard = () => {
          if (inputRef.current) {
               const inputValue = inputRef.current?.value;
               // Using the modern Clipboard API
               navigator.clipboard.writeText(inputValue).then(() => {
                    notify()
               }).catch((err) => {
                    errNotify()
               });
          }
     };
     return {
          inputRef, handleCopyToClipboard
     }
}

export default useCopyToClipBoard