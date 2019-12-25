import React from 'react';
import styled from 'styled-components';
import * as t from '../Typography';

const WorkExperiencesStyle = styled('ul')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  list-style: none;
  grid-gap: -2px;
  padding: 0;

  > li {
    border: 1px solid #eee;
    padding: 51px 33px;
    text-align: left;
    background-color: white;

    > h4 {
      margin: 5px 0;
    }
  }
`;

interface Experience {
  title: string;
  startDate: string;
  endDate: string;
  companyName: string;
  description: string;
}

interface Props {
  workExperiences: Experience[];
}

const WorkExperience = props => {
  const { exp } = props;

  return (
    <li className="experience">
      <span className="duration">
        {exp.startDate} - {exp.endDate}
      </span>
      <t.H4 bold>{exp.title}</t.H4>
      <span className="company">{exp.companyName}</span>
      <t.P>{exp.description}</t.P>
    </li>
  );
};

function WorkExperiences(props: Props) {
  const { workExperiences } = props;

  return (
    <WorkExperiencesStyle>
      {workExperiences.map(exp => (
        <WorkExperience exp={exp} />
      ))}
    </WorkExperiencesStyle>
  );
}

export default WorkExperiences;
