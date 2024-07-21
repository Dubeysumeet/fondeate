import doorvestCardImage from '../../assets/images/doorvest-card.png'; // Import the image

const Card = ({ title, description, raised, investors, coInvestedLogo, imageSrc, href }) => {
    return (
        <a href={href} title={title} target="_blank" className="w-[259px] xl:w-[288px] flex flex-col gap-2 hover:bg-white rounded-lg hover:ring-2 ring-blue-50 m-1" aria-hidden="false">
            <img src={doorvestCardImage} alt={title} className="xl:hidden w-full h-auto rounded-t-lg" />
            <img src={doorvestCardImage} alt={title} className="hidden xl:block max-w-[288px] max-h-[208px] object-cover rounded-t-lg" />
            <div className="w-[259px] xl:w-[288px] max-w-full bg-white rounded-b-lg flex flex-col gap-2 p-4 xl:p-5 pb-3 xl:pb-4">
                <div className="flex justify-between">
                    <div>
                        <p className="text-gray-800 font-light text-xl">${raised}</p>
                        <p className="text-gray-700 font-light text-sm">raised</p>
                    </div>
                    <div>
                        <p className="text-gray-800 font-light text-xl">{investors}</p>
                        <p className="text-gray-700 font-light text-sm">investors</p>
                    </div>
                </div>
                <hr className="my-1 bg-[#DCDCDC]" />
                <div className="flex items-center gap-1.5">
                    <img src={coInvestedLogo} alt="Co-invested Logo" className="rounded w-auto h-6" />
                    <p className="text-gray-700 text-sm font-light">co-invested</p>
                </div>
            </div>
        </a>
    );
};

export default Card;
