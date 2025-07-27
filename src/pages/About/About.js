import './style.scss';

function About() {
   const Skill = ({ name, rating }) => {
     return (
       <div className="skill">
         <span className="skill-name">{name}</span>
         <div className="stars">
           {Array.from({ length: 5 }, (_, index) => (
             <span key={index} className={index < rating ? "star filled" : "star"}>★</span>
           ))}
         </div>
       </div>
     );
   };
   
   const skillsDataLanguages = [
     { name: 'Javascript', rating: 4 },
     { name: 'Java', rating: 3 },
     { name: 'PHP', rating: 3 },
     { name: 'Python', rating: 4 }
   ];
   
   const skillsDataFrameworks = [
     { name: 'React', rating: 4 },
     { name: 'Spring-boot', rating: 3 },
     { name: 'Laravel', rating: 3 },
     { name: 'Django', rating: 4 },
     { name: 'Tailwwind CSS', rating: 5 },
     { name: 'Bootstrap', rating: 5 },
     { name: 'CSS / SASS', rating: 4 },
     { name: 'Wordpress', rating: 4 },
   ];
   
   const skillsBackEnd = [
     { name: 'MySQL', rating: 4 },
     { name: 'Oracle', rating: 4 },
     { name: 'Postgree', rating: 3 },
     { name: 'Docker', rating: 2 },
     { name: 'Deploys', rating: 5 },
     { name: 'Linux', rating: 3 },
     { name: 'Gerenciadores de Pacotes', rating: 4 },
     { name: 'ShellScript', rating: 3 },
   ];

   const skillsTools = [
     { name: 'Inteligência Artificial', rating: 5 },
     { name: 'Figma', rating: 4 },
     { name: 'GIMP', rating: 3 },
     { name: 'XML', rating: 4 },
     { name: 'JSON', rating: 5 },
     { name: 'Git / GitHub', rating: 5 },
     { name: 'SVN', rating: 4 },     
     { name: 'Postman', rating: 4 },
     { name: 'Selenium', rating: 2 },
     { name: 'Junit', rating: 2 },
     { name: 'JIRA', rating: 4 },
     { name: 'Trello', rating: 4 },
   ];
   
   const Skills = () => {
     return (
       <div className="box-skills" id="about">
         <img src="assets/images/rehzera.png" alt="Foto do Renan" />
         <h1>RENAN ALEXANDRE BERTON</h1>
         <span className='text-about'>Formado em Análise e Desenvolvimento de Sistemas pela Universidade Paulista.
         <br /><br /> Atuo com Desenvolvimento Full-Stack e bancos de dados.</span>
         <div>
           <h2>Linguagens</h2>
         </div>
         <div className="skills-container">
           {skillsDataLanguages.map((skill, index) => (
             <Skill key={index} name={skill.name} rating={skill.rating} />
           ))}
         </div>
         <div>
           <h2>Frameworks e Bibliotecas</h2>
         </div>
         <div className="skills-container">
           {skillsDataFrameworks.map((skill, index) => (
             <Skill key={index} name={skill.name} rating={skill.rating} />
           ))}
         </div>
         <div>
           <h2>Banco de Dados e Back-end</h2>
         </div>
         <div className="skills-container">
           {skillsBackEnd.map((skill, index) => (
             <Skill key={index} name={skill.name} rating={skill.rating} />
           ))}
         </div>
         <div>
           <h2>Ferramentas</h2>
         </div>
         <div className="skills-container">
           {skillsTools.map((skill, index) => (
             <Skill key={index} name={skill.name} rating={skill.rating} />
           ))}
         </div>
       </div>
     );
   };
   
     return (
       <Skills />
     );
   }

   export default About;