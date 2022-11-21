import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const StyledDesignCard = styled.section`
  ${({ theme }) => theme.mixins.boxShadow};
  background-color: var(--light-navy);
  border-radius: var(--border-radius);
  // height: 168px;
  // min-width: 50%;
  // max-width: 50%;
  // padding-top: 56.25%
  // flex-grow: 1;
  // flex-shrink: 1;
  padding: 0;

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    // background-color: var(--light-navy);
    .img {
      // mix-blend-mode: normal;
    }
  }

  .img {
    // mix-blend-mode: screen;
    border-radius: var(--border-radius) var(--border-radius) 0 0;
    // margin-bottom: -1px;
  }

  h2 {
    font-size: var(--fz-x);
  }

  .textContainer {
    padding: 20px;
    border-top: 2px solid var(--green);
  }

  .bodyText {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

const DesignCard = props => {
  const { external, title, tech, github, youtube, cover, cta } = props.frontmatter;
  const image = getImage(cover);

  return (
    <StyledDesignCard onClick={() => props.setExpandedItemFunc(props.index)}>
      <GatsbyImage className="img" image={image} alt={title} />
      <div className="textContainer">
        <h2>{title}</h2>
        <p className="bodyText" dangerouslySetInnerHTML={{ __html: props.html }}></p>
      </div>
    </StyledDesignCard>
  );
};

export default DesignCard;
