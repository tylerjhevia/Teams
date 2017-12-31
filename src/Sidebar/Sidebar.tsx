import * as React from 'react';
import AppContainer from '../AppContainer';
import './Sidebar.css';
import { CurrentUser } from '../Teams/Teams';

interface SidebarProps {
  currentUser: CurrentUser;
  storeCurrentUser: Function;
  toggleSidebar: Function;
}

const Sidebar = (props: SidebarProps) => {
  const { currentUser, storeCurrentUser, toggleSidebar } = props;
  return (
    <section className="sidebar-container">
      <p className="current-user">
        Logged in as: {currentUser.username}
      </p>
      <p
        className="logout"
        onClick={() => {
          storeCurrentUser({});
          localStorage.clear();
        }}
      >
        Log out
      </p>
      <button className="collapse" onClick={() => toggleSidebar()}>
        Collapse
      </button>
    </section>
  );
};

export default AppContainer(Sidebar);
