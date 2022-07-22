import { Container, Header, Menu, BoxA, SpaceOne, SpaceTwo, SpaceImg, Avatars } from "./styled"
import { Button } from "../components/Button"
import art1 from '../assets/artista-1.png'
import art2 from '../assets/artista-2.png'
import art3 from '../assets/artista-3.png'
import art4 from '../assets/artista-4.png'
import art5 from '../assets/artista-5.png'
import art6 from '../assets/artista-6.png'

export function App() {

  return (
    <Container>
      <Header>
        <h1>Rocket NFTs</h1>
        <Menu>
          <li>Comprar NFT</li>
          <li>Sobre</li>
          <li>FaQ</li>
        </Menu>
        <Button title='Conectar Carteira'/>
      </Header>
      <BoxA>
        <SpaceOne>
          <p>Mercado digital para colecionáveis em criptos e tokens não fungível (NFT). 
            Compre, venda e descubra ativos digitais exclusivos para você.</p>
          <Avatars>
            <img src={art1} alt="" />
            <img src={art2} alt="" />
            <img src={art3} alt="" />
            <img src={art4} alt="" />
            <img src={art5} alt="" />
            <img src={art6} alt="" />
            <p>+10 
Artistas selecionados</p> 
          </Avatars>
        </SpaceOne>
        <SpaceTwo>

        </SpaceTwo>
        <SpaceImg>

        </SpaceImg>
      </BoxA>
    </Container>
  )
}
