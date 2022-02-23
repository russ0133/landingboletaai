import styled from "styled-components";

export const Container = styled.div`
  align-self: center;
  box-sizing: border-box;
  align-items: center;
  display: flex;
  padding: 0 5rem;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  align-content: center;
  justify-content: center;
  padding: 0px 3rem;
  flex-direction: column;
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
  border: 0.1rem solid #bababa;
  padding: 3rem 1rem;
  border-radius: 1rem;
  margin-bottom: 10px;
  p {
    font-weight: 200;
    font-size: 1.1rem;
    line-height: 1.35;
    color: #bababa;
  }
  h1 {
    color: var(--text-title);
    margin: 10px 0px;
    font-size: 1rem;
    font-weight: 600;
    line-height: 2.5;
  }
`;
