import CheckServicesButton from "../components/buttons/CheckServicesButton";
import TalkButton from "../components/buttons/TalkButton";
import StatsCard from "../components/cards/StatsCard";

const Header = () => {
    return ( 
        <div className="flex md:py-10 ">
            <div className="flex flex-1 flex-col w-full gap-5 pt-5 justify-center md:relative lg:justify-center lg:items-center lg:px-40 lg:text-center lg:pb-14">
                <div className="text-primary font-bold text-sm dark:text-white transition duration-500">
                Our Projects
                </div>
                <div className="text-text font-bold text-4xl dark:text-white transition duration-500">
                Project We Realised
                </div>
                <h2 className="font-normal text-gray text-base">
                Our team helped alot of startup and company to realise their Products and helped thousnd of client to grow their business</h2>
                    <div className="lg:my-10">
                        <StatsCard />
                    </div>
                <div className="flex flex-col gap-3 lg:gap-7 md:flex-row md:gap-5 lg:flex-row lg:my-10">
                    <TalkButton text="Lets talk" className="" />
                    <CheckServicesButton text="Check our Services" />

                </div>
            </div>
        </div>

     );
}
 
export default Header;