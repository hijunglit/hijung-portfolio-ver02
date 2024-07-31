import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "../atoms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Title = styled.h1``;
const AppHeader = styled.header``;
function Header() {
  const [isDark, setIsDark] = useRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setIsDark((prev) => !prev);
  return (
    <AppHeader>
      <div
        style={{
          position: "absolute",
          top: 20,
          right: 20,
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
