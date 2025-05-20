import { NavLink } from 'react-router-dom';

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
];

const Navbar: React.FC = () => {
    return (
        <nav style={styles.nav}>
            {navItems.map((item) => (
                <NavLink
                    key={item.path}
                    to={item.path}
                    style={({ isActive }: { isActive: boolean }) => ({
                        ...styles.link,
                        color: isActive ? 'blue' : 'black',
                        fontWeight: isActive ? 'bold' : 'normal',
                    })}
                >
                    {item.name}
                </NavLink>
            ))}
        </nav>
    );
};

const styles = {
    nav: {
        display: 'flex',
        gap: '1rem',
        padding: '1rem',
    },
    link: {
        textDecoration: 'none',
    },
} as const;

export default Navbar;
