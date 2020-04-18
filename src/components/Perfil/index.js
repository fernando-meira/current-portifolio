import React from 'react';

import profile from '../../themes/assets/Perfil-Git-Editando-cC.jpg';
import { Container } from './styles';

export default function Perfil() {
  return (
    <Container>
      <img src={profile} alt="profile" />
    </Container>
  );
}
