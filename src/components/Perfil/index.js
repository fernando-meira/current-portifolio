import React from 'react';

import profile from '../../themes/assets/perfilPortifólio.svg';
import { Container } from './styles';

export default function Perfil() {
  return (
    <Container>
      <img src={profile} alt="profile" />
    </Container>
  );
}
