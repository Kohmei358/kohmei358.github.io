import React, { useEffect, useRef, useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledDesignCard = styled.section`
  background-color: var(--navy);
  // height: 168px;
  border: 1px solid black;
  // min-width: 30%;
  max-width: 30%;
  // padding-top: 56.25%
  flex-grow: 1;
  padding: 0;
`;

const DesignCard = props => {
  const { external, title, tech, github, youtube, cover, cta } = props.frontmatter;
  const image = getImage(cover);

  return (
    <StyledDesignCard onClick={() => props.setExpandedItemFunc(1)}>
      <GatsbyImage critical image={image} alt={title} />
      {/* {title} */}
    </StyledDesignCard>
  );
};

export default DesignCard;
