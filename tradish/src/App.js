import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';

function App() {
  return (
    <Box bg="orange.50" minH="100vh" py={12} px={6}>
      <VStack spacing={6} textAlign="center">
        <Heading size="2xl">traDish</Heading>
        <Text fontSize="lg" maxW="xl">
          Share the recipes and food traditions passed down through generations.
        </Text>
        <Button colorScheme="orange" size="lg">
          Add a Recipe
        </Button>
      </VStack>
    </Box>
  );
}

export default App;