import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
 background: none;
 color: #fff;
 border: 1px solid #fff;
 padding: 5px 10px;
 border-radius: 4px;
 font-size: 12px;
`

const MainButton = props => {
 return (
  <Button>{props.isAvailable}</Button>
 )
}

export default MainButton;