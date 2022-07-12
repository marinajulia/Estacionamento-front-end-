import Modal from 'react-modal';
import { useLegalPerson } from '../../hooks/useLegalPerson';
import { Container } from './styles';
import InputMask from "react-input-mask";
import close from '../../assets/close.png';
import { useState } from 'react';

interface NewLegalPersonModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewLegalPersonModal({isOpen, onRequestClose}: NewLegalPersonModalProps){
    const {createLegalPerson} = useLegalPerson();
    const [corporateName, setCorporateName] = useState('');
    const [fantasyName, setFantasyName] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [adress, setAdress] = useState('');
    return(
        <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={close} alt="Fechar modal" />
            </button>
            <Container>
                <h2>Cadastrar Nova Pessoa Jurídica</h2>
                <input 
                    placeholder="Razão Social" 
                    value={corporateName} 
                    // onChange={event => setTitle(event.target.value)}
                />
                <input 
                    placeholder="Nome Fantasia" 
                    value={fantasyName}
                    // onChange={event => setAmount(Number(event.target.value))}
                />
                <InputMask 
                    placeholder="CNPJ" 
                    mask="99.999.999/999-99"
                    value={cnpj}
                    // onChange={event => setAmount(Number(event.target.value))}
                />
                <input 
                    placeholder="Endereço" 
                    value={adress}
                    // onChange={event => setAmount(Number(event.target.value))}
                />
                <button type="submit">Cadastrar</button>
            </Container>
      </Modal>
    )
}