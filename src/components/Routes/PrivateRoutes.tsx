import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom"
import { SelectIsAuthenticated } from "store/Auth/AuthSlice";

type Props = {}

const PrivateRoutes = (props: Props) => {

	const isAuthenticated = useSelector(SelectIsAuthenticated);

	return (
		isAuthenticated ? <Outlet /> : <Navigate to="/giris" />
	)
}

export default PrivateRoutes