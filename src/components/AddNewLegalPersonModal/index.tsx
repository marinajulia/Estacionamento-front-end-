import Modal from 'react-modal';
import { useLegalPerson } from '../../hooks/useLegalPerson';
import { Container } from './styles';

interface NewLegalPersonModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewLegalPersonModal({isOpen, onRequestClose}: NewLegalPersonModalProps){
    const {createLegalPerson} = useLegalPerson();

    return(
        <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                {/* <img src={close} alt="Fechar modal" /> */}
            </button>
            <Container>
                <h2>Cadastrar Nova Pessoa Jurídica</h2>
                <input 
                    placeholder="Nome" 
                    // value={title} 
                    // onChange={event => setTitle(event.target.value)}
                />
                <input 
                    placeholder="CNPJ" 
                    type="number" 
                    // value={amount}
                    // onChange={event => setAmount(Number(event.target.value))}
                />
                <button type="submit">Cadastrar</button>
            </Container>
      </Modal>
    )
}