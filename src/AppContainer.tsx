import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { storeCurrentUser, toggleSidebar } from './actions/index';

const mapStateToProps = (state: any) => ({
  currentUser: state.user,
  sidebar: state.sidebar
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({ storeCurrentUser, toggleSidebar }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps);
