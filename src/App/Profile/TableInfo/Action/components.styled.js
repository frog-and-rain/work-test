/**
 * Created by linhv on 12/5/2017.
 */

import styled from 'styled-components';

const ActionView = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ButtonIcon = styled.button`
  font-size: 13px;
  padding: 1px 5px;
  border: 1px solid;
  margin-right: 6px;
  border-radius: 3px;
  line-height: 1.5;
  background-color: #ffffff;
  transition: all 0.5s;
  cursor: pointer;
  display: inline-block;
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

const EditButton = ButtonIcon.extend`
  color: royalblue;
  border-color: royalblue;
  
  &:hover {
    background-color: royalblue;
    color: #ffffff; 
  }
`;

export { ActionView, BlockButton, SaveButton, EditButton };