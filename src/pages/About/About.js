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
     { name: 'HTML', rating: 3 },
     { name: 'CSS / SASS', rating: 4 },
     { name: 'Javascript', rating: 4 },
     { name: 'React', rating: 5 },
     { name: 'Wordpress', rating: 4 },
     { name: 'Bancos de Dados', rating: 4 },
     { name: 'Tailwind / Bootstrap', rating: 5 },
     { name: 'Design UX / UI', rating: 4 },
     { name: 'API\'s e Requisições', rating: 4 },
   ];
   
   const Skills = () => {
     return (
       <div className="box-skills">
         <img src="assets/images/rehzera.png" alt="Foto do Renan" />
         <h1>RENAN ALEXANDRE BERTON</h1>
         <span className='text-about'>Formado em Análise e Desenvolvimento de Sistemas na Universidade Paulista.
         <br /><br /> Atuo com Desenvolvimento focado em Front-End e algumas tecnologias back-end e bancos de dados.</span>
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