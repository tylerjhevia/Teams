import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state: any) => ({ currentUser: state.user });

const mapDispatchToProps = (dispatch: any) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps);
