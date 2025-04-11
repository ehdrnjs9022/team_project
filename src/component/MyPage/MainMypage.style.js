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

export const Box = styled.div`
  border: 1px solid #ddd;
  padding: 50px;
  border-radius: 12px;
  margin: 40px;
  witdh 100px;
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
