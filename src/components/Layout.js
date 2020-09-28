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

const OuterLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const InnerLayoutContainer = styled.div`
  margin: 0 auto;
  padding: 0 1.0875rem 1.45rem;
  max-width: 1000px;
  flex: 1 0 auto;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          contacts {
            # facebook
            linkedin
            github
            # bitbucket
            email
          }
        }
      }
    }
  `);

  return (
    <OuterLayoutContainer>
      <Header siteTitle={data.site.siteMetadata.title} />
      <InnerLayoutContainer>
        <main> {children} </main>
      </InnerLayoutContainer>
      <Footer contacts={data.site.siteMetadata.contacts} />
    </OuterLayoutContainer>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
