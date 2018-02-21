import { compose, withState, withProps, lifecycle } from 'recompose';
import AppContainer from './AppContainer';
import App from './App';

export default compose(
  withState('toto', 'setToto', 'tata'),
  AppContainer,
)(App);
