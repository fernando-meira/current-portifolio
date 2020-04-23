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

  ${media.lessThan('1366px')`
    width: ${pxToRem(150)};
    height: ${pxToRem(150)};
  `}

  :hover {
    transform: scale(0.85);

    border-radius: ${pxToRem(16)};
  }
`;
