import logo from "../images/brLogo.png";
import navIcons from "../images/navIcons.png";

function Navbar() {
    return(
        <div className="flex p-5 items-center justify-between md:justify-start border-gray-300 border-b-2 md:border-none">
            <div
                className="flex"
            >    
                <img 
                    src={logo} alt=""
                    className="object-contain w-28 xl:w-24 2xl:w-28"
                />
            </div>
            <div className="md:hidden">
                <img 
                    src={navIcons} 
                    alt=""
                    className="w-16"
                />
            </div>
            <div className="hidden md:flex list-none space-x-6 ml-8 2xl:ml-16">
                <a>Rechercher résidences</a>
                <a>Services</a>
                <a>Ressources utiles</a>
                <a className="text-[#B73594]">À propos</a>
            </div>
        </div>
    )
}

export default Navbar;