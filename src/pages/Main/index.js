import React from 'react';

import { JobsAndStudies, ProfileInfo } from '../../components';

import { Container } from './styles';

export default function Main() {
  return (
    <Container>
      <JobsAndStudies />
      <ProfileInfo />
    </Container>
  );
}
