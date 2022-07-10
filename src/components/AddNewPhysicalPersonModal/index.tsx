import { usePhysicalPerson } from "../../hooks/usePhysicalPerson";
import Modal from 'react-modal';
import { Container } from "./styles";

interface NewPhysicalPersonModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewPhysicalPersonModal({isOpen, onRequestClose}: NewPhysicalPersonModalProps){
    const {createPhysicalPerson} = usePhysicalPerson();

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
                <h2>Cadastrar Nova Pessoa Física</h2>
                <input 
                    placeholder="Nome" 
                    // value={title} 
                    // onChange={event => setTitle(event.target.value)}
                />
                <input 
                    placeholder="CPF" 
                    type="number" 
                    // value={amount}
                    // onChange={event => setAmount(Number(event.target.value))}
                />
                 <input 
                    placeholder="RG" 
                    type="number" 
                    // value={amount}
                    // onChange={event => setAmount(Number(event.target.value))}
                />
                <button type="submit">Cadastrar</button>
            </Container>
      </Modal>
    )
}