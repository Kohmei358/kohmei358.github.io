import React, { useEffect, useRef, useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledDesignCard = styled.section`
  background-color: ${props => (props.expanded ? 'var(--green)' : 'red')};
  width: ${props => (props.expanded ? '600px' : '300px')};
  height: ${props => (props.expanded ? '400px' : '200px')};
  border: 1px solid black;
`;

const DesignCard = props => {
  const [expanded, setExpanded] = useState(false);

  return (
    <StyledDesignCard expanded={expanded} onClick={() => setExpanded(!expanded)}>
      {props.name + ' ' + expanded}
    </StyledDesignCard>
  );
};

export default DesignCard;
