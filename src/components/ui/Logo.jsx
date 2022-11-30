import React from 'react';

import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link className="logo" to={'/'}>
      <img src={''} alt="Logo" />
    </Link>
  );
};

export default Logo;
