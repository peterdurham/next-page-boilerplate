
import SiteLogo from '../icons/SiteLogo'
import { NavbarWrapper } from './styled'

const Navbar = () => {
    return (
        <NavbarWrapper>
            <div className="container">
                <div id="Navbar-left">
                    <SiteLogo />
                    <h2>Title</h2>
                </div>
                <div id="Navbar-right">
                    Links
                </div>
            </div>
        </NavbarWrapper>
    )
}

export default Navbar