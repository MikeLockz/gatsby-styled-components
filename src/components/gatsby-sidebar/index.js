import React, { Component } from "react";

import Sidebar from "./sidebar";
import presets from "./presets";
import ScrollSyncSidebar from "./scroll-sync-sidebar";
import ChevronSvg from "./chevron-svg";
import ScrollPositionProvider, {
  ScrollPositionConsumer
} from "./scrollbar-position-provider";
import { Box } from "rimble-ui";

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
    const { open } = this.state;
    const {
      enableScrollSync,
      location: { pathname }
    } = this.props;
    const SidebarComponent = enableScrollSync ? ScrollSyncSidebar : Sidebar;

    const iconOffset = open ? 5 : -5;
    const menuOpacity = open ? 1 : 0;
    const menuOffset = open ? 0 : 40; //rhythm(10);

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
