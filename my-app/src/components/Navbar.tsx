import { NavLink } from 'react-router-dom';
import '../styles/Navbar.less';
import logo from '../assets/logo.png';

const navItems = [
    { name: 'Login', path: '/' },
    { name: 'Table', path: '/table' },
];

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img className={"logoImg"} src={logo} alt="Logo"/>
            </div>
            <div className="nav-items">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({isActive}) =>
                            `nav-item ${isActive ? 'active' : ''}`
                        }
                    >
                        {item.name}
                    </NavLink>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;