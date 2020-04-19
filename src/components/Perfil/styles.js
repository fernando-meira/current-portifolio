import styled from 'styled-components';

import { pxToRem } from '../../functions';

export const Container = styled.div`
  width: ${pxToRem(200)};
  height: ${pxToRem(200)};
  margin: ${pxToRem(50)} auto;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 50%;

    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.78);

    width: 90%;
    height: 90%;
  }
`;
