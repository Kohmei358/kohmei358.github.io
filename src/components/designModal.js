import React, { useEffect } from 'react';
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
  // background-color: white;
  // border: 2px solid var(--green);
  border-radius: var(--border-radius);
  height: 90%;
  width: 100%;
  // border: 1px solid black;
  overflow-y: scroll;
  z-index: 1;

  /* Scrollbar Styles */
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--dark-slate) transparent);
  }
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--dark-slate);
    border: 3px solid var(--light-navy);
    border-radius: 10px;
  }

  .image {
    width: 600px;
    height: 400px;
  }

  .text {
    width: 600px;
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

  useEffect(() => {
    console.log('Use effect!');
    document.body.style.overflow = 'hidden';
  });

  return (
    <StyledDesignCard expandedItem={props.expandedItem}>
      <button onClick={() => props.closeFunc()}>Close</button>
      <div class="image">
        <GatsbyImage class="img" image={image} alt={title} />{' '}
      </div>
      <br />
      <h1>{title}</h1>
      <div class="text" dangerouslySetInnerHTML={{ __html: html }}></div>
      <h1>{title}</h1>
      <div class="text" dangerouslySetInnerHTML={{ __html: html }}></div>
      <h1>{title}</h1>
      <div class="text" dangerouslySetInnerHTML={{ __html: html }}></div>
    </StyledDesignCard>
  );
};

export default DesignModal;
