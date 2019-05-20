import React from "react";
// import ThemeProvider from "../components/landing/ThemeProvider";
import defaultTheme from "../theme";
// import { Navigation } from "../components/navigation";
import Nav from "../components/landing/nav";
import GatsbySidebar from "./gatsby-sidebar";
import { Box, Flex, ThemeProvider } from "rimble-ui";

const Layout = ({ children, location, itemList }) => (
  <div>
    <React.Fragment>
      <Box height={4} padding={2} />

      <Nav />
      <ThemeProvider theme={defaultTheme}>
        <Flex>
          <GatsbySidebar location={location} itemList={itemList} />

          <Box maxWidth={"960px"} margin={["auto"]}>
            {children}
          </Box>
        </Flex>
      </ThemeProvider>
    </React.Fragment>
  </div>
);

export default Layout;
