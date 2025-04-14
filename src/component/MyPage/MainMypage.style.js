import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  margin: 200px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: bold;
`;

export const Box = styled.div`
  display : flex;
  border: 1px solid #ddd;
  padding: 50px;
  border-radius: 12px;
  margin: 40px;
  witdh 100px;
`;
export const LeftBox = styled.div`
  flex: 2;
  padding: 10px;
  font-size: 40px;
`;
export const RightBox = styled.div`
  flex: 3;
  padding: 10px;
`;
export const DeleteBox = styled.div`
  display: flex;
  justify-content: flex-end;
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
export const ModalDeleteBox = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 12px;
  width: 600px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  z-index: 1001;
`;

export const Text = styled.div`
  padding: 20px;
  font-size: 25px;
`;

export const Input = styled.input`
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
