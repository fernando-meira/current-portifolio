import styled from 'styled-components';
import { darken } from 'polished';

import { pxToRem } from '../../functions';
import { colors } from '../../themes';

export const Container = styled.section`
  margin: ${pxToRem(50)} auto;
  width: 90%;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ContactInfo = styled.div`
  padding: ${pxToRem(16)};
  min-width: ${pxToRem(650)};
  min-height: ${pxToRem(625)};
  border-radius: ${pxToRem(16)};

  background: rgba(255, 255, 255, 0.1);
`;
export const ProfileDescription = styled.div`
  width: ${pxToRem(719)};
  height: ${pxToRem(643)};

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  p {
    font-size: ${pxToRem(24)};
    line-height: 1.8;

    span {
      text-decoration: underline;
    }
  }
`;
