import styled from 'styled-components';

 export const Container = styled.div`
  width: 100;
  max-width: 580px;
  margin: 0 auto;
  padding: 0 30px;

  ul li {
    border-bottom: 1px da #ddd;
    border-bottom: 1px solid #ff9000;
    margin-top: 30px;
    list-style: none;
  }

  ul li a {
    text-decoration: none;
    color: #ddd;
  }
  div {
    padding: 10px;
  }
  button {
    position: relative;
    top: 4px;
    border-radius: 20px 0px 20px 0px;
    width: 69px;
    height: 50px;
    background: #ff9000;
    border: 0px;
margin-left: 4px;
    outline: 0px;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 42px;
    letter-spacing: 0em;
    text-align: center;
    transition-duration: 0.2s;
  }
  button:hover{
    background-color: #0ad8a5
  }

`;
