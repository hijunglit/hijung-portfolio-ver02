import { Link } from "react-router-dom";

interface IProps {
  id: number;
  title: string;
  img: string;
}

function Image({ id, title, img }: IProps) {
  return (
    <li key={id}>
      <p>{title}</p>
      <div
        style={{
          width: "500px",
          height: "400px",
          backgroundColor: "#000",
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <Link to={`${title}`}>more...</Link>
    </li>
  );
}

export default Image;
