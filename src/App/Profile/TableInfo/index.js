import Container from './Container';
import { connect } from 'react-redux';
import { actions } from '../reducers';

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {
  ...actions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
