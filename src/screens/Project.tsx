import { useParams } from "react-router-dom";
import projectList from "../data/projectList.json";
import styled from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";

const Container = styled.div`
  padding: 55px 15px;
`;
const ProjectItem = styled.div``;
const Title = styled.h1``;
const ProjectLinks = styled.div``;
const Summary = styled.p``;

function Project() {
  const { projectTitle } = useParams();
  const project = projectList.projects.find(
    (project) => project.title === projectTitle
  );
  return (
    <Container>
      {project && (
        <>
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
          <ProjectItem>
            <Title>구현한 기능</Title>
            <ul>
              {project.detail.contributions.map((contribution, index) => (
                <li key={"contributions" + index + ""}>
                  <p>{contribution}</p>
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
