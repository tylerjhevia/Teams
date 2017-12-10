import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { storeCurrentUser } from '../actions/index';

const mapStateToProps = (state: any) => ({ currentUser: state.user });

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({ storeCurrentUser }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps);
