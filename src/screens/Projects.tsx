import { Link } from "react-router-dom";
import projectList from "../data/projectList.json";
function Projects() {
  return (
    <>
      <h1>Projects!</h1>
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
    </>
  );
}

export default Projects;
