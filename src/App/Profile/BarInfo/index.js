import Container from './Container';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { users: state.user.list, current: state.user.current };
};

export default connect(mapStateToProps)(Container);