import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from '../App';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App/App';
import Navigation from '../Pages/Main/Navigation/Navigation';

configure({ adapter: new Adapter() });
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
