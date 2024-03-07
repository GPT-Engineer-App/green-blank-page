import { Box, Text } from "@chakra-ui/react";

const blink = {
  "@keyframes blinker": {
    "0%": { opacity: 1 },
    "50%": { opacity: 0 },
    "100%": { opacity: 1 },
  },
  animation: "blinker 1.5s linear infinite",
};

const Index = () => {
  return (
    <Box bg="green" minH="100vh" display="flex" alignItems="center" justifyContent="center">
      <Text fontSize="6xl" color="yellow" css={blink}>
        Hello
      </Text>
    </Box>
  );
};

export default Index;
