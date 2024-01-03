import Homepage from "pages/Homepage/Homepage";
import NotFound from "pages/NotFound";
import SignInPage from "pages/SignInPage/SignInPage";
import React from "react";
import {Route, Routes} from "react-router-dom";

type Props = {};

const RouteDefinitions = (props: Props) => {
	return (
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="*" element={<NotFound />} />
			<Route path="/giris" element={<SignInPage />} />
		</Routes>
	);
};

export default RouteDefinitions;