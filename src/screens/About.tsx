import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "../atoms";

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 100px 15px;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
`;
const AboutHeader = styled.div`
  p {
    font-size: 1.2em;
    line-height: 1.6;
  }
`;
const AboutBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  p {
    font-size: 1.2em;
    line-height: 1.6;
  }
`;
const AboutIntro = styled.h1<{ $ismobile: boolean }>`
  font-size: ${(props) => (props.$ismobile && "32px") || "36px"};
  font-weight: 600;
  line-height: 64px;
`;
const PersonalInfo = styled.div<{ $ismobile: boolean }>`
  display: flex;
  justity-content: center;
  margin: 30px 0;
  alignitems: center;
  gap: 50px;
  p {
    font-size: ${(props) => (props.$ismobile ? "0.9em" : "1em")};
  }
`;
const Portrait = styled.div<{ $ismobile: boolean }>`
  width: ${(props) => (props.$ismobile ? "150px" : "300px")};
  height: ${(props) => (props.$ismobile ? "150px" : "300px")};
  background-image: url(https://avatars.githubusercontent.com/u/113867021?v=4);
  background-position: center;
  background-size: cover;
  border-radius: 50%;
`;
const Contact = styled.div``;
const AboutSkills = styled.div``;
const SkillsItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const SkillsCategory = styled.h3`
  font-size: 1.2em;
  font-weight: 500;
`;
const SkillsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const SkillName = styled.h5`
  font-size: 1em;
  font-weight: 500;
`;
const Skill = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Abilities = styled.ul`
  line-height: 1.6em;
  list-style-type: disc;
  padding: 0 22px;
`;
const Education = styled.div`
  margin-top: 30px;
`;

