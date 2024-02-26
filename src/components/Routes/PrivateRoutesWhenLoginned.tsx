import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom"
import { SelectIsAuthenticated } from "store/Auth/AuthSlice";

type Props = {}

const PrivateRoutesWhenLoginned = (props: Props) => {

	const isAuthenticated = useSelector(SelectIsAuthenticated);

	return (
		!isAuthenticated ? <Outlet /> : <Navigate to="/platform" />
	)
}

export default PrivateRoutesWhenLoginned