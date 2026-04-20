import "../stlyes/index.css"
import Navbar from "../components/Navbar";
import HerosectionDesktop from "../components/Herosection";
import Whyus from "../components/WhyUs";
import Articles from "../components/LatestArticle";
import Footer from "../components/Footer";


const LandingPage = () => {
    return ( 
        <div>
           <Navbar />
           <HerosectionDesktop />
           <Whyus />
           <Articles />
           <Footer />
        </div>
     );
}
 
export default LandingPage;