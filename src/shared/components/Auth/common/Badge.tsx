import styled from "styled-components";

interface Props {
    color: string;
}

const Badge = styled.span<Props>`
  line-height: 1;
  list-style: none;
  margin: 0 8px 0 0;
  padding: 0;
  background-color: ${props => props.color};
  border-radius: 10px;
  color: #fff;
  display: block;
  font-size: 12px;
  font-weight: 400;
  height: 20px;
  line-height: 20px;
  display:inline-block;
  overflow: hidden;
  padding: 0 8px;
  text-align: center;
`;

export default Badge;
