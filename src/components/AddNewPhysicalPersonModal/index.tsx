import { usePhysicalPerson } from "../../hooks/usePhysicalPerson";
import Modal from 'react-modal';
import { Container } from "./styles";
import RadioGroup from '@material-ui/core/RadioGroup';
import { FormControlLabel, FormLabel, Radio } from "@material-ui/core";
import InputMask from "react-input-mask";
import close from '../../assets/close.png';
import { useState } from "react";

interface NewPhysicalPersonModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewPhysicalPersonModal({isOpen, onRequestClose}: NewPhysicalPersonModalProps){
    const {createPhysicalPerson} = usePhysicalPerson();
    const [name, setName] = useState('');
    const [cpf, setCategory] = useState('');
    const [rg, setAmount] = useState('');
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
                <h2>Cadastrar Nova Pessoa Física</h2>
                <input 
                    placeholder="Nome" 
                    value={name} 
                    // onChange={event => setTitle(event.target.value)}
                />
                <h4 id="demo-radio-buttons-group-label">Gênero</h4>
                <RadioGroup
                    className="radio"
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="female" control={<Radio color="default"/>} label="Feminino" />
                    <FormControlLabel value="male" control={<Radio color="default" />} label="Masculino" />
                    <FormControlLabel value="other" control={<Radio color="default" />} label="Outro" />
                </RadioGroup>
                
                <InputMask mask="99/99/9999" placeholder="Data de Nascimento"/>
                <InputMask 
                    mask="999.999.999-99"
                    placeholder="CPF" 
                    value={cpf}
                    // onChange={event => setAmount(Number(event.target.value))}
                />
                <InputMask 
                    placeholder="RG" 
                    mask="99.999.999-9"
                    value={rg}
                    // onChange={event => setAmount(Number(event.target.value))}
                />
                <input 
                    placeholder="Endereço" 
                    value={adress} 
                    // onChange={event => setTitle(event.target.value)}
                />
                <button type="submit">Cadastrar</button>
            </Container>
      </Modal>
    )
}