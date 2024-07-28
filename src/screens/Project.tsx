import { useParams } from "react-router-dom";
import projectList from "../data/projectList.json";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const Container = styled.div`
  padding: 55px 15px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;
  max-width: 990px;
  margin: 0 auto;
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
  align-items: center;
`;
const Title = styled.h1`
  font-size: 1.6em;
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
const Features = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
const Feature = styled.li<{
  $istablet: boolean;
  $isDesktop: boolean;
  $ismobile: boolean;
}>`
  display: flex;
  flex-direction: ${(props) =>
    props.$ismobile || props.$istablet ? "column" : "row-reverse"};
  gap: 50px;
`;
const FeatureTitle = styled.h3`
  font-size: 1.4em;
  font-weight: 600;
  text-align: center;
`;
const FeatureDescription = styled.p`
  text-align: left;
  flex: 1 1 100%;
`;
const Img = styled.img`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;
const Skills = styled.div``;
const SkillList = styled.ul``;
const Skill = styled.li``;
const SkillName = styled.p``;
const SKillWhy = styled.p``;
const TroubleShootings = styled.div``;

function Project() {
  const isDesktop: boolean = useMediaQuery({ minWidth: 800 });
  const isTablet: boolean = useMediaQuery({ minWidth: 600, maxWidth: 800 });
  const isMobile: boolean = useMediaQuery({ maxWidth: 600 });
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
                  maxWidth: "1080px",
                  width: "100%",
                  height: "300px",
                  backgroundImage: `url(${project.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "cover",
                }}
              ></div>
            </ProjectItem>
          </ProjectHeader>
          <ProjectItem>
            <Title>구현한 기능</Title>
            <Features>
              {project.detail.imgMaterial.map((item, index) => (
                <Feature
                  key={index}
                  $ismobile={isMobile}
                  $istablet={isTablet}
                  $isDesktop={isDesktop}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                    }}
                  >
                    <FeatureTitle>{item.title}</FeatureTitle>
                    <FeatureDescription>{item.desc}</FeatureDescription>
                  </div>
                  <Img src={item.src} alt='img' />
                </Feature>
              ))}
            </Features>
          </ProjectItem>
          <ProjectItem>
            <Title>Skills</Title>
            <Skills>
              <SkillList>
                {project.detail.skills.map((skill, index) => (
                  <Skill
                    key={skill.name + index + ""}
                    style={{
                      display: "flex",
                      gap: "8px",
                    }}
                  >
                    <SkillName>{skill.name}</SkillName>
                    <span>:</span>
                    <SKillWhy>{skill.why}</SKillWhy>
                  </Skill>
                ))}
              </SkillList>
            </Skills>
          </ProjectItem>
          <ProjectItem>
            <Title>Trouble shootings</Title>
            <TroubleShootings>
              <ul>
                {project.detail.troubleShooting.map((item, index) => (
                  <li>
                    <div>
                      <h3>문제 배경</h3>
                      <p>{item.background}</p>
                    </div>
                    <div>
                      <h3>해결 방법</h3>
                      <p>{item.solution}</p>
                    </div>
                    <div>
                      <h3>이전 코드와 비교</h3>
                      <p>{item.beforeAfter}</p>
                    </div>
                    <div>
                      <h3>문제를 통해 알게된 점</h3>
                      <p>{item.learn}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </TroubleShootings>
          </ProjectItem>
        </>
      )}
    </Container>
  );
}

export default Project;
