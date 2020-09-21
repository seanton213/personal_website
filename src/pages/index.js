import React from 'react';
import Profile from '../components/Profile';
import About from '../components/About';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Profile />
    <About />
  </Layout>
);
export default IndexPage;
