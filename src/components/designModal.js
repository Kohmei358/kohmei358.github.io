import React, { useEffect, useRef, useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledDesignCard = styled.section`
  display: ${props => (props.expandedItem === -1 ? 'none' : 'block')};
  position: fixed;
  background-color: var(--navy);
  height: 600px;
  width: 100%;
  // border: 1px solid black;
  flex-grow: 1;
  z-index: 1;
`;

const DesignModal = props => {
  return (
    <StyledDesignCard expandedItem={props.expandedItem}>
      <h2>{props.name}</h2>
      <p>{props.description}</p>

      <button onClick={() => props.closeFunc()}>Close</button>
    </StyledDesignCard>
  );
};

export default DesignModal;
