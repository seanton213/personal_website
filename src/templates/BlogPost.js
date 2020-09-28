import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledDate = styled.p`
  font-style: italic;
`;

const BlogPostContent = styled.div`
  padding: 24px;
  font-family: 'Raleway', sans-serif;
  background: #eeeeee;
`;

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLink = styled((props) => <Link {...props} />)`
  color: black;
  text-decoration: underline;
  margin: 16px;
`;

function Template({ data }) {
  const title = data.markdownRemark.frontmatter.title;
  const date = data.markdownRemark.frontmatter.date;
  const html = data.markdownRemark.html;

  return (
    <Layout>
      <OuterContainer>
        <BlogPostContent>
          <h1>{title}</h1>
          <StyledDate>{date}</StyledDate>
          <div className="blogpost" dangerouslySetInnerHTML={{ __html: html }} />
        </BlogPostContent>
        <StyledLink to="/blog">Back to Blog</StyledLink>
      </OuterContainer>
    </Layout>
  );
}

export const postQuery = graphql`
  query ($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM, DD, YYYY")
        path
        description
      }
    }
  }
`;

Template.propTypes = {
  data: PropTypes.object,
};

Template.defaultProps = {
  data: {},
};

export default Template;
