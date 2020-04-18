import styled from 'styled-components';

import { pxToRem } from '../../functions';

export const Container = styled.div`
  margin: ${pxToRem(50)} auto;

  display: flex;
  align-items: center;
  justify-content: center;

  width: ${pxToRem(200)};
  height: ${pxToRem(200)};

  img {
    border-radius: 50%;

    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.78);

    width: 90%;
    height: 90%;
  }
`;
