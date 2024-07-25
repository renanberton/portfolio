import './style.scss'

function Experiences() {
   return (
   <div className='container-experience' id="experiences">
         <h2>Experiências</h2>
         <div className="box-experiences">
            <h2>Desenvolvedor Full-Stack Junior</h2>    
            <div className="job-informations">
               <h3>Davinti</h3>
               <span>Out. de 2022 / Mai. de 2023</span>
            </div>
            <p>Desenvolvimento de scripts e layouts desktop e mobile, utilizando Javascript. <br />Administração e Operação de banco de dados: Oracle, MySQL e Postgre.<br />Desenvolvimento de Fluxogramas e processos BPMN.<br />Uso de Metodologia Ágil Scrum e Kan Ban.Trabalho em equipe.</p>
         </div>
         <div className="box-experiences">
            <h2>Estagiário de Desenvolvimento Full-Stack</h2>    
            <div className="job-informations">
               <h3>Doois Web</h3>
               <span>Out. de 2021 / Out. de 2022</span>
            </div>
            <p>Desenvolvimento e modificações de Websites responsivos e funcionais.<br />Uso de Wordpress, HTML, CSS, Javascript, React, Python, MySql e Linux, Projetos de UX/UI com Figma.<br />Ferramentas Bitbucket, Jira, Strapi, etc.<br />Versionamento de códigos com GIT/Github</p>
         </div>
   </div>
   )
}

export default Experiences;