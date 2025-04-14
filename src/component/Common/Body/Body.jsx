import { useState } from "react";
import {
  Container,
  Box,
  Header,
  LeftBox,
  Button,
  ModalContainer,
  ModalBox,
  Input,
  ButtonWrapper,MoreButton

} from "./Body.styles";
import { useNavigate } from "react-router-dom";

const Body = () => {
  const [activeForm, setActiveForm] = useState("profile");
  const [selectedImage, setSelectedImage] = useState(null);
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
  const handleEdit = () => {
    console.log("수정")
  }
  const handleFileChange = (e) =>{
    const file = e.target.files[0]
    if(file) {
      const reader = new FileReader();

      reader.onloadend =() => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }else{
      setSelectedImage("img/test.jpg");
    }
  }


  return (
    <Container>
      <Header>마이페이지</Header>
        <div>

        <p>XXX님 안녕하세요</p>
        <p className="nickname"></p>
           </div>
      <Box>
            <Button
              onClick={() => {
                setActiveForm("nickName");
              }}
            >
              닉네임수정
            </Button>

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


            <Button
              onClick={() => {
                setActiveForm("profile");
              }}
            >
              프로필수정
            </Button>
           {activeForm === "profile" && (
              <ModalContainer>
                <ModalBox>
                <Input type="file" onChange={handleFileChange}/>
                <ButtonWrapper>
                  <Button onClick={handleEdit}>수정하기</Button>
                  <Button onClick={() => {setActiveForm("/")}}>취소</Button>
                </ButtonWrapper>
                </ModalBox>
              </ModalContainer>

           )}

           <div>
            <Button onClick={() => Navi("/MyPage")}>내정보</Button>
            <Button onClick={() => Navi("Point")}>포인트</Button>
          </div>
         
      </Box>
      <div>예약 현황</div>

      <Box>
        <div>예약차종</div>
        <div>기간</div>
        <div>위치 </div>
        <div>차량정보</div>
      </Box>
      <MoreButton>
        <Button>더보기</Button>
        </MoreButton>


      <div>사용 내역</div>

      <Box>
         <div>예약차종</div>
        <div>기간</div>
        <div>위치 </div>
        <div>차량정보</div>
      </Box>
          <MoreButton>
          <Button>더보기</Button>
          </MoreButton>
      <div>내 활동</div>
      <Box>
        <Button onClick={handleReply}>작성한 댓글 조회</Button>
        <Button onClick={handleReport}>작성한 문의 게시글 조회</Button>
        <Button onClick={handleReview}> 작성한 리뷰 게시글 조회</Button>
      </Box>
    </Container>
  );
};

export default Body;
