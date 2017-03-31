import styled from 'styled-components';

const ColouredDiv = styled.div`
  background: #21a2ef;
  background: -moz-linear-gradient(-45deg, #21a2ef 0%, #99b83c 100%);
  background: -webkit-gradient(left top, right bottom, color-stop(0%, #21a2ef), color-stop(100%, #99b83c));
  background: -webkit-linear-gradient(-45deg, #21a2ef 0%, #99b83c 100%);
  background: -o-linear-gradient(-45deg, #21a2ef 0%, #99b83c 100%);
  background: -ms-linear-gradient(-45deg, #21a2ef 0%, #99b83c 100%);
  background: linear-gradient(135deg, #21a2ef 0%, #99b83c 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#21a2ef', endColorstr='#99b83c', GradientType=1);
`;

export default ColouredDiv;
