import React from 'react';
import Navbar from './Navbar';
import Mainframe from './assets/mainframe-146403_960_720.png';
import COBOL from './assets/cobol.png';
import JCL from './assets/jcl.png';
import VSAM from './assets/VSAM.jpg';
import Assembler from './assets/assembler.svg';
import DB2 from './assets/db2.png';
import IMSDB from './assets/ims.png';
import SQL from './assets/sql.png';
import Python from './assets/python.png';
import HTML from './assets/html-icon.png';
import css from './assets/css-icon.png';
import Bootstrap from './assets/bootstrap-5-logo-icon.png';
import ReactJS from './assets/react-js-icon.png';
import NodeJS from './assets/nodejs.svg';
import Express from './assets/express.svg';
import MongoDB from './assets/mongodb.svg';
import Docker from './assets/docker.svg';
import Kubernetes from './assets/kubernetes.svg';
import AICopilot from './assets/ai-copilot.svg';
import GitHub from './assets/github-icon.png';
import './Skills.css'

function Section({icon, items, alt}) {
    return (
        <div className='section-container'>
            <div className='icon-container'>
                <img src={icon} className='skill-icon' alt={alt}/>
            </div>
            <div className='content-container'>
                {items.map((item, index) =>
                    <div key = {index}>
                        <p>{item.skill} - {item.proficiency}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

function SkillGroup({ title, children }) {
    return (
        <div className="skill-group">
            <h2 className="skill-group-title">{title}</h2>
            <div className="skill-group-items">
                {children}
            </div>
        </div>
    );
}

function Skills() {
    const mainframeSkill = [{skill: 'IBM Mainframe', proficiency: 'Expert'}];
    const cobolSkill = [{skill: 'COBOL', proficiency: 'Expert'}];
    const jclSkill = [{skill: 'JCL', proficiency: 'Expert'}];
    const assemblerSkill = [{skill: 'Assembler', proficiency: 'Intermediate'}];
    const vsamSkill = [{skill: 'VSAM', proficiency: 'Intermediate'}];
    const db2Skill = [{skill: 'DB2', proficiency: 'Intermediate'}];
    const imsdbSkill = [{skill: 'IMS DB', proficiency: 'Intermediate'}];
    const sqlSkill = [{skill: 'SQL', proficiency: 'Intermediate'}];

    const pythonSkill = [{skill: 'Python', proficiency: 'Intermediate'}];
    const htmlSkill = [{skill: 'HTML', proficiency: 'Intermediate'}];
    const cssSkil = [{skill: 'CSS', proficiency: 'Intermediate'}];
    const bootstrapSkill = [{skill: 'Bootstrap', proficiency: 'Intermediate'}];
    const reactSkill = [{skill: 'React.js', proficiency: 'Intermediate'}];
    const nodeSkill = [{skill: 'Node.js', proficiency: 'Intermediate'}];
    const expressSkill = [{skill: 'Express.js', proficiency: 'Intermediate'}];
    const mongoSkill = [{skill: 'MongoDB', proficiency: 'Intermediate'}];

    const dockerSkill = [{skill: 'Docker', proficiency: 'Intermediate'}];
    const kubernetesSkill = [{skill: 'Kubernetes', proficiency: 'Intermediate'}];
    const githubSkill = [{skill: 'Git / GitHub', proficiency: 'Intermediate'}];

    const aiSkill = [{skill: 'GitHub Copilot & Generative AI', proficiency: 'Intermediate'}];

    return (
        <div className='skills-page'>
            <Navbar/>
            <div className='skills-page-container'>

                <SkillGroup title="Mainframe">
                    <Section icon={Mainframe} alt="Mainframe" items={mainframeSkill} />
                    <Section icon={COBOL} alt="COBOL" items={cobolSkill} />
                    <Section icon={JCL} alt="JCL" items={jclSkill} />
                    <Section icon={Assembler} alt="Assembler" items={assemblerSkill} />
                    <Section icon={VSAM} alt="VSAM" items={vsamSkill} />
                    <Section icon={DB2} alt="DB2" items={db2Skill} />
                    <Section icon={IMSDB} alt="IMS DB" items={imsdbSkill} />
                    <Section icon={SQL} alt="SQL" items={sqlSkill} />
                </SkillGroup>

                <SkillGroup title="Full Stack Development">
                    <Section icon={Python} alt="Python" items={pythonSkill} />
                    <Section icon={HTML} alt="HTML" items={htmlSkill} />
                    <Section icon={css} alt="CSS" items={cssSkil} />
                    <Section icon={Bootstrap} alt="Bootstrap" items={bootstrapSkill} />
                    <Section icon={ReactJS} alt="React.js" items={reactSkill} />
                    <Section icon={NodeJS} alt="Node.js" items={nodeSkill} />
                    <Section icon={Express} alt="Express.js" items={expressSkill} />
                    <Section icon={MongoDB} alt="MongoDB" items={mongoSkill} />
                </SkillGroup>

                <SkillGroup title="DevOps">
                    <Section icon={Docker} alt="Docker" items={dockerSkill} />
                    <Section icon={Kubernetes} alt="Kubernetes" items={kubernetesSkill} />
                    <Section icon={GitHub} alt="GitHub" items={githubSkill} />
                </SkillGroup>

                <SkillGroup title="AI-Assisted Development">
                    <Section icon={AICopilot} alt="GitHub Copilot and Generative AI" items={aiSkill} />
                </SkillGroup>

            </div>
        </div>
    );
}

export default Skills