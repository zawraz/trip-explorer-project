import { StarIcon } from "@chakra-ui/icons"
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

type TripCard = {
	id: number
	title: string
	bgImg: string
	countries: string[]
	days: number
	emissionsOffset: number
	tripRating: number
}

export default function TripCard({
	id,
	title,
	bgImg,
	countries,
	days,
	emissionsOffset,
	tripRating,
}: TripCard) {
	return (
		<Box
			bgColor={"white"}
			boxShadow={"lg"}
			p={3}
			borderRadius={13}
			color={"white"}
			fontSize={"sm"}
		>
			<Flex
				direction={"column"}
				alignItems={"center"}
				justifyContent={"space-between"}
				minH={270}
				minW={270}
				bgColor={"gray.300"}
				bgImage={bgImg}
				borderRadius={10}
				boxShadow={"inset 0px 25px 150px 5px black"}
				textAlign={"center"}
			>
				<Box>
					<Heading mt={7} mb={1} fontSize={{ base: "md", lg: "lg" }}>
						{title}
					</Heading>
					<Text fontSize={{ base: "smaller", lg: "sm" }}>
						{countries.length} Countries, {days} Days
					</Text>
				</Box>
				<Button size={"md"} colorScheme="blue" w={"33%"}>
					<Link to={`${id}`}>Learn more</Link>
				</Button>

				<Flex
					bgColor={"blue.900"}
					p={3}
					w={"80%"}
					justifyContent={"space-between"}
					borderRadius={13}
				>
					<Text>Emissions offset:</Text>
					<Text>
						{Math.round(emissionsOffset)} kg CO<sub>2</sub>e
					</Text>
				</Flex>
				<Flex
					bgColor={"white"}
					color={"black"}
					p={3}
					w={"80%"}
					justifyContent={"space-between"}
					fontWeight={"bold"}
					borderTopRadius={13}
				>
					<Text>Trip rating</Text>
					<Flex alignItems={"center"} gap={1}>
						<StarIcon color={"gold"} />
						<StarIcon color={"gold"} />
						<StarIcon color={"gold"} />
						<StarIcon color={"gold"} />
						<StarIcon color={"gold"} />
						{tripRating}
					</Flex>
				</Flex>
			</Flex>
		</Box>
	)
}
