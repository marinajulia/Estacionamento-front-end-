import { usePhysicalPerson } from "../../hooks/usePhysicalPerson";
import Modal from 'react-modal';
import { Container } from "./styles";
import RadioGroup from '@material-ui/core/RadioGroup';
import { FormControl, FormControlLabel, FormLabel, Radio } from "@material-ui/core";
import InputMask from "react-input-mask";
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
                    <FormLabel id="demo-radio-buttons-group-label">Gênero</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Feminino" />
                        <FormControlLabel value="male" control={<Radio />} label="Masculino" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                
                <InputMask mask="99/99/9999" placeholder="Data de Nascimento"/>
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
                <input 
                    placeholder="Endereço" 
                    // value={title} 
                    // onChange={event => setTitle(event.target.value)}
                />
                <button type="submit">Cadastrar</button>
            </Container>
      </Modal>
    )
}