import { connect } from 'react-redux';
import HomeNotebooks from '../components/HomeNotebooks';
import { deleteNotebook } from '../actionCreators/notebookActions';

const mapStateToProps = (state, ownProps) => { 
	return {
		notebooks: state.notebooks,
		addNotebook: () => { ownProps.navigator.replace({name : 'CreateNotebook'})},
		openNotebook: (id,name) => {ownProps.navigator.replace({name:'Notebook', id:id, studentName:name})}

	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		deleteNotebook : (id) => dispatch(deleteNotebook(id))
	};
};

const HomeNotebooksContainer = connect(
	mapStateToProps,
	mapDispatchToProps
	)(HomeNotebooks);

export default HomeNotebooksContainer;