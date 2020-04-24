import styled from "styled-components";

export const TableHeader = styled.div`
  th {
    padding: 20px 15px;
    text-align: left;
    font-weight: 500;
    font-size: 12px;
    color: #fff;
    text-transform: uppercase;
  }
  td {
    padding: 15px;
    text-align: left;
    vertical-align: middle;
    font-weight: 300;
    font-size: 12px;
    color: #fff;
    border-bottom: solid 1px rgba(255, 255, 255, 0.1);
  }
  table {
    width: 100%;
    table-layout: fixed;
  }
`;

export const TableContent = styled(TableHeader)`
  height: 300px;
  overflow-x: auto;
  margin-top: 0px;
`;
