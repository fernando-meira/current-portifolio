import React, { useState } from 'react';

import { Perfil } from '..';

import data from './dataMock';
import {
  Container,
  StudiesAndJobs,
  Jobs,
  JobsDescription,
  JobsImage,
  Studies,
  StudiesDescription,
  StudiesImage,
} from './styles';

export default function JobsAndStudies() {
  const { jobs, studies } = data;

  return (
    <Container>
      <Studies>
        <StudiesDescription>Studies</StudiesDescription>

        <StudiesImage>
          {studies.map((study) => (
            <img key={study.id} src={study.img} alt={study.local} />
          ))}
        </StudiesImage>
      </Studies>

      <Jobs>
        <JobsDescription>Jobs</JobsDescription>

        <JobsImage>
          {jobs.map((job) => (
            <img key={job.id} src={job.img} alt={job.local} />
          ))}
        </JobsImage>
      </Jobs>
    </Container>
  );
}
