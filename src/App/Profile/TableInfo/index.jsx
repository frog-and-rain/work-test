import Container from './Container';
import { connect } from 'react-redux';
import { actions } from './reducers';

const mapStateToProps = state => ({
  users: state.user.list,
});

const mapDispatchToProps = {
  ...actions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
