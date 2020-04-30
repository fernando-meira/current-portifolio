import styled from 'styled-components';
import media from 'styled-media-query';
import { lighten } from 'polished';

import { pxToRem } from '../../functions';
import { colors } from '../../themes';

export const Container = styled.section`
  margin: ${pxToRem(50)} auto;
  max-width: 90%;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  ${media.lessThan('medium')`
    max-width: 100%;
  `}

  ${media.lessThan('small')`
    margin: ${pxToRem(25)} auto;

    align-items: center;
    flex-direction: column;

  `}
`;
export const Jobs = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  ${media.lessThan('small')`
    margin-top: ${pxToRem(25)};
  `}
`;

export const JobsDescription = styled.p`
  margin-bottom: ${pxToRem(20)};

  font-size: ${pxToRem(20)};

  ${media.lessThan('small')`
    margin-bottom: ${pxToRem(10)};
  `}
`;

export const JobsImage = styled.div`
  img {
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.78);
    width: ${pxToRem(120)};
    height: ${pxToRem(120)};
    margin: 0 ${pxToRem(10)};
    border-radius: 50%;

    transition: 0.3s;

    object-fit: cover;

    :hover {
      transform: scale(0.9);

      border-radius: ${pxToRem(8)};
    }

    ${media.lessThan('huge')`
      width: ${pxToRem(80)};
      height: ${pxToRem(80)};
  `}

    ${media.lessThan('small')`
      max-width: ${pxToRem(60)};
      max-height: ${pxToRem(60)};
      margin: 0 ${pxToRem(2)};

    `}
  }
`;

export const Studies = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  ${media.lessThan('small')`
    margin-top: ${pxToRem(25)};
  `}
`;
export const StudiesDescription = styled.div`
  margin-bottom: ${pxToRem(20)};

  font-size: ${pxToRem(20)};

  ${media.lessThan('small')`
    margin-bottom: ${pxToRem(10)};
  `}
`;
export const StudiesImage = styled.div`
  img {
    border-radius: 50%;
    width: ${pxToRem(120)};
    height: ${pxToRem(120)};
    margin: 0 ${pxToRem(10)};
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.78);

    transition: 0.3s;
    object-fit: cover;

    :hover {
      transform: scale(0.9);

      border-radius: ${pxToRem(8)};
    }

    ${media.lessThan('huge')`
      width: ${pxToRem(80)};
      height: ${pxToRem(80)};
  `}

    ${media.lessThan('small')`
      max-width: ${pxToRem(60)};
      max-height: ${pxToRem(60)};
      margin: 0 ${pxToRem(2)};
    `}
  }
`;
