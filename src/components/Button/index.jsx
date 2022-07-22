import { Container } from "./styled";

export function Button({title, icon}) {
    return (
        <Container>
            {title}
            {icon}
        </Container>
    )
}