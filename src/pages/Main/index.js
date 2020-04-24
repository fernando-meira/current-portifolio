import React from 'react';
import ReactGA from 'react-ga';

import { JobsAndStudies, ProfileInfo } from '../../components';

import { Container } from './styles';

ReactGA.initialize('UA-164524045-1');
ReactGA.pageview(window.location.pathname + window.location.search);

export default function Main() {
  return (
    <Container>
      <JobsAndStudies />
      <ProfileInfo />
    </Container>
  );
}
