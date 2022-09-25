import Bienvenue from "../components/bienvenue";
import Navbar from "../components/navbar";
import Valeurs from "../components/valeurs";
import Photos from "../components/photos";
import Equipe from "../components/equipe";
import Footer from "../components/footer";

function About() {
    return(
        <div>
            <Navbar/>
            <div className="mx-5 md:mx-24 xl:mx-36 2xl:mx-48">
                <Bienvenue/>
                <Valeurs/>
            </div>
            <Photos/>
            <Equipe/>
            <Footer/>
        </div>
    );
}

export default About;