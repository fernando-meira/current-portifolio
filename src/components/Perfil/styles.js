import styled from 'styled-components';
import media from 'styled-media-query';

import { pxToRem } from '../../functions';

export const Container = styled.div`
  margin-top: ${pxToRem(32)};

  ${media.lessThan('medium')`
    margin-top: ${pxToRem(30)};

  `}

  ${media.lessThan('small')`
    margin-top: ${pxToRem(25)} auto;
  `}

  .image-wrapper {
    position: relative;

    width: ${pxToRem(260)};
    height: ${pxToRem(260)};

    transition: transform 0.4s;

    > img {
      position: absolute;
      bottom: 50%;
      right: 50%;
      transform: translate(50%, 50%);

      border-radius: 50%;
      width: 65%;
      height: 65%;
      border: 1px solid rgba(255, 255, 255, 0.2);
      box-shadow: 0 1px 6px 0 rgba(255, 255, 255, 0.3);

      object-fit: cover;
    }

    ${media.lessThan('huge')`
      width: ${pxToRem(274)};
      height: ${pxToRem(274)};
    `}

    ${media.lessThan('large')`
      width: ${pxToRem(222)};
      height: ${pxToRem(222)};
    `}

    ${media.lessThan('medium')`
      width: ${pxToRem(180)};
      height: ${pxToRem(180)};
    `}

    :hover {
      transform: scale(0.9);
    }
}`;
