import styled from 'styled-components'
import FooterLogo from '../icons/FooterLogo'

const FooterWrapper = styled.footer`
width: 100%;
height: 90px;
border-top: 1px solid #222;
display: flex;
align-items: center;
justify-content: center;

& #text-container {
    display: flex;
    align-items: center;
    justify-content: center;

    & svg {
        color: white;
        height: 42px;
        width: 42px;
        margin-left: 8px;
    }
}
`

const Footer = () => {
    return (
        <FooterWrapper>
            <div id="text-container">
                <h4>
                    Made By PD
                </h4>
                <FooterLogo />
            </div>
        </FooterWrapper>
    )
}
export default Footer