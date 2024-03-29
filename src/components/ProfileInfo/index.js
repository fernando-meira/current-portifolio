import React from 'react';

import { colors } from '../../themes';
import {
  Dev,
  Title,
  Circle,
  Contact,
  AllInfo,
  Container,
  ContactInfo,
  ProfileDescription,
  ContactInfoInternal,
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
            <Title className="blue">
              <span className="white">&lt;</span> Developer
            </Title>
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
            <Title className="blue">
              <span className="white">&lt;</span> Contact
            </Title>

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
                  /in/lassofend
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
          I'm a nice guy looking for knowledge. I am currently a student of
          systems analysis and development at Fatec Itapetininga and a student
          of web and mobile development. I work at Goomer as a
          front-end with about two and a half years of experience in the role. In my spare time I try to
          deepen my knowledge in JavaScript, TypeScript, React, React Native, HTML, CSS, and
          Node.js.
        </p>

        <p>Let’s work together?</p>

        <a href="https://wa.me/5515998266793?text=Olá!%20Tudo%20bem?">
          Send me a message!
        </a>
        <p>Website under development!</p>
      </ProfileDescription>
    </Container>
  );
}
