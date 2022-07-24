import { Container } from "./styled";

export function SectionNumbers({title, text}){
    return(
        <Container>
            <h1> {title} </h1>
            <p> {text} </p>
        </Container>
    )
}