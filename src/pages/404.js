import React from "react";
import SEO from "../components/seo";
import { Box, Heading, Text } from "rimble-ui";

const NotFoundPage = () => (
  <Box p={4}>
    <SEO title="404: Not found" />
    <Heading.h1>NOT FOUND</Heading.h1>
    <Text>You just hit a route that doesn&#39;t exist... the sadness.</Text>
  </Box>
);

export default NotFoundPage;
