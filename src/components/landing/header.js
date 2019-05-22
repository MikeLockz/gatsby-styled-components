import React from "react";
import RimbleGatsbyLink from "./RimbleGatsbyLink";

import Text from "./Text";
import Heading from "./Heading";
import Button from "./Button";

const Header = ({ props }) => (
  <header>
    <Heading.h1 fontSize={[5, 7]} pr={[3, 6]}>
      Rimble Design System
    </Heading.h1>
    <Text.p fontSize={3} mt={3} mb={5} pr={[3, 6]}>
      Adaptable components and design standards for decentralized applications.
    </Text.p>

    <RimbleGatsbyLink to={"design"}>
      <Button width={["100%", "auto"]} mr={[0, 3]} mb={[3, 0]}>
        Design
      </Button>
    </RimbleGatsbyLink>

    <RimbleGatsbyLink to={"develop"}>
      <Button.outline width={["100%", "auto"]}>Develop</Button.outline>
    </RimbleGatsbyLink>
  </header>
);

export default Header;
