import styled from "styled-components";
import { ReactComponent as Content1 } from "../../assets/img/content1.svg";

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 85%;
  margin: 69px auto;
`;

Wrap.Box = styled.div`
  display: flex;
  align-items: center;
`;

Wrap.Content1 = styled(Content1)`
  width: 58px;
  height: 58px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;
Title.Title1 = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  color: #555555;
`;

Title.Desc = styled.div`
  font-weight: normal;
  font-size: 14px;
  line-height: 26px;
  color: rgba(81, 81, 81, 0.71);
`;
