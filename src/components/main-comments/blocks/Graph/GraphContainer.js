import { compose, withProps } from 'recompose';
import Graph from './Graph';
import arrayGraph from '../../../../functions/arrayGraph';


const enhance = compose(withProps(props => ({
  dataGraph: props.isLoading ? [] : arrayGraph(props.issue, props.filteredComments, props.users, props.filteredUsers),
})));

export default enhance(Graph);
