import React from 'react';

import { colors } from '../../themes';
import {
  Container,
  ContactInfo,
  Circle,
  ContactInfoInternal,
  ProfileDescription,
  Dev,
  Contact,
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
            <p className="blue">
              <span className="white">&lt;</span> Developer
            </p>
            <AllInfo>
              <p className="green">
                name
                <span className="red">=</span>
                <span className="yellow">"Fernando Meira"</span>
              </p>
              <p className="green">
                role
                <span className="red">=</span>
                <span className="yellow">"Web and Mobile Front End"</span>
              </p>
              <p className="green">
                programming tools
                <span className="red">=</span>
                <span className="yellow">
                  "JavaScript, ReactJS, React Native and Node.js"
                </span>
              </p>
            </AllInfo>
            <span className="white">/&gt;</span>
          </Dev>

          <Contact>
            <p className="blue">
              <span className="white">&lt;</span> Contact
            </p>
            <AllInfo>
              <p className="green">
                github
                <span className="red">=</span>
                <span className="blue">{'{'}</span>
                <a href="https://github.com/fernando-meira" className="white">
                  fernando.meira
                </a>
                <span className="blue">{'}'}</span>
              </p>

              <p className="green">
                linkedin
                <span className="red">=</span>
                <span className="blue">{'{'}</span>
                <a
                  href="https://www.linkedin.com/in/lassofend/"
                  className="white"
                >
                  /in/lassofend/
                </a>
                <span className="blue">{'}'}</span>
              </p>

              <p className="green">
                e-mail
                <span className="red">=</span>
                <span className="yellow">"thomwork@outlook.com"</span>
              </p>
            </AllInfo>
            <span className="white">/&gt;</span>
          </Contact>
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
