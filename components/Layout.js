import Navbar from './Navber'
import Footer from './Footer'


const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
                {children}
            <Footer />
        </>
    );
}

export default Layout;