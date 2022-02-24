import styled from "styled-components";

export const Container = styled.ul`
  display: none;
  margin-top: -15px;

  li a {
    color: white;
    text-decoration: none;
  }

  @media (max-width: 650px) {
    display: inherit;
    position: absolute;
    min-height: 100vh;
    width: 80%;
    color: white;
    z-index: 55;
    margin-left: -25px;

    .icon {
      position: absolute;
      z-index: 4;
      left: 10%;
      width: fit-content;
      height: 44px;
      cursor: pointer;
    }

    .hamburguer {
      top: 100%;
      left: 10%;
      width: 25px;
      height: 4px;
      background-color: white;
      position: absolute;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      transition: 0.5s;
    }
    .hamburguer::before {
      top: -12px;
      content: "";
      position: absolute;
      width: 30px;
      height: 4px;
      background-color: white;
      transition: 0.5s;
    }

    .hamburguer::after {
      top: 12px;
      content: "";
      position: absolute;
      width: 30px;
      height: 4px;
      background-color: white;
      transition: 0.5s;
    }

    .list {
      display: flex;
      flex-direction: column;
      left: 1%;
      padding: 8rem 2rem;
      flex-wrap: nowrap;
      color: white;
      font-size: 1.5rem;
      font-weight: 600;
    }

    .list .listItems {
      padding: 0;
      list-style: none;
    }

    .list .listItems li {
      margin: 20px 8px;
      cursor: pointer;
    }

    .list .listItems li:hover {
      font-weight: 800;
    }

    .icon.iconActive .hamburguer {
      background-color: transparent;
      box-shadow: 0 2px 5px transparent;
    }

    .icon.iconActive .hamburguer:after {
      top: 0;
      background-color: white;
      transform: rotate(225deg);
      box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
    }

    .icon.iconActive .hamburguer:before {
      top: 0;
      background-color: white;
      transform: rotate(135deg);
      box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
    }
    .menu.menuOpen {
      width: 200px;
      height: 100vh;
      background: linear-gradient(to right, #004e92, #578ee1);
    }
    .menu.menuClose {
      display: none;
      width: 0px;
    }
  }
`;
