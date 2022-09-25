import beach from "../images/beach.png";
import cheerfulTeam from "../images/cheerfulTeam.png";
import couple from "../images/couple.png";
import mockUp from "../images/mock-up.png";
import team from "../images/team.png";
import elf from "../images/elf.png"

function Photos() {
    return(
        <div className="bg-[#F0F0F0] mt-12 py-12 md:py-24 px-5">
            <h3 className="text-center text-[20px] font-[SuisseRegular]">
                Bonjour Résidences en images
            </h3>
            <div className="md:flex md:gap-2 justify-center pt-8">
                <img 
                    src={beach} 
                    alt=""
                    className="w-full md:w-[200px] rounded-lg md:inline-block object-contain mb-4 md:mb-[200px]"
                />
                <div className="md:inline-block">
                    <div className="rounded-lg md:w-[200px]">
                        <img 
                            src={team} 
                            alt=""
                            className="object-contain w-full mb-4 md:mb-0"
                            id="hoverImg"
                        />
                    </div>
                    <img 
                        src={cheerfulTeam} 
                        alt=""
                        className="w-full md:w-[200px] rounded-lg object-contain md:mt-2 mb-4 md:mb-0"
                    />
                </div>
                <div className="md:inline-block md:mt-20">
                    <img 
                        src={elf} 
                        alt=""
                        className="w-full md:w-[200px] rounded-lg object-contain mb-4 md:mb-0"
                    />
                    <img 
                        src={couple} 
                        alt=""
                        className=" w-full md:w-[200px] rounded-lg object-contain md:mt-2 mb-4 md:mb-0"
                    />
                </div>
                <img 
                    src={mockUp} 
                    alt=""
                    className="w-full md:w-[200px] rounded-lg md:inline-block object-contain"
                />
            </div>
        </div>
    );
}

export default Photos;