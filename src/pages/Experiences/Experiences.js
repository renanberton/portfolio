import React from 'react';
import './style.scss';

const experiences = [
   {
      title: "Desenvolvedor Full-Stack Junior",
      company: "Tecnocomp",
      period: "Ago. de 2024 / Emprego Atual",
      description: `Prestação de Serviços, Desenvolvimento de Softwares e aplicações Web para a Prefeitura de São Bernardo do Campo.
      Manutenção de sistemas legados com Innovation e Cobol.
      Tecnologias para desenvolvimento: Java, HTML, CSS, Javascript, SQL, Postman, Spring MVC e Controle de Versionamento com SVN.`
    },
  {
    title: "Desenvolvedor Full-Stack Junior",
    company: "Davinti",
    period: "Out. de 2022 / Mai. de 2023",
    description: `Desenvolvimento de scripts e layouts desktop e mobile, utilizando Javascript.
    Administração e Operação de banco de dados: Oracle, MySQL e Postgre.
    Desenvolvimento de Fluxogramas e processos BPMN.
    Uso de Metodologia Ágil Scrum e Kan Ban.Trabalho em equipe.`
  },
  {
    title: "Estagiário de Desenvolvimento Full-Stack",
    company: "Doois Web",
    period: "Out. de 2021 / Out. de 2022",
    description: `Desenvolvimento e modificações de Websites responsivos e funcionais.
    Uso de Wordpress, HTML, CSS, Javascript, React, Python, MySql e Linux, Projetos de UX/UI com Figma.
    Ferramentas Bitbucket, Jira, Strapi, etc.
    Versionamento de códigos com GIT/Github`
  }
];

const Experience = () => {
  return (
   <div className='container-experience' id="experiences">
      <h2>Experiências</h2>
      {experiences.map((exp, index) => (
        <div className="box-experiences" key={index}>
          <h2>{exp.title}</h2>
          <div className="job-informations">
            <h3>{exp.company}</h3>
            <span>{exp.period}</span>
          </div>
          <p>
            {exp.description.split('\n').map((line, idx) => (
              <React.Fragment key={idx}>
                {line}<br />
              </React.Fragment>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
