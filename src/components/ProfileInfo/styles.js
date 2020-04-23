import styled, { css } from 'styled-components';
import { darken } from 'polished';
import media from 'styled-media-query';

import { pxToRem } from '../../functions';
import { colors } from '../../themes';

export const Container = styled.section`
  margin: ${pxToRem(50)} auto;
  width: 90%;

  display: flex;
  align-items: flex-start;
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
  max-width: 50%;
  padding: ${pxToRem(16)};
  min-height: ${pxToRem(625)};
  border-radius: ${pxToRem(16)};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  background: rgba(255, 255, 255, 0.1);
  transition: 0.3s;

  ${media.lessThan('1366px')`
    min-height: auto;
  `}

  .Top {
    display: flex;
  }

  :hover {
    transform: scale(1.04);

    border: 2px solid ${colors.white};
  }
`;

export const Circle = styled.div`
  border-radius: 45%;
  width: ${pxToRem(16)};
  height: ${pxToRem(16)};
  margin-right: ${pxToRem(10)};

  background-color: ${({ background }) => background};
`;

export const ContactInfoInternal = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;

  font-size: ${pxToRem(28)};

  p {
    color: ${({ color }) => color};
  }

  ${media.lessThan('1366px')`
    font-size: ${pxToRem(18)};

  `}
`;

export const Dev = styled.div`
  margin-left: ${pxToRem(54)};
`;

export const Title = styled.p`
  margin-top: ${pxToRem(40)} !important;
`;

export const AllInfo = styled.div`
  margin-left: ${pxToRem(108)};

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  > p a {
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }
`;

export const Contact = styled.div`
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

    a {
      color: ${colors.white};
      text-decoration: underline;
    }
  }

  a:hover {
    color: ${colors.blue};
  }

  ${media.lessThan('1366px')`
    width: 45%;
    height: auto;

    > p {
      font-size: ${pxToRem(18)};
    }
  `}
`;
