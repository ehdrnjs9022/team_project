import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center; /* 중앙 정렬 */
  gap: 20px; /* 버튼 간 간격 */
  padding: 15px 30px;
  background-color: transparent;
`;

export const NavLink = styled.a`
  font-size: 1.4rem;
  cursor: pointer;
  padding: 12px 30px;
  border: 2px solid #007bff;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  text-align: center;

  &:hover {
    background-color: #0056b3;
    color: white;
  }
`;
