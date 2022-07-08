import { Container, Content } from "./styles";

interface HeaderProps{
    onOpenNewPhysicalPersonModal: () => void;
    onOpenNewLegalPersonModal: () => void;
}

export function Header({onOpenNewPhysicalPersonModal, onOpenNewLegalPersonModal}: HeaderProps){

    return(
        <Container>
            <Content>
                <button type="button" onClick={onOpenNewPhysicalPersonModal}>Adicionar Pessoa Física</button>
                <button type="button" onClick={onOpenNewLegalPersonModal}>Adicionar pessoa Jurídica</button>
            </Content>
        </Container>
    )
}