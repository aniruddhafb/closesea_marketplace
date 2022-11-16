import '../styles/globals.css'
<<<<<<< HEAD
import Navbar from '../components/Navbar'
function MyApp({ Component, pageProps }) {
  return <>
    <Navbar />
    <Component {...pageProps} />
  </>
=======
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
>>>>>>> main
}

export default MyApp
