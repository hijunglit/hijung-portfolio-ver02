import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface IProps {
  id: number;
  title: string;
  img: string;
}

const Item = styled(motion.li)<{ $ismobile: boolean; $isTablet: boolean }>`
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
const Title = styled.h1`
  padding: 12px;
  font-size: 1.6rem;
  font-weight: 600;
`;
const ImageBox = styled.div``;

const itemVariants = {
  hidden: { opacity: 0, y: 220 },
  visible: { opacity: 1, y: 200, transition: { duration: 0.5 } },
};
function ProjectItem({ id, title, img }: IProps) {
  const isTablet: boolean = useMediaQuery({ minWidth: 600, maxWidth: 800 });
  const isMobile: boolean = useMediaQuery({ maxWidth: 600 });
  return (
    <Item
      key={id}
      variants={itemVariants}
      $ismobile={isMobile}
      $isTablet={isTablet}
    >
      <ImageBox
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#000",
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "16px",
        }}
      >
        <Title>{title}</Title>
      </ImageBox>
    </Item>
  );
}

export default ProjectItem;
