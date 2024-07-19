import { animate, motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
const Nav = styled.ul`
  width: 100%;
  padding-top: 25vw;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  list-style: none;
`;
const NanList = styled(motion.li)`
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
`;

const visible = { opacity: 1, y: 0, transition: { duration: 1 } };

const itemVariants = {
  hidden: { opacity: 0, y: 220 },
  visible: { opacity: 1, y: 200, transition: { duration: 0.5 } },
};

function Home() {
  return (
    <motion.article
      initial='hidden'
      animate='visible'
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
    >
      <Title
        variants={{
          hidden: { opacity: 0, y: -100 },
          visible,
        }}
        style={
          {
            "--base-width": "24vw",
            x: "-50%",
          } as any
        }
      >
        기술로 문제를 해결하는 것에
        <br /> 열정이 있는
        <br />
        MERN stack 개발자 <br />
        정해인 입니다
      </Title>
      <Nav style={{}}>
        <NanList variants={itemVariants}>
          <Link to='/project'>Project</Link>
        </NanList>
        <NanList variants={itemVariants}>
          <Link to='/about'>About</Link>
        </NanList>
      </Nav>
    </motion.article>
  );
}

export default Home;
