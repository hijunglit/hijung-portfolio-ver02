import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValue,
} from "framer-motion";
import { Link, useMatch, useNavigate } from "react-router-dom";
import projectList from "../data/projectList.json";
import styled from "styled-components";
import { BOTTOM_SHEET_HEIGHT } from "../config/constants";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { isSelectedAtom } from "../atoms";

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
const Handle = styled.div`
  width: 32px;
  height: 4px;
  border-radius: 2px;
  background-color: #d0d0d0;
  margin: auto;
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
  padding: 20px;
  color: #fff;
  font-size: 20px;
  line-height: 1.4em;
  height: auto;
  background-color: ${(props) => props.theme.cardBgColor};
  border-radius: 0 0 15px 15px;
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
  const bigProjectMatch = useMatch("/project/:projectId");
  const { scrollY } = useScroll();
  const onBoxClicked = (projectId: number) => {
    setIsSelected(true);
    history(`/project/${projectId}`);
  };
  const onOverlayClick = () => {
    setIsSelected(false);
    history("/project");
  };
  const clickedProject =
    bigProjectMatch?.params.projectId &&
    projectList.projects.find(
      (project) =>
        String(project.id) === String(bigProjectMatch.params.projectId)
    );
  const [isSelected, setIsSelected] = useRecoilState(isSelectedAtom);
  const animateState = isSelected ? "opened" : "closed";
  console.log(isSelected);
  return (
    <Container>
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
                  }}
                >
                  <Title>{project.title}</Title>
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
              $ismobile={isMobile}
              $istablet={isTablet}
              $isDesktop={isDesktop}
              style={{ top: scrollY.get() + 100 }}
              animate={animateState}
              layoutId={bigProjectMatch.params.projectId}
              drag={isSelected ? "y" : false}
              onDragEnd={(event, info) => {
                console.log("info.offset.y", info.offset.y);
                console.log("info.point.y", info.point.y);
                console.log("info.delta.y", info.delta.y);
                const offsetThreshold = 150;
                const deltaThreshold = 5;
                const isOverOffsetThreshold =
                  Math.abs(info.offset.y) > offsetThreshold;
                const isOverDeltaThreshold = Math.abs(info.delta.y);
                const isOverThreshold =
                  isOverOffsetThreshold || isOverDeltaThreshold;
                if (!isOverThreshold) return;
                const newIsSelected = info.offset.y < 0;
                setIsSelected(newIsSelected);
                isSelected && onOverlayClick();
              }}
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic
            >
              {clickedProject && (
                <>
                  <BigTitle>{clickedProject.title}</BigTitle>
                  <BigCover
                    style={{ backgroundImage: `url(${clickedProject.img})` }}
                  />
                  <BigOverview>{clickedProject.description}</BigOverview>
                </>
              )}
            </BigProject>
          </BottomSheet>
        ) : null}
        <footer>
          <Link to={"/"}>Back to home</Link>
        </footer>
      </Article>
    </Container>
  );
}

export default Projects;
