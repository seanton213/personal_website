import React from 'react';
// import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Image from '../components/Image';
import SEO from '../components/SEO';

const IndexPage = () => ( <
    Layout >
    <
    SEO title = "Home" / >
    <
    h1 >
    Updates coming soon!For now, please refer to { ' ' } <
    a href = "https://seanton213.github.io/" > My Old Site < /a>{' '} <
    /h1>{' '} <
    div style = {
        { maxWidth: `300px`, marginBottom: `1.45rem` } } >
    <
    Image / >
    <
    /div>{' '} { /* <Link to="/page-2/">Go to page 2</Link> */ } { ' ' } <
    /Layout>
);
export default IndexPage;