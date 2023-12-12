import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import RootLayout from "./layouts/RootLayout"
import Trip from "./pages/Trip"

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Dashboard />} />
			<Route path=":id" element={<Trip />} />
		</Route>
	)
)

export default function App() {
	return <RouterProvider router={router} />
}
