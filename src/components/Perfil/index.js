import React from 'react';

import profile from '../../themes/assets/profile.jpg';
import { ReactComponent as BackgroundImage } from '../../themes/assets/effect-image-outline.svg';

import { Container } from './styles';

export default function Perfil() {
  return (
    <Container>
      <div className="image-wrapper">
        <BackgroundImage />
        <img src={profile} alt="profile" />
      </div>
    </Container>
  );
}
