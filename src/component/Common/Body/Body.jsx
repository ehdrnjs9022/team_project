import { useState } from "react";
import {
  Container,
  Box,
  Header,
  Button,
  ModalContainer,
  ModalBox,
  Input,
  ButtonWrapper,
  MoreButton,
  FirstBox,
  SecondBox,
  ThirdBox,
  ProfileTextBox,
  Section,
} from "./Body.styles";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Body = () => {
  const [activeForm, setActiveForm] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [nickName, setNickName] = useState("");
  const [tempNick, setTempNick] = useState("");
  const navi = useNavigate();

  useEffect(() => {
    if (selectedImage) {
      localStorage.setItem("profileImage", selectedImage);
    }
    if (nickName) {
      localStorage.setItem("nickName", nickName);
    }
  }, [nickName, selectedImage]);

  const handleReply = () => {
    console.log("댓글 수정 클릭됨");
  };
  const handleReport = () => {
    console.log("문의게시판 수정 클릭됨");
  };
  const handleReview = () => {
    console.log("리뷰게시판 수정 클릭됨");
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedImage("img/test.jpg");
    }
  };

  const submitProfile = (e) => {
    e.preventDefault();
    console.log(selectedImage);
    setActiveForm(null);
  };

  const handelNameEdit = (e) => {
    const inputValue = e.target.value;
    setTempNick(inputValue);
  };
  const submitNickname = (e) => {
    e.preventDefault();

    const regex = /^[\uAC00-\uD7A3a-zA-Z0-9]{2,10}$/;
    if (!regex.test(tempNick)) {
      alert(" 2 ~ 10자, 한글과 영어 알파벳, 숫자로 이루어져야 합니다");
      return;
    }
    setNickName(tempNick);
    setActiveForm(null);
  };
  return (
    <Container>
      <Header>마이페이지</Header>
      <div>
        <p>XXX님 안녕하세요</p>
      </div>

      <Box>
        <FirstBox>
          <img
            src={selectedImage}
            style={{ width: "250px", height: "250px", borderRadius: "10px" }}
          />
          <ProfileTextBox>
            <div>닉네임 : {nickName}</div>
            <Button
              onClick={() => {
                setActiveForm("nickName");
              }}
            >
              닉네임 수정
            </Button>
            <Button
              onClick={() => {
                setActiveForm("profile");
              }}
            >
              프로필수정
            </Button>
          </ProfileTextBox>
        </FirstBox>

        <SecondBox>
          <p>xxx님등급은 브론즈입니다</p>
        </SecondBox>

        {activeForm === "nickName" && (
          <ModalContainer>
            <ModalBox>
              <form onSubmit={submitNickname}>
                <p>변경할 닉네임을 입력해주세요</p>
                <Input
                  onChange={handelNameEdit}
                  placeholder="변경할 닉네임을 입력해주세요"
                  value={tempNick}
                />

                <ButtonWrapper>
                  <Button type="submit">확인</Button>
                  <Button onClick={() => setActiveForm(null)}>취소</Button>
                </ButtonWrapper>
              </form>
            </ModalBox>
          </ModalContainer>
        )}

        {activeForm === "profile" && (
          <ModalContainer>
            <ModalBox>
              <form onSubmit={submitProfile}>
                <div>첨부파일</div>
                <Input type="file" onChange={handleFileChange} />
                {selectedImage && (
                  <div>
                    <img src={selectedImage} alt="나오나" />
                  </div>
                )}
                <ButtonWrapper>
                  <Button type="submit">수정하기</Button>
                  <Button onClick={() => setActiveForm(null)}>취소</Button>
                </ButtonWrapper>
              </form>
            </ModalBox>
          </ModalContainer>
        )}

        <ThirdBox>
          <Button onClick={() => navi("/MyPage")}>내정보</Button>
        </ThirdBox>
        <ThirdBox>
          <Button onClick={() => navi("Point")}>포인트</Button>
        </ThirdBox>
      </Box>
      <div>예약 현황</div>

      <Section>
        <div>예약차종</div>
        <div>기간</div>
        <div>위치 </div>
        <div>차량정보</div>
      </Section>
      <MoreButton>
        <Button>더보기</Button>
      </MoreButton>

      <div>사용 내역</div>

      <Section>
        <div>사용차종</div>
        <div>기간</div>
        <div>위치 </div>
        <div>차량정보</div>
      </Section>
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
