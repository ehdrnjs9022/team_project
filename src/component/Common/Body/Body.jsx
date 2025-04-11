import { useState } from "react";
import {
  Container,
  Box,
  Header,
  Welcome,
  LeftBox,
  RightBox,
  Button,
  Span,
} from "./Body.styles";

const Body = () => {
  const [nickName, setNickName] = useState("");
  const [profile, setProfile] = useState("");
  const [point, setPoint] = useState("");
  const [reply, setReply] = useState("");

  const handleNickName = () => {
    console.log("닉네임 수정 클릭됨");
  };
  const handleProfile = () => {
    console.log("프로필 수정 클릭됨");
  };
  const handleReply = () => {
    console.log("댓글 수정 클릭됨");
  };
  const handleReport = () => {
    console.log("문의게시판 수정 클릭됨");
  };
  const handleReview = () => {
    console.log("리뷰게시판 수정 클릭됨");
  };

  return (
    <Container>
      <Header>마이페이지</Header>

      <LeftBox>
        <p>XXX님 안녕하세요</p>
        <p className="nickname"></p>
      </LeftBox>

      <Box>
        <Welcome>
          <LeftBox>
            <Button onClick={handleNickName}>닉네임수정</Button>

            <Button onClick={handleProfile}>프로필수정</Button>
          </LeftBox>

          <RightBox></RightBox>
          <button>포인트</button>
        </Welcome>
      </Box>

      <Box>
        <Button>더보기</Button>
      </Box>

      <Box>
        <Button>더보기</Button>
      </Box>

      <Box>
        <Button onClick={handleReply}>작성한 댓글 조회</Button>
        <Button onClick={handleReport}>작성한 문의 게시글 조회</Button>
        <Button onClick={handleReview}> 작성한 리뷰 게시글 조회</Button>
      </Box>
    </Container>
  );
};

export default Body;
