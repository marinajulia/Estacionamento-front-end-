import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { useState } from "react";
import { NewPhysicalPersonModal } from "./components/AddNewPhysicalPersonModal";
import { NewLegalPersonModal } from "./components/AddNewLegalPersonModal";

Modal.setAppElement('#root');

export function App() {

  const [isNewPhysicalPersonModalOpen, setIsNewPhysicalPersonModalOpen] = useState(false);

  function handleOpenNewPhysicalPersonModal(){
    setIsNewPhysicalPersonModalOpen(true);
  }

  function handleCloseNewPhysicalPersonModal(){
    setIsNewPhysicalPersonModalOpen(false);
  }

  const [isNewLegalPersonModalOpen, setIsNewLegalPersonModalOpen] = useState(false);

  function handleOpenNewLegalPersonModal(){
    setIsNewLegalPersonModalOpen(true);
  }

  function handleCloseNewLegalPersonModal(){
    setIsNewLegalPersonModalOpen(false);
  }

  return (
    <div>
      <Header onOpenNewPhysicalPersonModal={handleOpenNewPhysicalPersonModal} onOpenNewLegalPersonModal={handleOpenNewLegalPersonModal} ></Header>
      <NewPhysicalPersonModal
      isOpen={isNewPhysicalPersonModalOpen}
      onRequestClose={handleCloseNewPhysicalPersonModal}
      />
      <NewLegalPersonModal
      isOpen={isNewLegalPersonModalOpen}
      onRequestClose={handleCloseNewLegalPersonModal}
      />
      <GlobalStyle/>
    </div>
  )
}
