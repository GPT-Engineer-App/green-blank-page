import { Box, Text, Image } from "@chakra-ui/react";

const animations = {
  "@keyframes blinker": {
    "0%": { opacity: 1 },
    "50%": { opacity: 0 },
    "100%": { opacity: 1 },
  },
  "@keyframes flyAcross": {
    "0%": { transform: "translateX(0)" },
    "100%": { transform: "translateX(100vw)" },
  },
  blink: {
    animation: "blinker 1.5s linear infinite",
  },
  flyAcross: {
    animation: "flyAcross 5s linear infinite",
    position: "absolute",
    bottom: "20%",
  },
};

const Index = () => {
  return (
    <Box bg="green" minH="100vh" display="flex" alignItems="center" justifyContent="center">
      <Image src="🐦" css={animations.flyAcross} boxSize="50px" />
      <Text fontSize="6xl" color="yellow" css={animations.blink}>
        Hello
      </Text>
    </Box>
  );
};

export default Index;
