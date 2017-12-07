import styled from 'styled-components';

const Container = styled.div`
  width: 20%;
	display: flex;
	flex-direction: column;
	margin: 10px 0;
	@media only screen and (max-width: 991px) {
    width: 100%;
  }
	
`;

const Label = styled.div`
  font-weight: bold;
  margin: 0 0 12px 0;
  width: 100%;
`;

const Error = styled.span`
  color: #ea5d49;
  margin-top: 10px;
`;

const Form = styled.form`
  padding: 0 15px;
  width: calc(100% - 30px);
  display: flex;
	flex-direction: row;
	justify-content: space-between;
	@media only screen and (max-width: 991px) {
    flex-direction: column;
  }
`;

export { Container, Label, Form, Error };