import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        margin:0 auto;
        padding:0 auto;
        box-sizing: border-box;
    }
    body{
        background: ${({theme}) => theme.COLORS.BACKGROUND_800};
        color:${({theme}) => theme.COLORS.WHITE};
    }
`