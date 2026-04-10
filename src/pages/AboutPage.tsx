import TechItem from "@/components/about-page/TechItem";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Separator,
  Link,
} from "@chakra-ui/react";

const AboutPage = () => {
  return (
    <Box bg="gray.900" color="gray.100" minH="100vh" py={12}>
      <Container maxW="4xl">
        <VStack gap={12} align="stretch">
          <VStack gap={4} textAlign="center">
            <Heading size="3xl" letterSpacing="tight">
              Movies Explorer
            </Heading>
            <Text fontSize="xl" color="gray.400" maxW="2xl">
              A modern movie discovery platform built as a portfolio
              demonstration project.
            </Text>
          </VStack>

          <Separator borderColor="gray.700" />

          <Box>
            <Heading size="lg" mb={4}>
              About This Project
            </Heading>
            <Text fontSize="lg" color="gray.300" lineHeight="tall">
              Movies Explorer is a fully functional front-end application
              created as a **portfolio piece** to showcase modern React
              development practices, clean architecture, and beautiful UI design
              using the latest tools and libraries.
            </Text>
            <Text mt={4} color="gray.400">
              It is not a production service — there is no backend, user
              authentication, or persistent data. All movie data is fetched from
              The Movie Database (TMDB) API.
            </Text>
          </Box>

          <Box>
            <Heading size="lg" mb={6}>
              Built With
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
              <VStack align="start" gap={5}>
                <TechItem
                  title="React 19"
                  description="Latest version with improved performance and new compiler features"
                />
                <TechItem
                  title="TypeScript"
                  description="Full type safety and better developer experience"
                />
                <TechItem
                  title="Chakra UI v3.34"
                  description="Modern component library with excellent theming and accessibility"
                />
                <TechItem
                  title="TanStack Query v5"
                  description="Powerful data fetching, caching, and infinite scrolling"
                />
                <TechItem
                  title="Zustand"
                  description="Lightweight and fast global state management"
                />
              </VStack>

              <VStack align="start" gap={5}>
                <TechItem
                  title="React Router v7"
                  description="File-based routing and modern navigation"
                />
                <TechItem
                  title="Vite"
                  description="Blazing fast build tool and development server"
                />
                <TechItem
                  title="Axios"
                  description="Clean API client for TMDB integration"
                />
                <TechItem
                  title="React Infinite Scroll"
                  description="Smooth infinite loading experience"
                />
                <TechItem
                  title="React Icons"
                  description="Beautiful and consistent iconography"
                />
              </VStack>
            </SimpleGrid>
          </Box>

          <Separator borderColor="gray.700" />

          <Box>
            <Heading size="lg" mb={6}>
              What This Project Demonstrates
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
              <Box bg="gray.800" p={6} borderRadius="xl">
                <Text fontWeight="semibold" mb={3} color="purple.400">
                  Modern Architecture
                </Text>
                <Text color="gray.300">
                  Clean folder structure, custom hooks, centralized state
                  management, and proper separation of concerns.
                </Text>
              </Box>

              <Box bg="gray.800" p={6} borderRadius="xl">
                <Text fontWeight="semibold" mb={3} color="purple.400">
                  Performance Focused
                </Text>
                <Text color="gray.300">
                  Infinite scrolling, smart caching with TanStack Query, and
                  optimized re-renders using Zustand selectors.
                </Text>
              </Box>

              <Box bg="gray.800" p={6} borderRadius="xl">
                <Text fontWeight="semibold" mb={3} color="purple.400">
                  Great UX/UI
                </Text>
                <Text color="gray.300">
                  Responsive design, smooth interactions, dark theme, and
                  attention to detail in every component.
                </Text>
              </Box>

              <Box bg="gray.800" p={6} borderRadius="xl">
                <Text fontWeight="semibold" mb={3} color="purple.400">
                  Type Safety
                </Text>
                <Text color="gray.300">
                  Full TypeScript coverage with strict types for API responses,
                  state, and routing.
                </Text>
              </Box>
            </SimpleGrid>
          </Box>

          <Separator borderColor="gray.700" />

          <VStack textAlign="center" color="gray.500" fontSize="sm">
            <Text>
              This is a demonstration portfolio project. No commercial use
              intended.
            </Text>
            <Text>
              All movie data provided by{" "}
              <Link
                href="https://www.themoviedb.org/"
                target="_blank"
                color="purple.400"
                _hover={{ textDecoration: "underline" }}
              >
                The Movie Database (TMDB)
              </Link>
            </Text>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default AboutPage;
