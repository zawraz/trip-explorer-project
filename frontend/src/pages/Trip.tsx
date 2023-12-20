import {
	Box,
	Divider,
	Flex,
	Grid,
	GridItem,
	Heading,
	Image,
	ListItem,
	SimpleGrid,
	Text,
	UnorderedList,
} from "@chakra-ui/react"
import { Link, useParams } from "react-router-dom"
import useTripsContext from "../hooks/useTripsContext"
import {
	AtSignIcon,
	CheckCircleIcon,
	CheckIcon,
	InfoIcon,
} from "@chakra-ui/icons"

export default function Trip() {
	const { id } = useParams()
	const { allTrips } = useTripsContext()

	const {
		title,
		subtitle,
		photoUrl,
		days,
		co2kilograms,
		countries,
		advantages,
	} = allTrips.find((trip) => trip.id === Number(id))!

	const icons = [
		<CheckCircleIcon boxSize={7} mx={2} />,
		<CheckIcon boxSize={7} mx={2} />,
		<AtSignIcon boxSize={7} mx={2} />,
		<InfoIcon boxSize={7} mx={2} />,
	]

	return (
		<>
			<Box
				as={"button"}
				textDecoration={"underline"}
				color={"gray"}
				mt={3}
				mb={10}
			>
				<Link to={`/`}>Go back</Link>
			</Box>
			<Flex
				direction={"column"}
				maxW={"5xl"}
				bg={"gray.100"}
				alignItems={{ base: "center", lg: "flex-start" }}
				gap={1}
			>
				<Heading>{title}</Heading>
				<Text>{subtitle}</Text>
			</Flex>

			<Flex
				justifyContent={"space-between"}
				direction={{ base: "column", lg: "row" }}
				alignItems={{ base: "center", lg: "flex-start" }}
				mt={7}
			>
				<Box
					boxSize={{ base: "sm", lg: "2xl" }}
					h={{ base: "200px", lg: "sm" }}
				>
					<Image src={photoUrl} alt={title} borderRadius={13} />
				</Box>
				<Flex
					direction={"column"}
					justifyContent={"space-between"}
					gap={5}
					p={13}
					bg={"white"}
					borderRadius={13}
					width={"25%"}
					minH={"max-content"}
					minW={{ base: "sm", lg: "max-content" }}
				>
					<Box>
						<Heading fontSize={{ base: "lg", lg: "xl" }} pb={1}>
							{days} days
						</Heading>
						<Text fontSize={"sm"} fontWeight={"bold"} color={"gray.500"}>
							Emissions: {Math.round(co2kilograms)} kg CO<sub>2</sub>e
						</Text>
					</Box>
					<Divider orientation="horizontal" />
					<Box>
						<Text
							textAlign={"left"}
							fontSize={"sm"}
							fontWeight={"bold"}
							color={"gray.500"}
						>
							Countries included:
						</Text>
						<UnorderedList>
							<SimpleGrid spacing={0} minChildWidth={"50%"}>
								{countries?.map((country) => (
									<ListItem fontSize={"sm"} color={"gray.500"}>
										{country}
									</ListItem>
								))}
							</SimpleGrid>
						</UnorderedList>
					</Box>
				</Flex>
			</Flex>

			<Text
				fontSize={"sm"}
				fontWeight={"bold"}
				color={"gray.500"}
				textAlign={{ base: "center", lg: "left" }}
				mt={{ base: 5, lg: 0 }}
			>
				Overview
			</Text>

			<Flex justifyContent={{ base: "center", lg: "left" }}>
				<Grid
					mt={13}
					minH={"max-content"}
					w={{ base: "sm", lg: "2xl" }}
					templateRows={{ base: "repeat(4, 1fr)", lg: "repeat(2, 1fr)" }}
					templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
					gap={5}
				>
					{advantages.map((advantage, index) => (
						<GridItem>
							<Flex>
								{icons[index]}
								<Box>
									<Heading fontSize={{ base: "lg", lg: "xl" }}>
										{advantage.title}
									</Heading>
									<Text color={"gray.500"}>{advantage.description}</Text>
								</Box>
							</Flex>
						</GridItem>
					))}
				</Grid>
			</Flex>
			<Flex justifyContent={{ base: "center", lg: "left" }}>
				<Text w={{ base: "sm", lg: "2xl" }} my={10} textAlign={"justify"}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat
					risus vitae dapibus venenatis. Sed ac nisl ac nulla aliquet commodo
					eget at dui. Etiam sit amet erat elementum, ornare nunc a, condimentum
					sem. Cras at cursus orci. Cras arcu dui, aliquet quis ex a, porttitor
					dictum odio. Pellentesque a nulla ligula. Mauris scelerisque sed metus
					sed dapibus. Curabitur rhoncus maximus ligula tempor egestas.
				</Text>
			</Flex>
		</>
	)
}
