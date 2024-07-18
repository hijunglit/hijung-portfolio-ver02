import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import projectList from "../data/projectList.json";
function Projects() {
  return (
    <motion.article
      initial='hidden'
      animate='visible'
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <motion.h1
        style={{ x: "-50%" }}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        Projects
      </motion.h1>
      <ul>
        {projectList.projects.map((project) => (
          <li key={project.id}>
            <p>{project.title}</p>
            <div
              style={{
                width: "500px",
                height: "400px",
                backgroundImage: `url(${project.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <Link to={`${project.title}`}>more...</Link>
          </li>
        ))}
      </ul>
      <footer>
        <Link to={"/"}>Back to home</Link>
      </footer>
    </motion.article>
  );
}

export default Projects;
