import styled from "styled-components";

export const Container = styled.div`
  margin: 60px auto;
  padding: 20px;
  margin: 200px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  font-weight: bold;
`;

export const Welcome = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LeftBox = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
`;

export const RightBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Box = styled.div`
  border: 1px solid #ddd;
  padding: 50px;
  border-radius: 12px;
  margin: 40px;
  witdh 100px;
`;

export const ProfileImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #ccc;
  color: white;
  font-size: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px auto;
`;

export const FormWrapper = styled.form`
  border: 1px solid #eee;
  padding: 20px;
  margin-top: 20px;
  border-radius: 10px;
  background: white;
`;

export const Input = styled.input`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px;
  margin: 12px 0;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

export const Button = styled.button`
  flex: 1;

  padding: 10px;
  border: 1px solid #aaa;
  border-radius: 6px;
  cursor: pointer;
  background: #f9f9f9;

  &:hover {
    background: #eee;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Span = styled.span`
  display: inline-block;
`;
export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
export const ModalBox = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 12px;
  width: 400px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  z-index: 1001;
`;
