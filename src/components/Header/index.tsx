import { Container, Content } from "./styles";

export function Header(){

    return(
        <Container>
            <Content>
                <button type="button">Adicionar Pessoa Física</button>
                <button type="button">Adicionar pessoa Jurídica</button>
            </Content>
        </Container>
    )
}