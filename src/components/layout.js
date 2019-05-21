import React from "react";
// import ThemeProvider from "../components/landing/ThemeProvider";
import defaultTheme from "../theme";
// import { Navigation } from "../components/navigation";
import Nav from "../components/landing/nav";
import Typography from "../components/landing/typography";
import GatsbySidebar from "./gatsby-sidebar";
import { Box, Flex, ThemeProvider } from "rimble-ui";

const Layout = ({ children, location, itemList }) => (
  <ThemeProvider theme={defaultTheme}>
    <React.Fragment>
      <Box height={4} />

      <Typography />
      <Nav />

      <Flex>
        <GatsbySidebar location={location} itemList={itemList} />

        <Box maxWidth={"960px"} margin={["auto"]} padding={3}>
          {children}
        </Box>
      </Flex>
    </React.Fragment>
  </ThemeProvider>
);

export default Layout;
