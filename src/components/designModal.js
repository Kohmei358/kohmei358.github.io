import React, { useEffect, useRef } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { useOnClickOutside } from '@hooks';
import { Icon } from '@components/icons';

const StyledDesignCard = styled.section`
  // background-color: rgba(100, 0, 0, 0.85);
  background-color: rgba(10, 25, 47, 0.85);
  backdrop-filter: blur(5px);
  position: fixed;
  // margin: -10px;
  // padding: -10px;
  // top: 100px;
  top: 0;
  // left: -10px;
  width: 100%;
  // max-width: 1020px;
  height: 100%;
  max-height: 100%;
  z-index: 8;
  display: flex;
  justify-content: center;
  align-items: top;
  padding: 0;

  .content {
    display: ${props => (props.expandedItem === -1 ? 'none' : 'flex')};
    ${({ theme }) => theme.mixins.boxShadow};
    position: fixed;
    flex-direction: column;
    align-items: top;
    margin-top: 100px;
    padding: 50px;
    background-color: var(--light-navy);
    // background-color: white;
    // border: 2px solid var(--green);
    border-radius: var(--border-radius);
    height: calc(100vh - 150px);

    max-width: 800px;

    width: auto;
    @media (max-width: 768px) {
      width: 100%;
    }
    // border: 1px solid black;
    overflow-y: scroll;
    overflow-x: hidden;
    z-index: 1;
    flex-shrink: 1;

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
  }

  .image {
    max-width: 600px;
    max-height: 400px;
  }

  .text {
    // width: 600px;
  }


  button {
    background: transparent;

    svg {
      stroke: var(--light-slate);
      fill: var(--light-slate);
      &:hover,
      &:focus {
        stroke: var(--green);
        fill: var(--green);
      }
      width: 36px;
      height: 36px;
    }
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

  const wrapperRef = useRef(null);
  useOnClickOutside(wrapperRef, () => props.closeFunc());

  return (
    <StyledDesignCard expandedItem={props.expandedItem}>
      <div className="content" ref={wrapperRef}>
        <button onClick={() => props.closeFunc()}>
          <Icon name="Close" />
        </button>
        <div className="image">
          <GatsbyImage class="img" image={image} alt={title} />{' '}
        </div>
        <br />
        <h1>{title}</h1>
        <div className="text" dangerouslySetInnerHTML={{ __html: html }}></div>
        <h1>{title}</h1>
        <div className="text" dangerouslySetInnerHTML={{ __html: html }}></div>
        <h1>{title}</h1>
        <div className="text" dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    </StyledDesignCard>
  );
};

export default DesignModal;
