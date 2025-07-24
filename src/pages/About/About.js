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
   
   const skillsData = [
     { name: 'Javascript', rating: 4 },
     { name: 'Java', rating: 3 },
     { name: 'PHP', rating: 3 },
     { name: 'Python', rating: 4 },
     { name: 'React', rating: 4 },
     { name: 'Django Framework', rating: 3 },
     { name: 'Laravel', rating: 3 },
     { name: 'Wordpress', rating: 4 },
     { name: 'HTML', rating: 4 },
     { name: 'CSS / SASS', rating: 4 },
     { name: 'Tailwind / Bootstrap', rating: 4 },
     { name: 'Junit', rating: 3 },
     { name: 'Selenium', rating: 3 },
     { name: 'Bancos de Dados', rating: 3 },
     { name: 'Design UX / UI', rating: 4 },
     { name: 'Git / GitHub', rating: 4 },
     { name: 'API\'s e Requisições', rating: 3 },
     { name: 'Linux', rating: 3 },
     { name: 'Gerenciadores de Pacotes', rating: 4 },
     { name: 'Docker', rating: 2 },
     { name: 'Deploys', rating: 3 },
     { name: 'Postman', rating: 3 },
   ];
   
   const Skills = () => {
     return (
       <div className="box-skills" id="about">
         <img src="assets/images/rehzera.png" alt="Foto do Renan" />
         <h1>RENAN ALEXANDRE BERTON</h1>
         <span className='text-about'>Formado em Análise e Desenvolvimento de Sistemas pela Universidade Paulista.
         <br /><br /> Atuo com Desenvolvimento Full-Stack e bancos de dados.</span>
         <div>
           <h2>Tecnologias</h2>
         </div>
         <div className="skills-container">
           {skillsData.map((skill, index) => (
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