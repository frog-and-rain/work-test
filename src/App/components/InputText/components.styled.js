/**
 * Created by linhv on 12/5/2017.
 */

import styled from 'styled-components';

const Input = styled.input`
  height: 30px;
  width: calc(100% - 20px);
  margin-top: 5px;
  background-color: #FFFFFF;
  border: 1px solid #e5e6e7;
  border-radius: 1px;
  color: inherit;
  display: block;
  transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
  font-size: 14px;
  outline: none;
  padding: 0 10px;
  &:focus {
    border: 1px solid #1ab394;  
  }
`;
export { Input };
