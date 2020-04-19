import styled from 'styled-components';

import { pxToRem } from '../../functions';

export const Container = styled.img`
  border-radius: 50%;
  width: ${pxToRem(207)};
  height: ${pxToRem(207)};
  margin: 0 ${pxToRem(33)};
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.78);

  object-fit: cover;
`;
