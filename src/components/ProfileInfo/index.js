import React from 'react';

import { colors } from '../../themes';
import {
  Container,
  ContactInfo,
  Circle,
  ContactInfoInternal,
  ProfileDescription,
  Dev,
  Name,
  AllInfo,
} from './styles';

export default function ProfileInfo() {
  return (
    <Container>
      <ContactInfo>
        <div className="Top">
          <Circle background={colors.red} />
          <Circle background={colors.yellow} />
          <Circle background={colors.green} />
        </div>

        <ContactInfoInternal>
          <Dev>
            &lt;
            <p className="blue"> Developer</p>
          </Dev>

          <AllInfo>
            <Name className="green">
              name<span className="red">=</span>
              <span className="yellow">"Fernando Meira"</span>
            </Name>
            <p className="green">cleanCode</p>
            <p className="green">interest</p>
          </AllInfo>
        </ContactInfoInternal>
      </ContactInfo>

      <ProfileDescription>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          scelerisque a quam id imperdiet. Duis mauris tellus, imperdiet vel
          augue sed, lacinia ultrices nulla. Sed arcu odio, suscipit et quam eu,
          vulputate egestas leo. Interdum et malesuada fames ac ante ipsum
          primis in faucibus. Curabitur congue vehicula metus nec porta. In
          tempor, ex vestibulum vulputate eleifend, nisi enim sollicitudin
          neque, quis aliquam purus ligula a lorem. Vestibulum eleifend magna
          massa. Curabitur porttitor luctus lacinia. Sed molestie tellus ut
          condimentum tempus. Donec eu sagittis nisi, vitae viverra lectus.
          Integer pellentesque odio eu quam fermentum, id porta nisl vestibulum.
          Mauris aliquam fringilla ex, non bibendum lacus. Fusce tempus ipsum
          ante, non ultrices diam porta sed. In eu tristique enim, ac dignissim
          leo. Nulla vehicula leo nec ante pretium eleifend. Cras egestas nibh
          magna. Suspendisse a ante.
        </p>

        <p>
          Let’s work together ? <span>send me a message!</span>
        </p>
      </ProfileDescription>
    </Container>
  );
}
