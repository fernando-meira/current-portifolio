import styled, { css } from 'styled-components';
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

  .Top {
    display: flex;
  }

  background: rgba(255, 255, 255, 0.1);
`;

export const Circle = styled.div`
  border-radius: 50%;
  width: ${pxToRem(16)};
  height: ${pxToRem(16)};
  margin-right: ${pxToRem(10)};

  background-color: ${({ background }) => background};
`;

export const ContactInfoInternal = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Dev = styled.span`
  color: ${({ color }) => color};
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
