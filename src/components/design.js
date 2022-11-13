import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import DesignCard from './designCard';

const StyledDesignSection = styled.section`
  li {
    list-style: none;
    background-color: var(--green);
    width: 300px;
    height: 400px;
    border: 1px solid black;
    margin: 10px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
  }
`;

const Design = () => {
  return (
    <StyledDesignSection>
      <ul>
        <DesignCard name="Name1"></DesignCard>
        <DesignCard name="Name2"></DesignCard>
        <DesignCard name="Name3"></DesignCard>
      </ul>
    </StyledDesignSection>
  );
};

export default Design;
