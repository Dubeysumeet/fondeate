import PropTypes from 'prop-types';

const CustomButton = ({ text, href }) => {
  return (
    <div className="px-2 xs:px-6 lg:pt-4">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="max-w-xs mx-auto w-full block py-3 rounded-lg text-center font-medium bg-gray-900 hover:bg-black text-white transition-all"
      >
        {text}
      </a>
    </div>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default CustomButton;
