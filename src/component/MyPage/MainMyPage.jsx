import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Header,
  ModalBox,
  ModalContainer,
  ModalDeleteBox,
  CheckBox,
  Area,
} from "./MainMypage.style";
import { LeftBox, RightBox, Font, Input } from "./MainMypage.style";

const MainMyPage = () => {
  const [activeForm, setActiveForm] = useState(null);
  const [modifyName, setModifyName] = useState("");
  const [modifyEmail, setModifyEmail] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [modifyPw, setModifyPw] = useState("");
  const [modifyCheckPw, setmodifyCheckPw] = useState("");

  const handleName = (e) => {
    const inputName = e.target.value;
    setModifyName(inputName);
  };

  const handelEmail = (e) => {
    const inputEmail = e.target.value;
    setModifyEmail(inputEmail);
  };

  const handelPassword = (e) => {
    const inputPassword = e.target.value;
    setPasswordCheck(inputPassword);
  };

  const submitName = (e) => {
    e.preventDefault();
    const regexName = /^([a-zA-Z]{2,30}|[\uAC00-\uD7A3]{2,5})$/;
    if (!regexName.test(modifyName)) {
      alert("한글 이름 2~5자, 영어 이름 2~30자 입력해주세요.");
      return;
    }
    //console.log("이름 : ", modifyName);
    //console.log("이메일 : ", modifyEmail);
    //console.log("비밀번호 : ", passwordCheck);
    setActiveForm(null);
  };

  const handleModifyPw = (e) => {
    const inputPw = e.target.value;
    setModifyPw(inputPw);
  };
  const handleModifyCheckPw = (e) => {
    const inputCheckPw = e.target.value;
    setmodifyCheckPw(inputCheckPw);
  };
  const submitModfyPw = (e) => {
    e.preventDefault();
    console.log(" 변경 비밀번호 : ", modifyPw);
    console.log("변경 비밀번호 확인 : ", modifyCheckPw);
    console.log("비밀번호 확인 : ", passwordCheck);
  };

  const submitCheckPw = (e) => {
    e.preventDefault();
    console.log("확인 : ", passwordCheck);
    setActiveForm(null);
  };

  return (
    <>
      <Container>
        <Header>내정보 수정</Header>
        <Box>
          <LeftBox>내정보</LeftBox>
          <RightBox>
            <div>
              <Font>이름</Font>
              <Font>아이디</Font>
              <Font>연락처</Font>
              <Font>이메일</Font>
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
              <form onSubmit={submitName}>
                <div>변경하기</div>
                <div>
                  <Input
                    type="text"
                    value={modifyName}
                    onChange={handleName}
                    placeholder="변경 할 이름 입력"
                  />
                  <Input
                    type="email"
                    value={modifyEmail}
                    onChange={handelEmail}
                    placeholder="변경 할 이메일 입력"
                  />
                  <Input
                    type="password"
                    value={passwordCheck}
                    onChange={handelPassword}
                    placeholder="비밀번호 확인"
                  />
                </div>
                <div>
                  <Button type="submit">변경</Button>
                  <Button onClick={() => setActiveForm(null)}>취소</Button>
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
              <form onSubmit={submitModfyPw}>
                <div>변경하기</div>
                <div>
                  <Input
                    text="password"
                    onChange={handleModifyPw}
                    placeholder="변경할 비밀번호 "
                  />
                  <Input
                    text="password"
                    onChange={handleModifyCheckPw}
                    placeholder="변경할 비밀번호 확인"
                  />
                  <Input
                    text="password"
                    onChange={handelPassword}
                    placeholder="비밀번호 확인"
                  />
                </div>
                <div>
                  <Button type="submit">비밀번호 변경</Button>
                  <Button type="button" onClick={() => setActiveForm(null)}>
                    취소
                  </Button>
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
                <Box>
                  <div>
                    탈퇴사유
                    <Area placeholder="내용을 입력해주세요."></Area>
                  </div>
                </Box>
              </div>
              <CheckBox>
                <input type="checkbox" />
                <p>탈퇴 주의 사항을 모두 확인했으며, 이에 동의 합니다.</p>
              </CheckBox>

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
              <form onSubmit={submitCheckPw}>
                <Header>회원탈퇴</Header>
                <div>
                  안전한 탈퇴 진행을 위해 비밀번호를 한번더 입력해 주세요.
                </div>
                <Box>
                  <div>탈퇴 할 계정</div>
                </Box>
                <div>
                  <Font>비밀번호 재 확인 : </Font>
                  <Input
                    type="password"
                    onChange={handelPassword}
                    placeholder="비밀번호 입력"
                  />
                </div>
                <Button onClick={() => setActiveForm("delete")}>
                  이전으로
                </Button>
                <Button type="sumbit">탈퇴하기</Button>
              </form>
            </ModalDeleteBox>
          </ModalContainer>
        )}
      </Container>
    </>
  );
};

export default MainMyPage;
