import Modal from 'react-modal';
import { Container, RadioBox, TransactionTypeContainer } from './styles';

import closeImg from '../../assets/close.svg';
import incomeImage from '../../assets/income.svg';
import outcomeImage from '../../assets/outcome.svg';
import { useState } from 'react';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement('#root');

function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [type, setType] = useState('deposit');

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container>
        <h2>Cadastrar transação</h2>

        <input type="text" placeholder="Título" />

        <input type="number" placeholder="Valor" />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {
              setType('deposit');
            }}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImage} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            className={type === 'deposit' ? 'active' : ''}
            isActive={type === 'withdraw'}
            activeColor="red"
            onClick={() => {
              setType('withdraw');
            }}
          >
            <img src={outcomeImage} alt="Saida" />
            <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input type="text" placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}

export { NewTransactionModal };