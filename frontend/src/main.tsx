import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { ChakraProvider } from "@chakra-ui/react"
import { TripsContextProvider } from "./context/TripsContext.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
	<TripsContextProvider>
		<ChakraProvider>
			<App />
		</ChakraProvider>
	</TripsContextProvider>
)
