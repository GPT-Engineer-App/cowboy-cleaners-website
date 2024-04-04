import React from "react";
import { Box, Heading, Text, Button, Stack, Flex, Image, SimpleGrid, List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaCheck, FaPhone } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="blue.500" color="white" py={20}>
        <Box maxW="6xl" mx="auto" px={4}>
          <Heading as="h1" size="2xl" mb={4}>
            Fort Worth Cowboy Cleaners
          </Heading>
          <Text fontSize="xl" mb={8}>
            Professional cleaning services in Fort Worth, TX
          </Text>
          <Button colorScheme="white" size="lg">
            Get a Free Quote
          </Button>
        </Box>
      </Box>

      {/* Services Section */}
      <Box py={20}>
        <Box maxW="6xl" mx="auto" px={4}>
          <Heading as="h2" size="xl" mb={10}>
            Our Services
          </Heading>
          <SimpleGrid columns={[1, null, 3]} spacing={8}>
            <Box>
              <Image src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxob3VzZSUyMGNsZWFuaW5nfGVufDB8fHx8MTcxMjIzNDYxMnww&ixlib=rb-4.0.3&q=80&w=1080" alt="House Cleaning" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                House Cleaning
              </Heading>
              <Text>We provide thorough house cleaning services to keep your home spotless.</Text>
            </Box>
            <Box>
              <Image src="https://images.unsplash.com/photo-1577412647305-991150c7d163?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBjbGVhbmluZ3xlbnwwfHx8fDE3MTIyMzQ2MTN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Office Cleaning" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Office Cleaning
              </Heading>
              <Text>Our professional cleaners ensure a clean and productive work environment.</Text>
            </Box>
            <Box>
              <Image src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZWVwJTIwY2xlYW5pbmd8ZW58MHx8fHwxNzEyMjM0NjEzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Deep Cleaning" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Deep Cleaning
              </Heading>
              <Text>We offer deep cleaning services for a thoroughly clean home or office.</Text>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>

      {/* Why Choose Us Section */}
      <Box bg="gray.100" py={20}>
        <Box maxW="6xl" mx="auto" px={4}>
          <Heading as="h2" size="xl" mb={10}>
            Why Choose Fort Worth Cowboy Cleaners?
          </Heading>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={FaCheck} color="green.500" />
              Experienced and professional cleaners
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheck} color="green.500" />
              Eco-friendly cleaning products
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheck} color="green.500" />
              100% satisfaction guarantee
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheck} color="green.500" />
              Flexible scheduling
            </ListItem>
          </List>
        </Box>
      </Box>

      {/* Call to Action Section */}
      <Box bg="blue.500" color="white" py={20}>
        <Box maxW="6xl" mx="auto" px={4}>
          <Heading as="h2" size="xl" mb={4}>
            Ready for a Cleaner Space?
          </Heading>
          <Text fontSize="xl" mb={8}>
            Contact us today for a free quote!
          </Text>
          <Flex align="center">
            <Button colorScheme="white" size="lg" mr={4}>
              Get a Free Quote
            </Button>
            <Stack direction="row" align="center">
              <FaPhone />
              <Text>(817) 123-4567</Text>
            </Stack>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
