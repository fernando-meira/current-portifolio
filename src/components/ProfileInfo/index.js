import React from 'react';

import { Container, ContactInfo, ProfileDescription } from './styles';

export default function ProfileInfo() {
  return (
    <Container>
      <ContactInfo>
        <h1>Hello World</h1>
      </ContactInfo>

      <ProfileDescription>
        <p>
          I’m an experienced front end and mobile developer who is true to the
          design and search for the perfection of the project. I have been
          working almost two years as a front end developer creating the most
          diverse types of solutions and visual representations of my client’s
          companies in the agency that I work for and in the weekends for the
          Fabrica de Software in the same position. Education wise, I have a
          technical degree and I’m in the last year of the superior course of
          analysis and system development. I always seek to take the best
          experience that the user can have along, with the best visual and
          performance as possible using Javascript as the programming language
          with ReactJS or VueJS for web projects and React Native for mobile
          projects.
        </p>

        <p>
          Let’s work together ? <span>send me a message!</span>
        </p>
      </ProfileDescription>
    </Container>
  );
}
