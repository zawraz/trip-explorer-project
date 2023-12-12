import {
	Box,
	Button,
	Flex,
	Heading,
	Image,
	Spacer,
	Text,
} from "@chakra-ui/react"
import { Link, useParams } from "react-router-dom"
import useTripsContext from "../hooks/useTripsContext"

export default function Trip() {
	const { id } = useParams()
	const { allTrips } = useTripsContext()

	const { title, subtitle, photoUrl } = allTrips.find(
		(trip) => trip.id === Number(id)
	)!

	return (
		// TODO: finish the layout
		<Flex p={20} direction={"column"} maxW={"5xl"} bg={"gray.100"} gap={10}>
			<Button
				size={"md"}
				colorScheme="gray"
				w={"10%"}
				textDecoration={"underline"}
				color={"gray"}
			>
				<Link to={`/`}>Go back</Link>
			</Button>
			<Heading>{title}</Heading>
			<Text>{subtitle}</Text>
			<Flex>
				<Box boxSize={{ base: "sm", lg: "xl" }}>
					<Image src={photoUrl} alt={title} borderRadius={13} />
				</Box>
				<Spacer />
			</Flex>
		</Flex>
	)
}
