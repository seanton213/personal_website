/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './Header';
import Footer from './Footer';
import './Layout.css';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  margin: 0 auto;
  padding: 0 1.0875rem 1.45rem;
  max-width: 1000px;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          contacts {
            facebook
            linkedin
            github
            bitbucket
            email
          }
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <LayoutContainer>
        <main> {children} </main>
      </LayoutContainer>
      <Footer contacts={data.site.siteMetadata.contacts} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
