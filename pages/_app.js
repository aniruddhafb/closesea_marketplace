<<<<<<< HEAD
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
=======
import '../styles/globals.css'
import Navbar from '../components/Navbar'
function MyApp({ Component, pageProps }) {
  return <>
    <Navbar />
    <Component {...pageProps} />
  </>
>>>>>>> 26514240e243fa8a934a1b7fba7b915e71807640
}

export default MyApp;
