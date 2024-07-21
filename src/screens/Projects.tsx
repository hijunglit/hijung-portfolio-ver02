import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Link, useMatch, useNavigate } from "react-router-dom";
import projectList from "../data/projectList.json";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

interface IProps {
  id: number;
  title: string;
  img: string;
}

const Container = styled.div``;
const Article = styled(motion.article)`
  max-width: 1080px;
  flex: 1 1 100%;
  padding: 45px 45px;
  margin: 0 auto;
`;
const Title = styled(motion.h1)`
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;
  white-space: nowrap;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;
const ProjectList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  z-index: 9;
`;
const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;
const BigProject = styled(motion.div)`
  position: absolute;
  z-index: 9;
  width: 40vw;
  height: 80vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 15px !important;
  overflow: hidden;
  background-color: #000;
`;
const BigCover = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center center;
  height: 400px;
`;
const BigTitle = styled.h3`
  color: #fff;
  padding: 20px;
  font-size: 46px;
  positon: relative;
  top: -80px;
`;
const BigOverview = styled.p`
  padding: 20px;
  position: relative;
  top: -80px;
  color: #fff;
`;
const ProjectItem = styled.li<{ $ismobile: boolean; $isTablet: boolean }>`
  position: relative;
  padding: 25px;
  padding-left: ${(props) => props.$ismobile && "0"};
  padding-right: ${(props) => props.$ismobile && "0"};
  height: 460px;
  flex: ${(props) =>
    (props.$isTablet && "0 0 50%") ||
    (props.$ismobile && "1 0 100%") ||
    "0 0 40%"};
  max-width: ${(props) =>
    (props.$isTablet && "50%") || (props.$ismobile && "100%") || "40%"};
  /************ (1, 5, 8, 13), (4, 8, 12, 16 ) *************/
  &:nth-child(4n + 1),
  &:nth-child(4n + 4) {
    flex: ${(props) =>
      (props.$isTablet && "0 0 50%") ||
      (props.$ismobile && "1 0 100%") ||
      "0 0 60%"};
    max-width: ${(props) =>
      (props.$isTablet && "50%") || (props.$ismobile && "100%") || "60%"};
  }
  &:nth-child(odd) {
    padding-left: 0;
  }
  &:nth-child(even) {
    padding-right: 0;
  }
`;
const ImageBox = styled(motion.div)`
  cursor: pointer;
`;

function Projects() {
  const isTablet: boolean = useMediaQuery({ minWidth: 600, maxWidth: 800 });
  const isMobile: boolean = useMediaQuery({ maxWidth: 600 });
  const history = useNavigate();
  const bigProjectMatch = useMatch("/project/:projectId");
  const { scrollY } = useScroll();
  const onBoxClicked = (projectId: number) => {
    history(`/project/${projectId}`);
  };
  const onOverlayClick = () => history("/project");
  const clickedProject =
    bigProjectMatch?.params.projectId &&
    projectList.projects.find(
      (project) =>
        String(project.id) === String(bigProjectMatch.params.projectId)
    );
  const pageTitle = "Projects";
  return (
    <Container>
      <Article
      // initial='hidden'
      // animate='visible'
      // exit={{ opacity: 0, transition: { duration: 1 } }}
      // variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      >
        <Title
          style={{ x: "-50%" } as any}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          {pageTitle}
        </Title>
        <ProjectList>
          <AnimatePresence>
            {projectList.projects.map((project) => (
              <ProjectItem
                key={project.id}
                $ismobile={isMobile}
                $isTablet={isTablet}
              >
                <ImageBox
                  layoutId={project.id + ""}
                  onClick={() => onBoxClicked(project.id)}
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#000",
                    backgroundImage: `url(${project.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    borderRadius: "16px",
                  }}
                >
                  <Title>{project.title}</Title>
                </ImageBox>
              </ProjectItem>
            ))}
          </AnimatePresence>
        </ProjectList>
        {bigProjectMatch ? (
          <>
            <Overlay
              onClick={onOverlayClick}
              exit={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            />
            <BigProject
              style={{ top: scrollY.get() + 100 }}
              layoutId={bigProjectMatch.params.projectId}
            >
              {clickedProject && (
                <>
                  <BigCover
                    style={{ backgroundImage: `url(${clickedProject.img})` }}
                  />
                  <BigTitle>{clickedProject.title}</BigTitle>
                </>
              )}
            </BigProject>
          </>
        ) : null}
        <footer>
          <Link to={"/"}>Back to home</Link>
        </footer>
      </Article>
    </Container>
  );
}

export default Projects;
