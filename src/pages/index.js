import React from 'react';
import Profile from '../components/Profile';
import About from '../components/About';

import SEO from '../components/SEO';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Profile />
    <About />
  </>
);
export default IndexPage;
