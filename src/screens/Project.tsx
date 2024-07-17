import { useParams } from "react-router-dom";
import projectList from "../data/projectList.json";

function Project() {
  const { projectTitle } = useParams();
  const project = projectList.projects.find(
    (project) => project.title === projectTitle
  );
  return (
    <>
      {project && (
        <>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
          <small>{project.features}</small>
          <div
            style={{
              width: "500px",
              height: "400px",
              backgroundImage: `url(${project.img})`,
              backgroundSize: "cover",
              backgroundPosition: "cover",
            }}
          ></div>
        </>
      )}
    </>
  );
}

export default Project;
