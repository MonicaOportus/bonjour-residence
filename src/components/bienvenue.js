import portrait1 from "../images/portrait1.png";
import play from "../images/play.png"

function Bienvenue() {
    return(
        <div className="">
            <div className="inline-block pt-10 w-full pb-10 xl:pb-0 xl:w-1/2 xl:pr-4">
                <h6 className="pl-1 pb-4">À propos</h6>
                <h1 className="text-[35px] font-[SuisseRegular] md:text-[50px] leading-tight">
                    Bienvenu chez Bonjour Résidences
                </h1>
                <p className="pt-8 pb-5 font-[SuisseLight]">
                    Nous sommes connus pour être flexible et pour notre capacité d'adaptation. 
                    Un equipe passionés par ce que nous faisons. Créé par une femme, alimenté par 
                    le café, nou sommes tojour au coeur de l'action.
                </p>
                <p className="font-[SuisseLight]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <h3 className="pt-8 pb-4 font-[SuisseRegular]">
                    Découvrez également:
                </h3>
                <button className="bg-[#EFEFEF] py-1 px-4 rounded-full mr-5 font-[SuisseRegular]">L'équipe</button>
                <button className="bg-[#EFEFEF] py-1 px-4 rounded-full font-[SuisseRegular]">Nos services</button>
            </div>
            <div className="inline-block w-full xl:w-1/2">
                <img 
                    src={portrait1}
                    className="relative"
                />
                    <img
                        src={play}
                        className="relative top-[-80px] left-[30px]"
                    />
            </div>
        </div>
    );
}

export default Bienvenue;