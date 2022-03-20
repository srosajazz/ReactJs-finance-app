import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { Container } from "./components/Header/styles";
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from "./styles/global";


Modal.setAppElement('#root');


export function App() {
  // Create State()
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
     <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
     <Dashboard />
     <NewTransactionModal 
     isOpen={isNewTransactionModalOpen} 
     onRequestClose={handleCloseNewTransactionModal}
     />
     <GlobalStyle />
     <Container />
    </>
  );
}

