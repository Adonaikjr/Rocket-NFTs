import styled from 'styled-components';

export const Container = styled.div`
  width: 377px;
  height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const Title = styled.h3`

width: 100%;
font-family: Montserrat;
font-size: 30px;
font-weight: 500;
line-height: 37px;
display: flex;
justify-content: space-between;
img{
    display: flex;
    padding-left: 35%;
}
`

export const Text = styled.p`
font-family: Montserrat;
font-size: 30px;
font-weight: 500;
line-height: 37px;
`

export const Users = styled.p`
font-family: Montserrat;
font-size: 16px;
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;
span{
    font-family: Montserrat;
font-size: 20px;
font-weight: 400;
color: ${({theme}) => theme.COLORS.PINK};
width: 65%;
display: flex;
justify-content: flex-end;

}
`



