import Container from './Container';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  user: state.user.current,
});

export default connect(mapStateToProps)(Container);