import React, { Component } from "react";
import PropTypes from "prop-types";
import { Box, Flex } from "rimble-ui";
import ExampleCard from "./ExampleCard";

class DoDont extends Component {
  static propTypes = {
    children: PropTypes.shape({
      positive: PropTypes.node,
      negative: PropTypes.node
    })
  };

  render() {
    const { positive, negative } = this.props.children;

    return (
      <Flex alignItems={"stretch"} flexWrap={["wrap", "nowrap"]}>
        <Box width={[1, 1 / 2]} my={3} mr={3}>
          <ExampleCard variant={"positive"}>{positive}</ExampleCard>
        </Box>
        <Box width={[1, 1 / 2]} my={3}>
          <ExampleCard variant={"negative"}>{negative}</ExampleCard>
        </Box>
      </Flex>
    );
  }
}

export default DoDont;
