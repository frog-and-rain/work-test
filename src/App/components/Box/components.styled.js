/**
 * Created by linhv on 12/5/2017.
 */

import styled from 'styled-components';
import Paper from 'material-ui/Paper';

const Header = styled.div`
  width: calc(100% - 30px);
  padding: 14px 15px 7px 15px;
  border-color: #e7eaec;
  min-height: 27px;
  border-style: solid solid;
  border-width: 3px 0 1px 0;
`;

const HeaderContent = styled.div`
  width: 100% ;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
`;

const Body = styled.div`
  width: calc(100% - 20px);
  height: 100%;
  padding: 10px;
`;

const Container = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 25px;
`;

const Title = styled.span`
  font-size: 16px;
`;

export { Container, Title, Header, HeaderContent, Body };
