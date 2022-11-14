import React, { useEffect, useRef, useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledDesignCard = styled.section`
  ${({ theme }) => theme.mixins.boxShadow};
  background-color: var(--lightest-navy);
  border-radius: var(--border-radius);
  // height: 168px;
  // min-width: 50%;
  // max-width: 50%;
  // padding-top: 56.25%
  // flex-grow: 1;
  // flex-shrink: 1;
  padding: 10px;

  &:hover {
    background-color: var(--light-navy);
    .img {
      // mix-blend-mode: normal;
    }
  }

  .img {
    // mix-blend-mode: screen;
  }

  h3 {
    margin-top: 10px;
  }
`;

const DesignCard = props => {
  const { external, title, tech, github, youtube, cover, cta } = props.frontmatter;
  const image = getImage(cover);

  return (
    <StyledDesignCard onClick={() => props.setExpandedItemFunc(props.index)}>
      <GatsbyImage class="img" image={image} alt={title} />
      <h3>{title}</h3>
      <div dangerouslySetInnerHTML={{ __html: props.html }}></div>
    </StyledDesignCard>
  );
};

export default DesignCard;
