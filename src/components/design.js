import React, { useEffect, useRef, useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import DesignCard from './designCard';
import DesignModal from './designModal';

const StyledDesignSection = styled.section`
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 10px 0px;
    padding: 0;
    // display: grid;
    // grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    // grid-gap: 15px;
    // position: relative;
    // background-color: blue;
  }
`;

const Design = () => {
  const [expandedItem, setExpandedItem] = useState(-1);

  const closeModal = () => {
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
  const revealProjects = useRef([]);

  return (
    <StyledDesignSection>
      <DesignModal name="Name4" expandedItem={expandedItem} closeFunc={closeModal}></DesignModal>
      <h1>A portfolio of my software experience design work:</h1>
      <ul>
        {featuredProjects &&
          featuredProjects.map(({ node }, i) => {
            const { frontmatter, html } = node;
            return (
              <DesignCard
                frontmatter={frontmatter}
                setExpandedItemFunc={setExpandedItemFunc}
                key={i}
                ref={el => (revealProjects.current[i] = el)}></DesignCard>
            );
          })}
      </ul>
    </StyledDesignSection>
  );
};

export default Design;
