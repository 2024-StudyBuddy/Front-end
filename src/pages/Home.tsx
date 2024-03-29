import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import Avatar from "../assets/avatar_woman.png";
import Btn_Enter from "../assets/btn_entrance.png";
import Btn_Create from "../assets/btn_create.png";
import Flag from "../assets/flag.png";
import ProgressBar from "components/home/ProgressBar";

const Home: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);

  // 임의의 시간 간격으로 progress 값 증가
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress((prevProgress) => prevProgress + 1);
      } else {
        clearInterval(interval);
      }
    }, 1000); // 1초마다 증가
    return () => clearInterval(interval);
  }, [progress]);  

  return (
    <Wrapper>
      {/* 페이지 설명 */}
      <Container>
        <RSection>
          <Title>HOME</Title>
          <Phrase>운을 믿지 말고 요행을 기대 말고 나의 철저한 준비와 노력만을 믿어라</Phrase>          
        </RSection>
        <Profile src={Avatar} alt="Profile" />
      </Container>

      {/* 스터디룸 입장 및 생성 */}
      <Study>
        <SDiv>
          <STitle>스터디룸 입장</STitle>
          <SText>미리 설정한 스터디룸에서 공부를 시작하세요.</SText>
          <StyleLink to="/room"><img src={Btn_Enter} alt="Enter the StudyRoom" /></StyleLink>
        </SDiv>
        <SDiv>
          <STitle>스터디룸 생성</STitle>
          <SText>새로운 스터디룸을 만들어보세요.</SText>
          <StyleLink to="/room/:roomId"><img src={Btn_Create} alt="Create a new StudyRoom" /></StyleLink>
        </SDiv>
      </Study>

      {/* 오늘의 총 공부 시간 */}
      <Time>
        <TTile>
          <img src={Flag} alt="today's study time" />
          <span>오늘의 총 공부 시간</span>
        </TTile>
        <TotalStudyTime>03:30:01</TotalStudyTime>
        <Percent>
          <ProgressBar progress={progress} /> 
          <GoalStudyTime>06:00:00</GoalStudyTime>
        </Percent>
      </Time>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100vw - 100px);
  padding: 35px 43px;
  box-sizing: border-box;
  height: 21vh;
`;

const RSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: 500;
  margin: 10px 0;
`;

const Phrase = styled.div`
  font-size: 20px;
  font-weight: 400;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;

const Profile = styled.img`
  width: 60px;
  height: 60px;
`;

const Study = styled.div`
  display: flex;
  height: 41vh;
  background-color: #F5F5F5;
  padding: 22px 14.5vw 22px 43px;
  box-sizing: border-box;
  justify-content: space-between;
`;

const SDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const STitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #000000;
`;

const SText = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: #586FC5;
`;

const StyleLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 10px;
`;

const Time = styled.div`
  height: 38vh;
  padding: 50px 43px 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
`;

const TTile = styled.div`
  display: flex;
  gap: 15px;
  font-size: 24px;
  font-weight: 600;
  align-items: center;
`;

const TotalStudyTime = styled.div`
  display: flex;
  font-size: 48px;
  font-weight: 500;
  justify-content: center;
  margin-bottom: 10px;
`;

const Percent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const GoalStudyTime = styled.div`
  font-size: 36px;
  font-weight: 400;
  color: #CDCDCD;
`;

export default Home;