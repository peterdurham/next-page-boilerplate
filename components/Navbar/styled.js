import styled from 'styled-components'

export const NavbarWrapper = styled.div`
height: 72px;
width: 100%;


& .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & #Navbar-left {
        display: flex;
        align-items: center;
        justify-content: space-between;
    
        & svg {
            font-size: 36px;
            margin-right: 8px;
        }
    }
    & #Navbar-right {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
`