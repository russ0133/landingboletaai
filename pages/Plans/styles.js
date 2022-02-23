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
  padding: 4rem 2rem;

  h1 {
    font-size: 2rem;
    font-weight: 600;
    color: var(--blue-hard);
    line-height: 2;
  }
  h2 {
    font-size: 1.5rem;
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
  margin-bottom: 20px;

  h2 {
    color: var(--blue-hard);
    font-size: 1.2rem;
  }
`;

export const Box = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  padding: 2rem 1rem;
  border-radius: 1rem;
  background-color: white;

  button {
    width: 200px;
    border: none;
    height: 60px;
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

  p {
    font-weight: 600;
    font-size: 1.1rem;
    line-height: 2;
    color: var(--blue-hard);
  }
  h1 {
    color: var(--blue-hard);
    margin: 10px 0px;
    font-size: 1.5rem;
    font-weight: 700;
  }
  ul {
    padding: 1rem 2rem;
    list-style-image: url("./check.svg");
  }
  li {
    line-height: 1.5;
    margin-bottom: 0.6rem;
  }
`;

export const BoxBlue = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  padding: 3rem 1rem;
  border-radius: 1rem;
  background-color: var(--blue-hard);

  button {
    width: 200px;
    border: none;
    height: 60px;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: white;
    color: var(--blue-hard);
    font-weight: 600;
    font-size: 1.2rem;
    cursor: pointer;
  }

  button:hover {
    background: transparent;
    border: 1px solid white;
    color: white;
  }

  p {
    font-weight: 600;
    font-size: 1.8rem;
    line-height: 2;
    color: white;
  }
  h1 {
    color: white;
    margin: 10px 0px;
    font-size: 1.5rem;
    font-weight: 700;
  }
  ul {
    padding: 1rem 2rem;
    list-style-image: url("./checkgray.svg");
  }
  li {
    line-height: 1.5;
    margin-bottom: 0.6rem;
    color: white;
  }
`;
