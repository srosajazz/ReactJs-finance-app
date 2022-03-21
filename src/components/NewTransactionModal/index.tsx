import { useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

// import {Container, TransactionTypeContainer } from './styles';
import { Container, TransactionTypeContainer, RadioBox } from '../NewTransactionModal/styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}:NewTransactionModalProps){
  const [type, setType] = useState('deposit');



  return(
    <Modal 
      isOpen={isOpen} 
      onRequestClose={ onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      >
    <RadioBox type="button" onClick={onRequestClose} className="react-modal-close">
      <img src={ closeImg } alt="Close modal" />
    </RadioBox>
      <Container>
       <h2>Register new Transaction</h2>

       <input
        placeholder="Title"
       
       />

      <input 
        type="Value"
        placeholder="Value" 
       />

      <TransactionTypeContainer >
      <RadioBox
            type="button"
            onClick={() => { setType('deposit'); }}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Money In" />
            <span>In</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => { setType('withdraw'); }}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Withdraw" />
            <span>Out</span>
          </RadioBox>
      </TransactionTypeContainer>


      <input
        placeholder="Title"
       
       />

       <button type="submit">
         Register
       </button>
      </Container>
    </Modal>
  );
}


