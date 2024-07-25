import { useParams } from "react-router-dom";
import projectList from "../data/projectList.json";
import styled from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";

const Container = styled.div`
  padding: 55px 15px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
const ProjectHeader = styled.div`
  div {
    text-align: center;
  }
`;
const ProjectItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Title = styled.h1`
  font-size: 1.4em;
  font-weight: 600;
`;
const ProjectLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;
const Summary = styled.p`
  line-height: 20px;
`;

function Project() {
  const { projectTitle } = useParams();
  const project = projectList.projects.find(
    (project) => project.title === projectTitle
  );
  return (
    <Container>
      {project && (
        <>
          <ProjectHeader>
            <ProjectItem>
              <Title>{project.name}</Title>
              <ProjectLinks>
                <a
                  href={project.link.github}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github&rarr;
                </a>
                <a
                  href={project.link.project}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Web&rarr;
                </a>
              </ProjectLinks>
              <Summary>{project.overview.summary}</Summary>
              <div
                style={{
                  maxWidth: "990px",
                  width: "100%",
                  height: "250px",
                  backgroundImage: `url(${project.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "cover",
                }}
              ></div>
            </ProjectItem>
          </ProjectHeader>
          <ProjectItem>
            <Title>구현한 기능</Title>
            <ul>
              {project.detail.imgMaterial.map((item, index) => (
                <li key={index}>
                  <img src={item.src} alt='img' />
                  <p>{item.desc}</p>
                </li>
              ))}
            </ul>
          </ProjectItem>
        </>
      )}
    </Container>
  );
}

export default Project;
