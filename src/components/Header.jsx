import { Link } from 'react-scroll';

const Header = ({ isDarkMode }) => {
  return (
    <header className="flex justify-between items-center">
      <div className="left flex items-center ml-14 mt-4 p-1">
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className="relative kdr-logo"
        >
          {/* Conditional rendering of logo based on isDarkMode */}
          {isDarkMode ? (
            <img
              src="https://live.staticflickr.com/65535/53136330799_977780411f_n.jpg"
              alt="dark logo"
              className="w-16 lg:mr-2 cursor-pointer"
            />
          ) : (
            <img
              src="https://live.staticflickr.com/65535/53105784717_517e98b50f_n.jpg"
              alt="light logo"
              className="w-16 lg:mr-2 cursor-pointer"
            />
          )}
          <div className="home absolute -bottom-4 -right-10 p-1 rounded-full opacity-0 pointer-events-none duration-500">
            <p>Home</p>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
