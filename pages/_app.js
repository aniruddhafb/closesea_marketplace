import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import { SidebarProvider } from '../navContext'
function MyApp({ Component, pageProps }) {
  return<>
      <SidebarProvider>
        <Navbar/>
        <Component {...pageProps} />
        <Footer/>
      </SidebarProvider>
  </>
}

export default MyApp
