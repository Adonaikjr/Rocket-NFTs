import styled from "styled-components";
import background from '../assets/background.png'
import banner from '../assets/banner.png'

export const Container = styled.div`

`

export const Header = styled.header`
    width: 100%;
    height: 50px;
    margin-top: 57px;
    display: flex;

    h1{
        font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 49px;
        >span{
            color:${({theme}) => theme.COLORS.PINK};
        }
    }
`

export const Menu = styled.li`
display: flex;

align-items: center;
width: 341px;
li{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;    
    list-style: none;
    display: inline-block;
}

`

export const BoxA = styled.div`
border: solid transparent;
    width: 100%;
    height: 93vh;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

export const SpaceOne = styled.div`
display:flex;
align-items: center;
height: 270px;
margin-top: 90px;
    p{
        width: 401px;
        height: 88px;
        font-family: Montserrat;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;
    }

    h1{
        width:596px;
        font-family: Montserrat;
        font-size: 50px;
        font-weight: 700;
        line-height: 61px;
        font-family: Montserrat;
        font-size: 50px;
        font-weight: 400;
        line-height: 61px;
    >strong{
    color: ${({theme})=> theme.COLORS.PINK};
}
    }
`


export const Avatars = styled.div`

    .justifyAvatarts{
        display: flex;
        align-items: flex-end;
        
        >p{
            
            margin-left:60px;
            width: 100%;
            height: 48px;
            font-family: Montserrat;
            font-size: 18px;
            font-weight: 700;
            line-height: 22px;
            letter-spacing: 0em;
            text-align: left;

            font-family: Montserrat;
            font-size: 18px;
            font-weight: 400;
            line-height: 22px;
            letter-spacing: 0em;
            text-align: left;

        }
    }
  
    width: 380px;
    height: 232px;
    
    img{
        margin-top: 55px;
        margin-right: -50px;
    }
`


export const GalleryOne = styled.div`
width: 1277px;
display: flex;
justify-content: space-between;
img{
    border: solid 1px ${({theme}) => theme.COLORS.WHITE};
}
`

export const GalleryTwo = styled.div`
margin-top: 60px;
width: 1277px;
display: flex;
justify-content: space-between;
img{
    border: solid 1px ${({theme}) => theme.COLORS.WHITE};
}
`
export const BoxB = styled.div`

    height: 660.01px;
   
    
`
export const Numbers = styled.div`
        display: flex;
        width: 75%;
        
        >p{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            padding-top: 70px;
            width: 419px;
            height: 250px;
            font-family: Montserrat;
font-size: 18px;
font-weight: 400;
line-height: 22px;




            a{
            
                text-align: left;
                margin-left: 12px;
                width: 100%;
                color: ${({theme}) => theme.COLORS.WHITE};
            }
        }

`

export const Session = styled.div`
    border-right: 1px solid;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 170px;
    height: 386px;
    left: 30px;
    margin-top: 133px;


`

export const Banner = styled.div`
    width: 1158px;
    height: 300px;
    width: 75%;
    background-image: url(${banner});
    margin-top: 71px;
`

export const BoxC = styled.div`\
    h2{
        font-family: Montserrat;
    font-size: 50px;
    font-weight: 700;
    line-height: 61px;
    font-family: Montserrat;
    font-size: 50px;
    font-weight: 400;
    line-height: 61px;
    margin-left: 87px;
    >span{ 
        color: ${({theme}) => theme.COLORS.PINK};
    }
}
margin-top: 150px;

`
export const SpaceTwo = styled.div`
    margin-top: 158px;
    display: flex;
`
export const Justifypopulares = styled.div`
    border-right: 1px solid ${({theme}) => theme.COLORS.WHITE};
    display: flex;
    flex-direction: column;
    width: 50%;
    
`