import { Container, Title, Text, Users } from "./styled";

export function Populares({title, span, text, user, rkt, img}){
    return(
        <Container>
            <Title>{title} {span}</Title>
            <Text>{text} </Text>
            <Users>{user} <span>{rkt}</span></Users>
            {img}
        </Container>
    )
}