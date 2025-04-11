import styled from "styled-components";

export const TableWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 40px auto;
  font-family: sans-serif;
`;

export const TableTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Th = styled.th`
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
  background-color: #f5f5f5;
  font-weight: bold;
`;

export const Td = styled.td`
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
`;
