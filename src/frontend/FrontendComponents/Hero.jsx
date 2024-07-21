import Button from "./Buttons/Button";
import CustomButton from "./Buttons/CustomButton";
import MarqueeSection from "./MarqueeSection";
import Card from "./Card";
import doorvestCardImage from '../../assets/images/doorvest-card.png';
import backstageImage from '../../assets/images/backstage-capital-logo-gray.png';
import '../../assets/css/App.css'


const HeroSection = () => {
    return (
        <div className="hero text-white min-h-screen flex flex-col justify-between" style={{ background: "radial-gradient(222.05% 147.29% at 96.05% -8.32%, rgba(255, 221, 181, 0.85) 0%, rgba(247, 247, 247, 0.5525) 45.82%, rgba(183, 255, 246, 0.25) 100%)" }}>
            <div className="upper-div flex justify-between items-start p-10 h-3/4">
                <div className="left-div w-1/2 bg-opacity-75 rounded-lg p-0.1 text-left">
                    <h1 className="text-black text-6xl mb-4">
                        Invest in <br /> <span className="bg-gradient-to-r from-[#52B5F0] via-[#A9A8EF] to-[#F79A76] bg-clip-text text-transparent">Community Rounds</span>
                    </h1>
                    <p className="text-xl mb-4 text-center lg:text-left max-w-2xl font-normal text-[#292524] space-y-1 px-2 xs:px-6">
                        Get equity and front-row seats to the startups and small businesses we love—⁠for just $100.
                    </p>
                    <Button href="#join-Fondeate" primary>Join Fondeate</Button>
                    <Button href="#explore-startups">Explore Startups</Button>
                </div>
                <div className="right-div w-1/2 flex justify-around relative overflow-hidden" style={{ height: '500px' }}>
                    <div className="cards-column w-1/2 h-full flex flex-col justify-between items-center">
                        <div className="cards-container animate-moveTopBottom flex flex-col justify-around items-center h-full">
                            <Card title="Card Title 1" description="Some description for card 1." raised="383,219" investors="574" coInvestedLogo={backstageImage} imageSrc={doorvestCardImage} href="#" />
                            <Card title="Card Title 2" description="Some description for card 2." raised="383,219" investors="574" coInvestedLogo={backstageImage} imageSrc={doorvestCardImage} href="#" />
                            <Card title="Card Title 3" description="Some description for card 3." raised="383,219" investors="574" coInvestedLogo={backstageImage} imageSrc={doorvestCardImage} href="#" />
                        </div>
                    </div>
                    <div className="cards-column w-1/2 h-full flex flex-col justify-between items-center">
                        <div className="cards-container animate-moveBottomTop flex flex-col justify-around items-center h-full">
                            <Card title="Card Title 4" description="Some description for card 4." raised="383,219" investors="574" coInvestedLogo={backstageImage} imageSrc={doorvestCardImage} href="#" />
                            <Card title="Card Title 5" description="Some description for card 5." raised="383,219" investors="574" coInvestedLogo={backstageImage} imageSrc={doorvestCardImage} href="#" />
                            <Card title="Card Title 6" description="Some description for card 6." raised="383,219" investors="574" coInvestedLogo={backstageImage} imageSrc={doorvestCardImage} href="#" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="lower-div bg-opacity-75 text-white p-10 mt-16 space-y-12 md:space-y-16 text-center">
                <p className="text-base text-black md:text-lg lg:text-xl uppercase md:font-formal">JOIN OVER 1 MILLION INVESTORS</p>
                <div className="lower-div bg-opacity-75 text-white p-10 text-center">
                <div className="flex flex-col md:flex-row md:flex-wrap gap-8 lg:gap-16 xl:gap-24 justify-center">
                    <div className="flex flex-col items-center justify-center gap-2">
                        <p className="text-6xl xl:text-8xl text-[#323638]">$250</p>
                        <p className="text-lg text-black lg:text-2xl font-light w-max">average investment</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <p className="text-6xl xl:text-8xl text-[#323638]">3,408</p>
                        <p className="text-lg text-black lg:text-2xl font-light w-max">funded founders</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center mt-8">
                    <p className="text-6xl xl:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-[#65B8F8] to-[#186FF1]">$756 million</p>
                    <p className="text-lg text-black lg:text-2xl font-light w-max">raised on Fondeate</p>
                </div>
            </div>

                {/* Marquee Section */}
                  {/* Marquee Section */}
                  <MarqueeSection />
            </div>
        
        </div>
    );
};

export default HeroSection;
