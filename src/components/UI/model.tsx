import { GlobalContext } from '@/context/global-context';
import { modelboxStyle } from '@/utils';
import React, { useContext } from 'react'
import Modal from 'react-modal';
import { AiOutlinePlus } from "react-icons/ai";

const Model = ({ children }: any) => {
     const { closeModal, modalIsOpen } = useContext(GlobalContext)

     return (
          <>
               <Modal
                    isOpen={modalIsOpen}
                    style={modelboxStyle}
                    onRequestClose={closeModal}
                    contentLabel="Modal"
               >
                    <div className='flex justify-end'>
                         <button onClick={closeModal}><AiOutlinePlus className="text-2xl text-gray-400 hover:text-neutral rotate-45" /></button>
                    </div>
                    {children}
               </Modal>

          </>
     )
}

export default Model