function About() {
  const isDesktop: boolean = useMediaQuery({ minWidth: 800 });
  const isTablet: boolean = useMediaQuery({ minWidth: 600, maxWidth: 800 });
  const isMobile: boolean = useMediaQuery({ maxWidth: 600 });
  return (
    <AnimatePresence>
      <Container
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0 }}
      >
        <AboutHeader>
          <AboutIntro $ismobile={isMobile}>
            안녕하세요. <br />
            저는 신입 프론트엔드, MERN stack 개발자 <br />
            정해인 입니다.
          </AboutIntro>
        </AboutHeader>
        <AboutBody>
          <div style={{ marginTop: "20px" }}>
            <p>기술을 이용해 문제를 해결하는 것에 욕구가 있으며</p>
            <p>
              새로운 것을 좋아하고 언제나 지금보다 더 나아지는 것에 성취감을
              느낍니다.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: "1.2em", lineHeight: 1.6, fontWeight: 600 }}>
              배우는데 그치지 않고 내가 사용하고 싶은 것을 직접 만드는 것을
              중요하게 생각합니다.
            </h3>
            <p>
              MERN stack 으로 제작한
              <mark>
                <a
                  href='https://buddypals.onrender.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: "#ff0066" }}
                >
                  SNS 어플리케이션
                </a>
              </mark>
              을 1인 개발한 경험이 있습니다.
            </p>
          </div>
          <PersonalInfo
            $ismobile={isMobile}
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "30px 0",
              alignItems: "center",
              gap: "50px",
            }}
          >
            <Portrait $ismobile={isMobile} />
            <Contact>
              <p>📧 hijungjob@gmail.com</p>
              <p>📞 010-7916-4222</p>
              <p>
                <a
                  href='https://github.com/hijunglit'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  💻Github
                </a>
              </p>
            </Contact>
          </PersonalInfo>
          <AboutSkills
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "50px",
            }}
          >
            <h3 style={{ fontSize: "1.4em", fontWeight: 600 }}>Skills</h3>
            <SkillsItem>
              <SkillsCategory>Front-end</SkillsCategory>
              <SkillsList>
                <Skill>
                  <SkillName>HTML & CSS</SkillName>
                  <Abilities>
                    <li>시맨틱한 마크업 작업을 합니다.</li>
                    <li>
                      flex, grid 속성의 차이점을 이해하고 grid 속성을 이용한
                      반응형 웹을 제작할 줄 압니다.
                    </li>
                  </Abilities>
                </Skill>
                <Skill>
                  <SkillName>React.js</SkillName>
                  <Abilities>
                    <li>
                      컴포넌트 기반 아키텍처를 사용하여 재사용 가능한 UI 요소를
                      개발할 줄 압니다.
                    </li>
                    <li>
                      react query를 이용하여 코드의 가독성을 높이고 데이터를
                      캐싱할 줄 압니다.
                    </li>
                    <li>
                      Axios를 사용하여 restful API와 통신하며 데이터를 가져오고
                      처리할 수 있습니다.
                    </li>
                    <li>
                      React Router를 이용해 다중 페이지 어플리케이션의 라우팅을
                      구현할 수 있습니다.
                    </li>
                  </Abilities>
                </Skill>
                <Skill>
                  <SkillName>Javascript & Typescript</SkillName>
                  <Abilities>
                    <li>
                      localstorage를 이용한 영구 데이터 관리를 할 수 있습니다.
                    </li>
                    <li>ES6 문법을 이해하고 사용합니다.</li>
                    <li>
                      async await 문법을 이용한 비동기 작업을 할 수 있습니다.
                    </li>
                    <li>
                      컴포넌트 기반의 React 프로젝트에서 TypeScript를 사용하여
                      타입 안전성을 강화할 수 있습니다.
                    </li>
                    <li>
                      API 호출 시 데이터 타입을 명확히 정의하여 런타임 오류를
                      줄입니다.
                    </li>
                    <li>
                      타입 추론과 인터페이스를 활용해 코드의 가독성과
                      유지보수성을 높일 수 있습니다.
                    </li>
                  </Abilities>
                </Skill>
              </SkillsList>
            </SkillsItem>
            <SkillsItem>
              <SkillsCategory>Back-end</SkillsCategory>
              <SkillsList>
                <Skill>
                  <SkillName>Node.js</SkillName>
                  <Abilities>
                    <li>
                      Node.js를 이용하여 javascript를 실행하는 서버를만들 수
                      있습니다.
                    </li>
                    <li>
                      프로젝트에 필요한 다양한 npm 패키지를 사용할 수 있습니다.
                    </li>
                  </Abilities>
                </Skill>
                <Skill>
                  <SkillName>MongoDB</SkillName>
                  <Abilities>
                    <li>
                      Schema를 이용한 데이터의 형태를 만들고 model api 를 활용한
                      CRUD를 구현할 수 있습니다.
                    </li>
                    <li>Schema, Model 을 이해하고 사용할 수 있습니다.</li>
                    <li>
                      MongoDB Atlas를 통해 클라우드 기반 데이터베이스를 설정하고
                      관리할 수 있습니다.
                    </li>
                    <li>populate를 이용한 관계형 DB를 구축할 수 있습니다.</li>
                    <li>
                      Mongoose 라이브러리를 활용하여 Node.js 어플리케이션과
                      MongoDB 간의 데이터 모델링을 구현할 수 있습니다.
                    </li>
                  </Abilities>
                </Skill>
                <Skill>
                  <SkillName>Express.js</SkillName>
                  <Abilities>
                    <li>
                      다양한 함수를 이용하여 더 효율적인 Node.js 어플리케이션
                      환경에서 개발할 수 있습니다.
                    </li>
                    <li>
                      express의 가장 큰 개념인 express, request, response,
                      router 함수를 이해하고 사용합니다.
                    </li>
                  </Abilities>
                </Skill>
              </SkillsList>
            </SkillsItem>
            <SkillsItem>
              <SkillsCategory>Dev ops</SkillsCategory>
              <SkillsList>
                <Skill>
                  <SkillName>AWS</SkillName>
                  <ul>
                    <li>
                      사용자와 s3버켓 생성하고 어플리케이션에서 사용하는 이미지
                      데이터를 관리할 수 있습니다.
                    </li>
                  </ul>
                </Skill>
              </SkillsList>
            </SkillsItem>
          </AboutSkills>
          <Education>
            <h3
              style={{
                fontSize: "1.4em",
                fontWeight: 600,
                paddingBottom: "12px",
              }}
            >
              Education
            </h3>
            <div>
              <div style={{ paddingBottom: "8px" }}>
                <strong style={{ fontWeight: 500, paddingRight: "6px" }}>
                  더조은 아카데미
                </strong>
                <span>(2020.04~2020.11)</span>
              </div>
              <span>-프론트엔드 엔지니어링 과정 수료</span>
            </div>
          </Education>
        </AboutBody>
      </Container>
    </AnimatePresence>
  );
}

export default About;
