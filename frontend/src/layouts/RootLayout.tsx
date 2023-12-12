import { Container } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"

export default function RootLayout() {
	return (
		<Container maxW={"5xl"} bg={"gray.100"}>
			<Outlet />
		</Container>
	)
}
