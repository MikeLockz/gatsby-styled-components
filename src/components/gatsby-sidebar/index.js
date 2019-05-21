import React, { Component } from "react";

import Sidebar from "./sidebar";
import ScrollSyncSidebar from "./scroll-sync-sidebar";
import ScrollPositionProvider, {
  ScrollPositionConsumer
} from "./scrollbar-position-provider";

class StickyResponsiveSidebar extends Component {
  constructor(props) {
    super(props);

    this.state = { open: false };
  }

  _openSidebar = () => {
    this.setState({ open: !this.state.open });
  };

  _closeSidebar = () => {
    this.setState({ open: false });
  };

  render() {
    const {
      enableScrollSync,
      location: { pathname }
    } = this.props;
    const SidebarComponent = enableScrollSync ? ScrollSyncSidebar : Sidebar;

    const sidebarType = pathname.split(`/`)[1];

    return (
      <ScrollPositionProvider>
        <div>
          <div>
            <ScrollPositionConsumer>
              {({ positions, onPositionChange }) => (
                <SidebarComponent
                  position={positions[sidebarType]}
                  onPositionChange={onPositionChange}
                  closeSidebar={this._closeSidebar}
                  {...this.props}
                />
              )}
            </ScrollPositionConsumer>
          </div>
        </div>
      </ScrollPositionProvider>
    );
  }
}

export default StickyResponsiveSidebar;
