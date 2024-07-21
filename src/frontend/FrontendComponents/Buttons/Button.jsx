const Button = ({ href, children, primary }) => {
    return (
        <a
            href={href}
            className={`inline-block mt-4 px-6 py-3 ${primary ? 'bg-[#0284c7] hover:bg-[#075985] text-white' : 'border border-gray-700 hover:border-black hover:bg-blue-700 text-gray-900 hover:text-black'} rounded-lg md:text-lg font-medium transition-all w-full lg:max-w-[225px] text-center mr-4`}
        >
            {children}
        </a>
    );
};

export default Button;
