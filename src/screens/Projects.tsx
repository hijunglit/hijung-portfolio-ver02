import { motion, useScroll, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import projectList from "../data/projectList.json";
import styled from "styled-components";
import ProjectItem from "../components/ProjectItem";

interface IProps {
  id: number;
  title: string;
  img: string;
}

const Article = styled(motion.article)`
  max-width: 1080px;
  flex: 1 1 100%;
  padding: 45px 45px;
`;
const Title = styled(motion.h1)`
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;
  margin: 100px 0;
  white-space: nowrap;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
const ProjectList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;

function Projects({ id, title, img }: IProps) {
  const pageTitle = "Projects";
  return (
    <Article
      initial='hidden'
      animate='visible'
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
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
        {projectList.projects.map((project) => (
          <ProjectItem
            key={project.id}
            id={project.id}
            title={project.title}
            img={project.img}
          />
        ))}
      </ProjectList>
      <footer>
        <Link to={"/"}>Back to home</Link>
      </footer>
    </Article>
  );
}

export default Projects;
