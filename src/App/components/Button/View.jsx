import T from 'prop-types';
import React from 'react';

const ButtonIcon = styled.button`
  font-size: 13px;
  padding: 1px 5px;
  border: 1px solid;
  border-radius: 3px;
  background-color: #ffffff;
  transition: all 0.5s;
  display: flex;
  flex-direction: row;
  alight-item: center;
  justify-content: center;
  cursor: pointer;
`;

const BlockButton = ButtonIcon.extend`
  color: darkorange;
  border-color: darkorange;
  
  &:hover {
    background-color: darkorange;
    color: #ffffff;
  }
`;

const SaveButton = ButtonIcon.extend`
  color: mediumseagreen;
  border-color: mediumseagreen;
  
  &:hover {
    background-color: mediumseagreen;
    color: #ffffff;
  }
`;