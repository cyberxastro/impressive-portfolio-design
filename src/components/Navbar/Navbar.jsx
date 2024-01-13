import react from 'react'
import Toggle from '../Toggle/Toggle'
import './navbar.css'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { Link } from 'react-scroll'
const Navbar = () => {
    const theme = useContext(themeContext);
    const darkmode = theme.state.darkmode;
    return (
        <div className="n-wrapper" id='Navbar'>
            <div className="n-left">
                <div className="n-name">Gaurav</div>
                <Toggle />
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <Link spy={true} to='Navbar' smooth={true}>
                            <li>Home</li>
                        </Link>
                        <Link spy={true} to='Services' smooth={true}>
                            <li>Expertise</li>
                        </Link>
                        <Link spy={true} to='Works' smooth={true}>
                            <li>Work</li>
                        </Link>
                        <Link spy={true} to='Portfolio' smooth={true}>
                            <li>Portfolio</li>
                        </Link>
                    </ul>
                </div>
                <Link spy={true} to='Contact' smooth={true}>
                <button className='button n-button' style={{ color: darkmode ? 'black' : '', fontWeight: darkmode ? 'bolder' : '' }}>Contact Me</button>
                </Link>
            </div>
        </div>
    )
}
export default Navbar