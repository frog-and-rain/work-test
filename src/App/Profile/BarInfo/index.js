import Container from './Container';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(Container);