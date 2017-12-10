import * as React from 'react';
import AppContainer from '../containers/AppContainer';
import './Sidebar.css';
import { CurrentUser } from '../Teams/Teams';

interface SidebarProps {
  currentUser: CurrentUser;
  storeCurrentUser: Function;
}

const Sidebar = (props: SidebarProps) => {
  console.log('sidebar props', props);
  return (
    <section className="sidebar-container">
      <p className="current-user">
        Logged in as: {props.currentUser.username}
      </p>
      <p className="logout">Log out</p>
    </section>
  );
};

export default AppContainer(Sidebar);
