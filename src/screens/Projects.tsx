import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Link, useMatch, useNavigate } from "react-router-dom";
import projectList from "../data/projectList.json";
import styled from "styled-components";
import { BOTTOM_SHEET_HEIGHT } from "../config/constants";
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";
import { useRecoilState } from "recoil";
import { isSelectedAtom } from "../atoms";
import { useScrollConstraints } from "../utils/use-scroll-constraints";

const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
`;
const Article = styled(motion.article)`
  max-width: 1080px;
  flex: 1 1 100%;
  padding: 100px 15px;
  margin: 0 auto;
`;
const PageTitle = styled(motion.h1)`
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.2;
  white-space: nowrap;
  position: relative;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 12px;
`;
const Title = styled(motion.h1)`
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.2;
  text-align: left;
  white-space: nowrap;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 12px;
`;
const ProjectList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;
const BottomSheet = styled.div``;
const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  z-index: 9;
`;
const BigProject = styled(motion.div)<{
  $ismobile: boolean;
  $istablet: boolean;
  $isDesktop: boolean;
}>`
  position: absolute;
  max-width: 800px;
  width: 100%;
  height: ${(props) =>
    (props.$ismobile && `${BOTTOM_SHEET_HEIGHT}px`) ||
    ((props.$istablet || props.$isDesktop) && "80vh")};
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 15px !important;
  background-color: ${(props) => props.theme.cardBgColor};
  z-index: 99;
`;
const BigCover = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center center;
  height: 400px;
  border-radius: 15px 15px 0 0;
`;
const BigTitle = styled.h3`
  color: #fff;
  padding: 20px;
  font-size: 46px;
  float: left;
  font-size: 2em;
  font-weight: 700;
`;
const BigOverview = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 3em;
  padding: 20px;
  color: #fff;
  font-size: 16px;
  line-height: 20px;
  height: auto;
  background-color: ${(props) => props.theme.cardBgColor};
  border-radius: 0 0 15px 15px;
  &:a {
    text-decoration: none;
  }
`;
const BigOverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4em;
`;
const BigOverviewTitle = styled.h3`
  font-size: 1.4em;
  font-weight: 600;
`;
const BigOverviewCategoryItem = styled.span`
  background: #fff;
  color: #000;
  padding: 4px 6px;
  border-radius: 8px;
`;
const ProjectLink = styled.a`
  text-decoration: none;
  padding: 8px 12px;
  border: 2px solid #fff;
  border-radius: 16px;
  &:first-child {
    margin-right: 12px;
  }
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
  const pageTitle = "Projects";
  const isDesktop: boolean = useMediaQuery({ minWidth: 800 });
  const isTablet: boolean = useMediaQuery({ minWidth: 600, maxWidth: 800 });
  const isMobile: boolean = useMediaQuery({ maxWidth: 600 });
  const history = useNavigate();
  const bigProjectMatch = useMatch(
    process.env.PUBLIC_URL + "/projects/:projectId"
  );
  const { scrollY } = useScroll();
  const onBoxClicked = (projectId: number) => {
    setIsSelected(true);
    history(process.env.PUBLIC_URL + `/projects/${projectId}`);
  };
  const onOverlayClick = () => {
    setIsSelected(false);
    history(process.env.PUBLIC_URL + "/projects");
  };
  const clickedProject =
    bigProjectMatch?.params.projectId &&
    projectList.projects.find(
      (project) =>
        String(project.id) === String(bigProjectMatch.params.projectId)
    );
  const [isSelected, setIsSelected] = useRecoilState(isSelectedAtom);
  const cardRef = useRef(null);
  const animateState = isSelected ? "opened" : "closed";
  return (
    <AnimatePresence>
      <Container
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0 }}
      >
        <Article
        // initial='hidden'
        // animate='visible'
        // exit={{ opacity: 0, transition: { duration: 1 } }}
        // variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        >
          <PageTitle
            style={{ x: "-50%" } as any}
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            {pageTitle}
          </PageTitle>
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
                      backgroundColor: project.mainColor,
                      backgroundImage: `url(${project.img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      backgroundRepeat: "no-repeat",
                      borderRadius: "16px",
                      boxShadow: "1px 1px 1px 1px rgba(0,0,0,0.2)",
                    }}
                  >
                    <Title>{project.name}</Title>
                  </ImageBox>
                </ProjectItem>
              ))}
            </AnimatePresence>
          </ProjectList>
          {bigProjectMatch ? (
            <BottomSheet>
              <Overlay
                onClick={onOverlayClick}
                exit={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
              <BigProject
                ref={cardRef}
                $ismobile={isMobile}
                $istablet={isTablet}
                $isDesktop={isDesktop}
                style={{ top: scrollY.get() + 50 }}
                animate={animateState}
                layoutId={bigProjectMatch.params.projectId}
                drag={isSelected ? "y" : false}
                onDrag={(event, info) => {
                  const offsetThreshold = 400;
                  const isOverOffsetThreshold =
                    Math.abs(info.offset.y) > offsetThreshold;
                  if (!isOverOffsetThreshold) return;
                  const newIsSelected = info.offset.y < 0;
                  setIsSelected(newIsSelected);
                  isSelected && onOverlayClick();
                }}
                dragElastic
              >
                {clickedProject && (
                  <>
                    <BigTitle>{clickedProject.title}</BigTitle>
                    <BigCover
                      style={{ backgroundImage: `url(${clickedProject.img})` }}
                    />
                    <BigOverview>
                      <BigOverviewItem>
                        <BigOverviewTitle>기술 스택</BigOverviewTitle>
                        <p
                          style={{
                            display: "flex",
                            justifyContent: "start",
                            flexWrap: "wrap",
                            gap: "5px",
                          }}
                        >
                          {clickedProject.detail.skills.map((skill, index) => (
                            <BigOverviewCategoryItem
                              key={skill.name + index + ""}
                            >
                              {skill.name}
                            </BigOverviewCategoryItem>
                          ))}
                        </p>
                      </BigOverviewItem>
                      <BigOverviewItem>
                        <BigOverviewTitle>요약</BigOverviewTitle>
                        <p>{clickedProject.overview.summary}</p>
                      </BigOverviewItem>
                      <BigOverviewItem>
                        <BigOverviewTitle>주요 기능</BigOverviewTitle>
                        <p
                          style={{
                            display: "flex",
                            justifyContent: "start",
                            flexWrap: "wrap",
                            gap: "5px",
                          }}
                        >
                          {clickedProject.mainFeatures.map((feature, index) => (
                            <BigOverviewCategoryItem key={feature + index + ""}>
                              {feature}
                            </BigOverviewCategoryItem>
                          ))}
                        </p>
                      </BigOverviewItem>
                      <BigOverviewItem>
                        <BigOverviewTitle>링크</BigOverviewTitle>
                        <div>
                          <ProjectLink
                            href={clickedProject.link.github}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            Github&rarr;
                          </ProjectLink>
                          <ProjectLink
                            href={clickedProject.link.project}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            Web&rarr;
                          </ProjectLink>
                        </div>
                      </BigOverviewItem>
                      <Link
                        to={
                          process.env.PUBLIC_URL +
                          `/project/${clickedProject.title}`
                        }
                      >
                        자세히...
                      </Link>
                    </BigOverview>
                  </>
                )}
              </BigProject>
            </BottomSheet>
          ) : null}
          <footer>
            <Link to={process.env.PUBLIC_URL + "/"}>Back to home</Link>
          </footer>
        </Article>
      </Container>
    </AnimatePresence>
  );
}

export default Projects;
