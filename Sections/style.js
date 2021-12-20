import styled from "styled-components";

export const Wrap = styled.div`
  background: #f7f8fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 260px;
  height: 450px;
  /* padding-left: 30px; */
  margin-left: 155px;
`;
Wrap.Item = styled.div`
  width: 100%;
  height: 41px;
  display: flex;
  padding-left: 30px;
  align-items: center;
  border-bottom: 1px solid #e3e3e3;
  border-bottom: ${({ border }) => border && "none"};
`;
