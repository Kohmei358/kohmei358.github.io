import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import DesignCard from './designCard';

const StyledDesignSection = styled.section`
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 0;
    // display: grid;
    // grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    // grid-gap: 15px;
    // position: relative;
    background-color: blue;
  }
`;

const Design = () => {
  return (
    <StyledDesignSection>
      <ul>
        <DesignCard name="Name1"></DesignCard>
        <DesignCard name="Name2"></DesignCard>
        <DesignCard name="Name3"></DesignCard>
        <DesignCard name="Name3"></DesignCard>
        <DesignCard name="Name3"></DesignCard>
        <DesignCard name="Name3"></DesignCard>
      </ul>
    </StyledDesignSection>
  );
};

export default Design;
