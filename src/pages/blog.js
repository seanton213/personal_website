import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  font-family: 'Raleway', sans-serif;
  background: #eeeeee;
  padding: 24px;
`;

const Header = styled.h1`
  align-self: center;
`;

const StyledLink = styled((props) => <Link {...props} />)`
  color: black;
  text-decoration: underline;
  font-weight: 600;
`;

const StyledParagraph = styled.p`
  font-size: 16px;
`;

function Blog({ data }) {
  const { edges } = data.allMarkdownRemark;

  return (
    <>
      <OuterContainer>
        <Header>Blog</Header>

        {edges.map((edge) => {
          const { frontmatter } = edge.node;
          return (
            <div key={frontmatter.path}>
              <StyledLink to={frontmatter.path}>{frontmatter.title}</StyledLink>
              &nbsp;
              <small>
                {' '}
                <em>published on {frontmatter.date}</em>
              </small>
              <StyledParagraph>{frontmatter.description}</StyledParagraph>
              <br />
            </div>
          );
        })}
      </OuterContainer>
    </>
  );
}

Blog.propTypes = {
  data: PropTypes.object,
};

Blog.defaultProps = {
  data: {},
};

export const query = graphql`
  query Blog {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            description
          }
        }
      }
    }
  }
`;

export default Blog;
