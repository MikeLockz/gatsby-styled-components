import React from "react";
//import { Layout, Link } from "$components";
import { Link } from "gatsby";

import Text from "./Text";
import Heading from "./Heading";
import Button from "./Button";

const Header = ({}) => (
  <header>
    <Heading.h1 fontSize={[5, 7]} pr={[3, 6]}>
      Rimble Design System
    </Heading.h1>
    <Text.p fontSize={2} mt={3} mb={5} pr={[3, 6]}>
      Adaptable components and design standards for decentralized applications.
    </Text.p>

    <Link to={"design"}>
      <Button width={["100%", "auto"]} mr={[0, 3]} mb={[3, 0]}>
        Design
      </Button>
    </Link>

    <Link to={"develop"}>
      <Button.outline width={["100%", "auto"]}>Develop</Button.outline>
    </Link>
  </header>
);

export default Header;
