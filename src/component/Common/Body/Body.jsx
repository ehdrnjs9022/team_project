import { useState } from "react";
import {
  Container,
  Box,
  Header,
  Welcome,
  LeftBox,
  RightBox,
  Button,
  ModalContainer,
  ModalBox,
  Input,
  ButtonWrapper,
  MoreBox,
} from "./Body.styles";
import { Navigate, useNavigate } from "react-router-dom";

const Body = () => {
  const [activeForm, setActiveForm] = useState("");
  const Navi = useNavigate();

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
            <Button
              onClick={() => {
                setActiveForm("nickName");
              }}
            >
              닉네임수정
            </Button>
            <Button
              onClick={() => {
                setActiveForm("profile");
              }}
            >
              프로필수정
            </Button>
          </LeftBox>
          {activeForm === "nickName" && (
            <ModalContainer>
              <ModalBox>
                <div>
                  <p>변경할 닉네임을 입력해주세요</p>
                  <Input placeholder="변경할 닉네임을 입력해주세요" />
                </div>
                <ButtonWrapper>
                  <Button>확인</Button>
                  <Button>취소</Button>
                </ButtonWrapper>
              </ModalBox>
            </ModalContainer>
          )}

          <RightBox>
            <Button onClick={() => Navi("/MyPage")}>내정보</Button>
            <Button onClick={() => Navi("Point")}>포인트</Button>
          </RightBox>
        </Welcome>
      </Box>

      <LeftBox>예약 현황</LeftBox>

      <Box>
        <div>예약차종</div>
        <div>기간</div>
        <div>위치 </div>
        <div>차량정보</div>
      </Box>

      <LeftBox>사용 내역</LeftBox>

      <Box>
        <Button>더보기</Button>
      </Box>

      <LeftBox>내 활동</LeftBox>
      <Box>
        <Button onClick={handleReply}>작성한 댓글 조회</Button>
        <Button onClick={handleReport}>작성한 문의 게시글 조회</Button>
        <Button onClick={handleReview}> 작성한 리뷰 게시글 조회</Button>
      </Box>
    </Container>
  );
};

export default Body;
