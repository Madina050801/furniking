import styled from "styled-components";
import { ReactComponent as Fur1 } from "../../assets/img/fur1.svg";
import { ReactComponent as Fur2 } from "../../assets/img/fur2.svg";
import { ReactComponent as Fur3 } from "../../assets/img/fur3.svg";
import { ReactComponent as Fur4 } from "../../assets/img/fur4.svg";

export const Wrap = styled.div`
  width: 899px;
  height: 439px;
  background: linear-gradient(
    103.4deg,
    rgba(241, 250, 255, 0.88) 0.89%,
    #f1faff 101.61%
  );
  backdrop-filter: blur(155px);
  border-radius: 1px;
  margin: 12px auto auto 12px;
  display: flex;
`;

export const Titles = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 47px;
  margin-top: 73px;
`;

Titles.Title = styled.div`
  font-weight: normal;
  font-size: 22px;
  line-height: 26px;
  letter-spacing: 0.05em;
  color: #7ac751;
`;

Titles.Title2 = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 47px;
  margin-top: 6px;

  color: #2f2f2f;
`;

Titles.Title3 = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 27px;
  line-height: 26px;
  color: rgba(81, 81, 81, 0.71);

  margin-top: 30px;
  margin-bottom: 35px;
`;

Titles.Button = styled.div`
  width: 129px;
  height: 40px;
  background: #7ac751;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  color: white;
`;

Wrap.Armchair = styled.div`
  display: flex;
  align-items: center;
`;

Wrap.Fur1 = styled(Fur1)`
  width: 374px;
  height: 374px;
`;

Wrap.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  margin-top: 47px;
  padding: 5px;
`;

Wrap.Wrap1 = styled.div`
  width: 98px;
  height: 91.47px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.6) 0%,
    rgba(255, 255, 255, 0.56) 100%
  );
  border: 2px solid #ffffff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 12px;
`;

Wrap.Fur2 = styled(Fur2)``;
Wrap.Fur3 = styled(Fur3)``;
Wrap.Fur4 = styled(Fur4)``;

Wrap.Price = styled.div`
  font-weight: 500;
  font-size: 7px;
  line-height: 26px;
  color: #7ac751;
`;

Wrap.Desc = styled.div`
  font-weight: 500;
  font-size: 7px;
  line-height: 26px;
  display: flex;
  align-items: center;
  color: #555555;
`;
