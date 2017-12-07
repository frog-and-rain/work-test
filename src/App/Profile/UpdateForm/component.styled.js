/**
 * Created by linhv on 12/5/2017.
 */
import styled from 'styled-components';

const Container = styled.div`
  width: calc(100% - 30px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15px;
`;

const ButtonSubmit = styled.button`
  margin: 25px 0;
  width: 100px;
  background-color: #23c6c8;
  color: #FFFFFF;
  float: right;
  border-radius: 3px;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.42857143;
  cursor: pointer;
  border: 1px solid transparent;
  max-width: 100%;
  &:hover {
    background-color: #21b9bb;
  }
`;

const Form = styled.form`
  width: 33.33%;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Error = styled.span`
  color: #ea5d49;
`;

export { Container, ButtonSubmit, Form, Error };
