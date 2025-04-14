import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Header,
  ModalBox,
  ModalContainer,
  ModalDeleteBox,
} from "./MainMypage.style";
import { LeftBox, RightBox, Text, Input } from "./MainMypage.style";

const MainMyPage = () => {
  const [activeForm, setActiveForm] = useState(null);

  return (
    <>
      <Container>
        <Header>내정보 수정</Header>
        <Box>
          <LeftBox>내정보</LeftBox>
          <RightBox>
            <div>
              <Text>이름</Text>
              <Text>아이디</Text>
              <Text>연락처</Text>
              <Text>이메일</Text>
              <div>
                <Button onClick={() => setActiveForm("info")}>
                  내정보 변경하기
                </Button>
              </div>
            </div>
          </RightBox>
        </Box>
        {activeForm === "info" && (
          <ModalContainer>
            <ModalBox>
              <form>
                <div>
                  <Input placeholder="변경 할 이름 입력" />
                  <Input placeholder="변경 할 이메일 입력" />
                  <Input placeholder="비밀번호 확인" />
                </div>
                <div>
                  <Button type="submit">변경</Button>
                  <Button type="submit">취소</Button>
                </div>
              </form>
            </ModalBox>
          </ModalContainer>
        )}

        <hr></hr>

        <Box>
          <LeftBox>비밀번호</LeftBox>
          <RightBox>
            <div>
              <p>문서 보안을 위해 비밀번호를 주기적으로 변경해주세요</p>
            </div>
            <div>
              <Button onClick={() => setActiveForm("password")}>
                비밀번호 변경
              </Button>
            </div>
          </RightBox>
        </Box>
        {activeForm === "password" && (
          <ModalContainer>
            <ModalBox>
              <form>
                <div>
                  <Input placeholder="변경할 비밀번호 " />
                  <Input placeholder="변경할 비밀번호 확인" />
                  <Input placeholder="비밀번호 확인" />
                </div>
                <div>
                  <Button>비밀번호 변경</Button>
                  <Button>취소</Button>
                </div>
              </form>
            </ModalBox>
          </ModalContainer>
        )}

        <div>
          <Button onClick={() => setActiveForm("delete")}>회원탈퇴</Button>
        </div>
        {activeForm === "delete" && (
          <ModalContainer>
            <ModalDeleteBox>
              <Header>회원탈퇴</Header>
              <h2>서비스 탈퇴전 주의사항을 확인해주세요</h2>
              <Box>탈퇴할 계정</Box>
              <hr />
              <div>
                <Box>계정 복구 및 파기</Box>
                <Box>탈퇴 후 재 가입</Box>
                <Box>탈퇴사유</Box>
              </div>
              <div>
                <Button onClick={() => setActiveForm("/")}>취소</Button>
                <Button onClick={() => setActiveForm("next")}>다음으로</Button>
              </div>
            </ModalDeleteBox>
          </ModalContainer>
        )}
        {activeForm === "next" && (
          <ModalContainer>
            <ModalDeleteBox>
              <Header>회원탈퇴</Header>
              <div>
                안전한 탈퇴 진행을 위해 비밀번호를 한번더 입력해 주세요.
              </div>
              <Box>
                <div>탈퇴 할 계정</div>
              </Box>
              <div>
                <Text>비밀번호 재 확인 : </Text>
                <Input placeholder="비밀번호 입력" />
              </div>
              <Button onClick={() => setActiveForm("delete")}>이전으로</Button>
              <Button>탈퇴하기</Button>
            </ModalDeleteBox>
          </ModalContainer>
        )}
      </Container>
    </>
  );
};

export default MainMyPage;
