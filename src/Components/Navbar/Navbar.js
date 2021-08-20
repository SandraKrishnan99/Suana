import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import './Navbar.css'

function Navbar() {
    const [click, setclick] = useState(false);
    const [button,setButton] = useState(true);
    const handleClick = () =>setclick(!click);
    const closeMobileMenu = () =>setclick(false);
    const showButton = () =>{
        if(window.innerWidth <=960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    };
    useEffect(() =>{
        showButton();
    },[]);
    window.addEventListener('resize',showButton);
    return(
        <>
            <nav className="navbar">
                <div className="container">
                    <Link to="/" className="navlogo" onClick={closeMobileMenu}>
                        SUANA <i class="fas fa-angle-double-right"></i>
                    </Link>
                    <div className="menuicons" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fa fa-bars'}></i>
                    </div>
                    <ul className className={click ? 'navmenuactive' : 'navmenu'}>
                        <li className='navitems'>
                            <Link to='/' className='navlinks' onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className='navitems'>
                            <Link to='/contact' className='navlinks' onClick={closeMobileMenu}>Contact-Us</Link>
                        </li>
                        <li className='navitems'>
                            <Link to='/aboutus' className='navlinks' onClick={closeMobileMenu}>About-Us</Link>
                        </li>
                        <li className='navitems'>
                            <Link to='/signup' className='navlinksmobile' onClick={closeMobileMenu}>Sign-UP</Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
