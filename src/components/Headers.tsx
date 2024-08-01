import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "../atoms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

const AppHeader = styled(motion.header)`
  position: fixed;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  z-index: 1;
`;
const LogoBox = styled.div`
  width: 120px;
  height: 60px;
  background-image: url("https://raw.githubusercontent.com/hijunglit/imgsrc/master/portfolio-ver02/logo.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
function Header() {
  const [isDark, setIsDark] = useRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setIsDark((prev) => !prev);
  const { scrollY } = useScroll();
  const headerAnim = useAnimation();
  const headerVariants = {
    top: {
      backgroundColor: "rgba(0,0,0,0)",
    },
    scroll: {
      backgroundColor: "rgba(255,255,255,0.8)",
    },
  };
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 60) {
      headerAnim.start("scroll");
    } else {
      headerAnim.start("top");
    }
  });
  return (
    <AppHeader variants={headerVariants} animate={headerAnim} initial={"top"}>
      <Link to={"/"}>
        <LogoBox />
      </Link>
      <div
        style={{
          cursor: "pointer",
        }}
      >
        <FontAwesomeIcon
          icon={isDark ? faSun : faMoon}
          size='2x'
          beat
          onClick={toggleDarkAtom}
        />
      </div>
    </AppHeader>
  );
}
export default Header;
