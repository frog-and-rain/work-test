import Container from './Container';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  const user = state.user.list.find(item => item.id === state.user.current);
  return { user };
};

export default connect(mapStateToProps)(Container);