import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { resetData } from '../actions/answerActions';
import AboutThisTool from '../components/AboutThisTool';

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			resetData,
		},
		dispatch,
	);

export default connect(
	null,
	mapDispatchToProps,
)(AboutThisTool);