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
`;

export const Welcome = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LeftBox = styled.div`
  display : flex;
  align-items ; center;
  height 100px;


`;

export const RightBox = styled.div`
  text-align: right;
`;

export const Box = styled.div`
  border: 1px solid #ddd;
  padding: 50px;
  border-radius: 12px;
  margin: 40px;
  witdh 100px;
`;

export const NicknameText = styled.p`
  font-size: 14px;
  color: #555;
  cursor: pointer;
  text-decoration: underline;
  margin-top: 8px;
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
  width: 100%;
  padding: 10px;
  margin: 12px 0;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

export const ButtonGroup = styled.div`
  display: flex;
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
export const Span = styled.span`
  display: inline-block;
`;
