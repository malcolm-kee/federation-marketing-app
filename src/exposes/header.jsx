import * as React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

const Header = () => {
  return (
    <div className="mr-bg-pink-600 mr-text-white mr-shadow">
      <div className="mr-max-w-6xl mr-mx-auto mr-px-2 sm:mr-px-6 mr-py-2 mr-text-2xl">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default Header;
