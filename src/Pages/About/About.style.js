import styled from "styled-components";

export const Div1 = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

export const Multicard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 100px;
  margin-top: 50px;
  @media (max-width: 768px) {
    width: 90%;
    display: block;
  }
`;

export const Tech = styled.div`
  img {
    width: 100px;
  }

  .main {
    display: flex;
    display-flex: row;
    justify-content: space-around;
  }

  h1 {
    margin-bottom: 50px;
  }

  .data {
    display: grid;
    font-weight: bold;
    margin-bottom: 50px;
  }
`;
