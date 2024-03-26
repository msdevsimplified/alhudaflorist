import Footer from "../Footer"
import NavBar from "../Nav"

const PageLayout = ({ children }) => {
    return (
        <>
            <NavBar />
            {children}
            <Footer />
        </>
    )
}
export default PageLayout