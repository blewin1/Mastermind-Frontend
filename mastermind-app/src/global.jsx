import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    align-items: center;
    background-color: #A37844;
    color: #EFFFFA;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    height: 100vh;
    text-rendering: optimizeLegibility;
  }
  .App {
    height: 100vh;
  }
  h1 {
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
  }
  img {
    border-radius: 5px;
    height: auto;
    width: 10rem;
  }
  div {
    text-align: center;
  }
  small {
    display: block;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
  }
  
  input, button {
    padding: .5em;
    border-radius: 5px;
    border: 1px solid lightslategray;
  }
  
  button {
    margin-top: 10px;
    color: white;
    background-color: brown;
    padding: .5em
  }

  .link-btn {
    font-size: 14px;
    text-decoration: underline;
    cusror: pointer;
    color: #363636;
    padding: 4px
  }

  .form-error {
    font-size: 14px;
    color: red;
  }

  .board {
    max-height: 640px;
    max-width: 360px;
    border: 1px solid black;
    padding: 10px;
    background-color: burlywood;
  }
  `