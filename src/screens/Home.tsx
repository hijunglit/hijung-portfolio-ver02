import { animate, motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

const variants = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 10 },
};

const Intro = styled(motion.div)``;
const Text = styled(motion.h1)``;

function Home() {
  return (
    <motion.article>
      <Intro
        variants={variants}
        initial={"initial"}
        animate={"animate"}
        transition={{ duration: 1 }}
      >
        <Text>안녕하세요</Text>
        <Text>기술로 문제를 해결하는 것에 열정이 있는</Text>
        <Text>프론트엔드 개발자 정해인 입니다.</Text>
      </Intro>
      <ul>
        <motion.li>
          <Link to={"/project"}>Project</Link>
        </motion.li>
        <motion.li>
          <Link to={"/about"}>About</Link>
        </motion.li>
      </ul>
    </motion.article>
  );
}

export default Home;
