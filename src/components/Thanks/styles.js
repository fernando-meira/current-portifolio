import styled from 'styled-components';

import { pxToRem } from '../../functions';
import { colors } from '../../themes';

export const Container = styled.div`
  p {
    font-size: ${pxToRem(16)};

    a {
      text-decoration: none;
      color: ${colors.blue};
    }
  }
`;
