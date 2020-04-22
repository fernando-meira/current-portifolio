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

  * .white {
    color: ${colors.white};
  }

  * .yellow {
    color: ${colors.yellow};
  }

  * .red {
    color: ${colors.red};
  }

  * .blue {
    color: ${colors.blue};
  }

  * .green {
    color: ${colors.green};
  }
`;

export const ContactInfo = styled.div`
  padding: ${pxToRem(16)};
  max-width: 50%;
  min-height: ${pxToRem(625)};
  border-radius: ${pxToRem(16)};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  background: rgba(255, 255, 255, 0.1);

  .Top {
    display: flex;
  }
`;

export const Circle = styled.div`
  border-radius: 50%;
  width: ${pxToRem(16)};
  height: ${pxToRem(16)};
  margin-right: ${pxToRem(10)};

  background-color: ${({ background }) => background};
`;

export const ContactInfoInternal = styled.div`
  width: 100%;
  height: auto;
  margin-top: ${pxToRem(34)};

  display: flex;
  flex-direction: column;

  font-size: ${pxToRem(28)};

  p {
    margin: ${pxToRem(5)} 0;

    color: ${({ color }) => color};
  }
`;

export const Dev = styled.span`
  margin-left: ${pxToRem(54)};

  /* display: flex;
  flex-direction: row; */
`;

export const AllInfo = styled.div`
  margin-left: ${pxToRem(108)};

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  > a {
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }
`;

export const Contact = styled.span`
  margin-left: ${pxToRem(54)};
`;

export const ProfileDescription = styled.div`
  width: ${pxToRem(719)};
  height: ${pxToRem(643)};

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  p {
    font-size: ${pxToRem(22)};
    line-height: 1.8;

    span {
      text-decoration: underline;
    }
  }
`;
