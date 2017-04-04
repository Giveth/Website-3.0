import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    color: #34495e;
    font-family: 'Droid Sans', Helvetica, Arial, sans-serif;
  }

  a {
    transition: 0.25s;
  }

  p {
    line-height: 1.7222;
    font-size: 15px;
  }

  p a {
    color: #0093c9;
    font-weight: bold;
    text-decoration: underline;
  }

  p a:hover {
    color: #99b83c;
    text-decoration: none;
  }

  h2 {
    color: #99b83c;
    font-family: Exo;
    font-weight: 700;
    line-height: 1.1;
    font-size: 32px;
    text-align: center;
  }

  h3 {
    color: #fff;
    font-family: Exo;
    font-weight: 700;
    line-height: 1.1;
    font-size: 26px;
    margin: 16px 0 24px;
  }

  a i {
    color: #444;
    margin-right: 8px;
    padding: 8px;
  }

  a i:hover {
    background: #0093c9;
    color: #fff;
    border-radius: 36px;
    transition: 0.25s;
  }

  .flag {
    vertical-align: baseline;
    height: 20px;
  }

  .navbar .nav li > a {
    color: #0093c9;
    text-transform: uppercase;
    font-weight: 700;
  }

  .navbar .nav li > a:hover {
    background: #0093c9;
    color: #fff;
    border-radius: 16px;
    transition: 0.25s;
  }

  .row {
    padding: 24px 0;
  }

  .gradient {
    background: #21a2ef;
    background: -moz-linear-gradient(-45deg, #21a2ef 0%, #99b83c 100%);
    background: -webkit-gradient(left top, right bottom, color-stop(0%, #21a2ef), color-stop(100%, #99b83c));
    background: -webkit-linear-gradient(-45deg, #21a2ef 0%, #99b83c 100%);
    background: -o-linear-gradient(-45deg, #21a2ef 0%, #99b83c 100%);
    background: -ms-linear-gradient(-45deg, #21a2ef 0%, #99b83c 100%);
    background: linear-gradient(135deg, #21a2ef 0%, #99b83c 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#21a2ef', endColorstr='#99b83c', GradientType=1);
  }

  .grey {
    background-color: #f9f9f9;
  }

  li.about {
    margin: 1em 0;
  }

  li.about:before {
    font-family: FontAwesome;
    content: "\\f192";
    color: #99b83c;
    font-size: 11px;
    padding-right: 8px;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  #join {
    color: #777;
  }

  a#join:hover {
    color: #fff;
  }

  #language {
    margin-top: -5px;
  }

  a#language:hover {
    background: transparent;
    color: #0093c9;
  }

`;
