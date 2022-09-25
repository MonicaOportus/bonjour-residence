import portrait3 from "../images/portrait3.png";
import arrow from "../images/arrow.png";

function Equipe () {
    return(
        <div className="flex justify-center pt-32 md:py-24 md:pl-10 font-[SuisseRegular]"> 
                <img 
                    src={portrait3} 
                    alt=""
                    className="w-[130px] mt-[-70px] z-10 md:w-[150px] md:mr-[550px] md:mt-[25px]"
                />
            <div 
                className="bg-[#9AD9DA] w-[330px] h-[280px] text-center rounded-xl pt-[80px] px-8 
                md:text-left md:h-[154px] md:w-[500px] md:pt-6 md:pb-12 md:px-16 md:rounded-full absolute"
            >
                <h6
                    className="text-[12px]"
                >
                    PHILIPPE GIRARD | Cofondateur
                </h6>
                <h2
                    className="pt-1 text-[24px] md:text-[22px] leading-tight"
                >
                    Here we say a nice quote promoting our team, 
                    to be part of it...
                </h2>
            </div>
            <h6
                className="absolute mt-[220px] md:mt-[115px] md:ml-[360px] underline text-[14px]"
            >
                Découvrez notre équipe
            </h6>
            <img 
                src={arrow} 
                alt=""
                className="object-contain w-9 mt-[220px] ml-[100px] absolute md:ml-[283px] md:mt-[115px]"
            />
        </div>
    );
}

export default Equipe;