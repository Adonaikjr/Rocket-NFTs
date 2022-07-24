import { Container, Header, Menu, BoxA, SpaceOne,  Avatars, GalleryOne, GalleryTwo, BoxB, Numbers, Session, Banner, BoxC, SpaceTwo, Justifypopulares } from "./styled"
import { Button } from "../components/Button"
import art1 from '../assets/artista-1.png'
import art2 from '../assets/artista-2.png'
import art3 from '../assets/artista-3.png'
import art4 from '../assets/artista-4.png'
import art5 from '../assets/artista-5.png'
import art6 from '../assets/artista-6.png'
import logo from '../assets/badge.svg'

import gallery1 from '../assets/galeria-1.png'
import gallery2 from '../assets/galeria-2.png'
import gallery3 from '../assets/galeria-3.png'
import gallery4 from '../assets/galeria-4.png'
import gallery5 from '../assets/galeria-5.png'
import gallery6 from '../assets/galeria-6.png'
import gallery7 from '../assets/galeria-7.png'
import gallery8 from '../assets/galeria-8.png'


import astro1 from '../assets/astronauta-1.png'
import astro2 from '../assets/astronauta-2.png'
import astro3 from '../assets/astronauta-3.png'
import astro4 from '../assets/astronauta-4.png'

import arrow from '../assets/arrow-white.svg'

import { SectionNumbers } from '../components/SectionNumbers'
import { Populares } from "../components/Populares"
export function App() {

  return (
    <Container>

      <BoxA>
        <Header>
          <h1>Rocket <span>NFTs</span></h1>
          <Menu>
            <li>Comprar NFT</li>
            <li>Sobre</li>
            <li>FaQ</li>
          </Menu>
          <Button title='Conectar Carteira'/>
        </Header>

        <SpaceOne>
          <Avatars>
            <p>Mercado digital para colecionáveis em criptos e tokens não fungível (NFT). 
              Compre, venda e descubra ativos digitais exclusivos para você.</p>
            <div className="justifyAvatarts">
              <img src={art1} alt="avatar1" />
              <img src={art2} alt="avatar2" />
              <img src={art3} alt="avatar3" />
              <img src={art4} alt="avatar4" />
              <p>+10 Artistas selecionados</p>
            </div>
          </Avatars>
            <h1>Descubra a verdadeira arte digital e colecione diversas <strong>NFTs</strong></h1>
          <img src={logo} alt="logo" />
        </SpaceOne>

          <GalleryOne>
            <img src={gallery1} alt="astro one" />
            <img src={gallery2} alt="astro one" />
            <img src={gallery3} alt="astro one" />
            <img src={gallery4} alt="astro one" />
          </GalleryOne>
          <GalleryTwo>
            <img src={gallery5} alt="astro one" />
            <img src={gallery6} alt="astro one" />
            <img src={gallery7} alt="astro one" />
            <img src={gallery8} alt="astro one" />
          </GalleryTwo>
          
      </BoxA>
      <BoxB>
        <Numbers>
          <Session>
           <SectionNumbers title='10K+' text='Artes'/>
           <SectionNumbers title='200K+' text='Vendas'/>
           <SectionNumbers title='20' text='Artistas'/>
          </Session>
         <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem a numquam esse maiores laboriosam, voluptatum vitae minima mollitia omnis dolorum est voluptatibus minus natus ea, ipsam quia! Atque, accusamus. Aut.
          <a href="##">Lorem, ipsum.</a>
         </p>
         <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. In expedita deleniti alias laboriosam facere sequi perferendis similique quam reiciendis. Temporibus ipsa ratione minima itaque recusandae optio animi maiores, sed voluptatibus.
          <a href="##">Lorem, ipsum.</a>
         </p>
        </Numbers>
        <Banner/>
      </BoxB>
      <BoxC>
        <h2><span>Populares</span> da semana</h2>
        <SpaceTwo>
          <Justifypopulares>
            <Populares 
          title='Astronauta 1' 
          span={ <img src={arrow}/> } 
          user='Mayk Brito' 
          rkt='1.50 RKT' 
          img={ <img src={astro1}/> }/>
              <Populares 
          title='Astronauta 1' 
          span={<img src={arrow}/>} 
          user='Mayk Brito' 
          rkt='1.50 RKT' 
          img={ <img src={astro1}/> }/>
          </Justifypopulares>
          <Justifypopulares>
              <Populares 
          title='Astronauta 1' 
          span={<img src={arrow}/>} 
          user='Mayk Brito' 
          rkt='1.50 RKT' 
          img={ <img src={astro1}/> }/>
              <Populares 
          title='Astronauta 1' 
          span={<img src={arrow}/>} 
          user='Mayk Brito' 
          rkt='1.50 RKT' 
          img={ <img src={astro1}/> }/>
          </Justifypopulares>
        </SpaceTwo>
      </BoxC>
    </Container>
  )
}
