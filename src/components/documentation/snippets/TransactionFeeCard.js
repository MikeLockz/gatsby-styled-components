import React from "react";
import { Flex, Box, Card, Heading, Text, Button } from "rimble-ui";

const TransactionFeeCard = ({ ...props }) => {
  return (
    <Card width={"600px"} mx={"auto"} px={4}>
      <Heading>What's a transaction fee?</Heading>
      <Text mb={4}>
        Every blockchain action requires a fee. This pays for someone in the
        network to update the blockchain. It doesn’t go to us. Be sure to save
        some ETH aside for fees.
      </Text>
      <Flex>
        <Box width={1 / 2}>
          <Button.Text>Cancel</Button.Text>
        </Box>
        <Box width={1 / 2}>
          <Button.Outline mr={3} disabled>
            Previous
          </Button.Outline>
          <Button mr={3}>Next</Button>
        </Box>
      </Flex>
    </Card>
  );
};

export default TransactionFeeCard;
