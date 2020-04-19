import styled from 'styled-components';

import { pxToRem } from '../../functions';

export const Container = styled.section`
  margin: ${pxToRem(50)} auto;
  max-width: 90%;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;
export const Jobs = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const JobsDescription = styled.p`
  margin-bottom: ${pxToRem(20)};

  font-size: ${pxToRem(20)};
`;

export const JobsImage = styled.div`
  img {
    border-radius: 50%;
    width: ${pxToRem(120)};
    height: ${pxToRem(120)};
    margin: 0 ${pxToRem(10)};
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.78);

    object-fit: cover;
  }
`;

export const Studies = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const StudiesDescription = styled.div`
  margin-bottom: ${pxToRem(20)};

  font-size: ${pxToRem(20)};
`;
export const StudiesImage = styled.div`
  img {
    border-radius: 50%;
    width: ${pxToRem(120)};
    height: ${pxToRem(120)};
    margin: 0 ${pxToRem(10)};
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.78);

    object-fit: cover;
  }
`;
