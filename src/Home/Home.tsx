import * as React from 'react';
import './Home.css';

export default class Home extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="home-container">
        <p>Home page</p>
      </div>
    );
  }
}
