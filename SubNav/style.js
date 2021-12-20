import styled from "styled-components";
import { ReactComponent as Menu } from "../../assets/icons/menu.svg";

export const Wrap = styled.div`
  width: 100%;
  height: 67px;
  background-color: #f7f8fa;
  display: flex;
  align-items: center;
  color: black;
`;

Wrap.Box = styled.div`
  width: 260px;
  height: 67px;
  background: #7ac751;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.02em;
  color: #ffffff;

  margin-left: 155px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 30px 0 30px;
`;

Wrap.Menu = styled(Menu)`
  width: 18px;
  height: 14px;
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 530;
  font-size: 14px;
  line-height: 17px;
  color: #555555;
  color: ${({ color }) => color === "true" && "red"};
`;

Title.Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 55%;
`;
