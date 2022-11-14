import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import DesignCard from './designCard';
import DesignModal from './designModal';

const StyledDesignSection = styled.section`
  ul {
    padding: 10px;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 10px;
    padding: 0;
    // background-color: blue;
  }
`;

const Design = () => {
  const [expandedItem, setExpandedItem] = useState(-1);

  const closeModal = () => {
    document.body.style.overflow = 'visible';
    setExpandedItem(-1);
  };

  const setExpandedItemFunc = index => {
    setExpandedItem(index);
  };

  const data = useStaticQuery(graphql`
    {
      featured: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/featured/" } }
        sort: { fields: [frontmatter___date], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              title
              cover {
                childImageSharp {
                  gatsbyImageData(width: 700, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                }
              }
              tech
              github
              youtube
              external
            }
            html
          }
        }
      }
    }
  `);

  const featuredProjects = data.featured.edges.filter(({ node }) => node);

  // console.log(featuredProjects);
  let dataForModal = featuredProjects[expandedItem];
  return (
    <StyledDesignSection>
      {dataForModal && (
        <DesignModal
          data={dataForModal}
          expandedItem={expandedItem}
          closeFunc={closeModal}></DesignModal>
      )}

      <h1>(Under Development) A portfolio of my software experience design work:</h1>
      <ul>
        {featuredProjects &&
          featuredProjects.map(({ node }, i) => {
            const { frontmatter, html } = node;
            return (
              <DesignCard
                html={html}
                frontmatter={frontmatter}
                setExpandedItemFunc={setExpandedItemFunc}
                index={i}
                key={i}></DesignCard>
            );
          })}
      </ul>
    </StyledDesignSection>
  );
};

export default Design;
