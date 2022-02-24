import styled from "styled-components";

export const Container = styled.div`
  align-self: center;
  box-sizing: border-box;
  align-items: center;
  display: flex;
  padding: 0 5rem;
  @media (max-width: 650px) {
    padding: 0 1rem;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  align-content: center;
  justify-content: center;
  padding: 0px 3rem;
  flex-direction: column;
  @media (max-width: 650px) {
    padding: 0rem;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem 2rem;

  h1 {
    font-size: 2rem;
    font-weight: 600;
    color: var(--blue-hard);
    line-height: 2.5;
  }
  h2 {
    font-size: 1rem;
    font-weight: 400;
  }

  button {
    width: 200px;
    border: none;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: var(--blue-hard);
    color: white;
    font-weight: 600;
    font-size: 1.2rem;
    cursor: pointer;
  }

  button:hover {
    background: transparent;
    border: 1px solid var(--blue-hard);
    color: var(--blue-hard);
  }
`;

export const ContainerBoxers = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  @media (max-width: 650px) {
    flex-direction: column;
  }

  h2 {
    color: var(--blue-hard);
    font-size: 1.2rem;
  }
`;

export const Box = styled.div`
  width: 27%;
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;

  border: 0.2rem dashed #bababa;
  padding: 3rem 2rem;
  border-radius: 1rem;
  margin-bottom: 10px;
  @media (max-width: 650px) {
    width: 100%;
  }
  p {
    font-weight: 200;
    font-size: 1.1rem;
    line-height: 1.35;
    color: var(--text-title);
    text-align: center;
  }
  h1 {
    color: var(--text-title);
    margin: 10px 0px;
    font-size: 1.3rem;
    font-weight: 300;
    line-height: 2.5;
  }
`;
