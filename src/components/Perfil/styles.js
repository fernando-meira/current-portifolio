import styled from 'styled-components';
import media from 'styled-media-query';

import { pxToRem } from '../../functions';

export const Container = styled.img`
  border-radius: 50%;
  width: ${pxToRem(207)};
  height: ${pxToRem(207)};
  margin: 0 ${pxToRem(33)};
  box-shadow: 0 1px 6px 0 rgba(255, 255, 255, 0.3);

  transition: 0.3s;
  object-fit: cover;

  ${media.lessThan('huge')`
    width: ${pxToRem(150)};
    height: ${pxToRem(150)};
  `}

  ${media.lessThan('large')`
    width: ${pxToRem(120)};
    height: ${pxToRem(120)};

    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.78);

  `}

  :hover {
    transform: scale(0.85);

    border-radius: ${pxToRem(16)};
  }
`;
