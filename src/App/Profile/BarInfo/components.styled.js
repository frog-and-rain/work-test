/**
 * Created by linhv on 12/5/2017.
 */

import styled from 'styled-components';

const Container = styled.div`
  min-height: 20px;
  padding: 10px;
  margin: 20px 0;
  background-color: #f5f5f5;
  border: 1px solid #e3e3e3;
  border-radius: 1px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const Avatar = styled.div`
  height: 100px;
  width: 100px;
  line-height: 100px;
  text-align: center;
  border-radius: 10px;
  color: black;
  display: block;
  border: 1px solid #2e97de;
  background-color: #fff;
`;

const InfoImage = styled.span`
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
  font-size: 50px;
  text-transform: uppercase;
`;

const InfoText = styled.div`
  margin-left: 20px;
`;

const Name = styled.span`
  font-size: 2em;
  height: 50px;
  line-height: 50px;
  font-weight: bold;
  text-transform: capitalize;
`;

const Role = styled.span`
  font-size: 1.3em;
  height: 30px;
  line-height: 30px;
`;

export { Container, Avatar, InfoText, Name, Role, InfoImage };
