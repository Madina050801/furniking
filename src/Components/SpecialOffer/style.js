import styled from "styled-components";
import special1 from "../../assets/img/special1.png";

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 110px;
`;

Wrap.Wrapper = styled.div``;

Wrap.Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
`;

Wrap.Card = styled.div`
  width: 570px;
  height: 249px;
  margin: 15px;
  position: relative;
`;

export const Titles = styled.div`
  /* position: absolute; */
`;

Titles.Contain = styled.div`
position: absolute;
top: 20px;
left: 20px;
`;

Titles.Title = styled.div`
  font-weight: bold;
  font-size: 36px;
  line-height: 45px;
  color: #555555;
  padding: 0 auto;
  display: flex;
  justify-content: center;
  /* margin-bottom: 50px; */
`;

Titles.Name = styled.div`
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  color: #555555;
  margin: 15px 0 9px 0;
  /* position: absolute; */
`;

Titles.Desc = styled.div`
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: #757575;
  width: 50%;
`;

Titles.Price = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 120%;
  letter-spacing: 0.005em;
  color: #7ac751;
  margin-top: 13px;
`;

export const Image = styled.img.attrs({
  src: `${special1}`,
})`
  /* width: 669px;
      height: 511px; */
`;
