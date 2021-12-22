import styled from "styled-components";
import collect1 from "../../assets/img/collect1.svg";
import collect2 from "../../assets/img/collect2.png";
import collect3 from "../../assets/img/collect3.svg";
import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

Wrap.Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

Wrap.Wrap2and3 = styled.div`
  display: flex;
  flex-direction: column;
`;

Wrap.Box = styled.div`
  position: relative;
  margin: 9px;
`;

export const ColleImage = styled.img.attrs({
  src: `${collect1}`,
})`
  width: 669px;
  height: 511px;
`;

ColleImage.ColleImage2 = styled.img.attrs({
  src: `${collect2}`,
})`
  width: 485px;
  height: 247px;
`;

ColleImage.ColleImage3 = styled.img.attrs({
  src: `${collect3}`,
})`
  width: 485px;
  height: 247px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin: 60px auto auto 30px;
`;

Title.Desc = styled.div`
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
  color: #555555;
`;

Title.Price = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  color: #7ac751;
  margin-top: 10px;
  margin-bottom: 13px;
`;

Title.Read = styled.div`
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  color: #757575;
  margin-right: 3px;
`;

Title.Arrow=styled(Arrow)`

`
