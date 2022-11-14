import React, { useEffect, useRef, useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledDesignCard = styled.section`
  display: ${props => (props.expandedItem === -1 ? 'none' : 'block')};
  ${({ theme }) => theme.mixins.boxShadow};
  position: fixed;
  background-color: var(--light-navy);
  border-radius: var(--border-radius);
  height: 100%;
  width: 100%;
  // border: 1px solid black;
  flex-grow: 1;
  z-index: 1;
`;

const DesignModal = props => {
  const { frontmatter, html } = props.data.node;
  const { external, title, tech, github, youtube, cover, cta } = frontmatter;
  const image = getImage(cover);
  return (
    <StyledDesignCard expandedItem={props.expandedItem}>
      <GatsbyImage class="img" image={image} alt={title} />
      <h3>{title}</h3>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>

      <button onClick={() => props.closeFunc()}>Close</button>
    </StyledDesignCard>
  );
};

export default DesignModal;
