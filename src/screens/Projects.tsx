import { motion, useScroll, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import projectList from "../data/projectList.json";
import styled from "styled-components";
import Image from "../components/Image";

interface IProps {
  id: number;
  title: string;
  img: string;
}

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
const visible = { opacity: 1, y: 0, transition: { duration: 1 } };

function Projects({ id, title, img }: IProps) {
  const pageTitle = "Projects";
  return (
    <motion.article
      initial='hidden'
      animate='visible'
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
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
      <ul>
        {projectList.projects.map((project) => (
          <Image
            key={project.id}
            id={project.id}
            title={project.title}
            img={project.img}
          />
        ))}
      </ul>
      <footer>
        <Link to={"/"}>Back to home</Link>
      </footer>
    </motion.article>
  );
}

export default Projects;
