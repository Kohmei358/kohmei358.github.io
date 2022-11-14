import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const StyledDesignCard = styled.section`
  display: ${props => (props.expandedItem === -1 ? 'none' : 'flex')};
  ${({ theme }) => theme.mixins.boxShadow};
  position: fixed;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: var(--light-navy);
  border-radius: var(--border-radius);
  height: 100%;
  width: 100%;
  // border: 1px solid black;

  z-index: 1;

  .img {
    height: 400px;
  }

  button {
    ${({ theme }) => theme.mixins.smallButton};
    margin-left: 15px;
    font-size: var(--fz-xs);
  }
`;

const DesignModal = props => {
  const { frontmatter, html } = props.data.node;
  const { external, title, tech, github, youtube, cover, cta } = frontmatter;
  const image = getImage(cover);
  return (
    <StyledDesignCard expandedItem={props.expandedItem}>
      <GatsbyImage class="img" image={image} alt={title} />
      <br />
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>

      <button onClick={() => props.closeFunc()}>Close</button>
    </StyledDesignCard>
  );
};

export default DesignModal;
