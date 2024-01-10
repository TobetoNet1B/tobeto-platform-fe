import Homepage from "pages/Homepage";
import NotFound from "pages/NotFound";
import Platform from "pages/Platform/Platform";
import SignInPage from "pages/SignInPage/SignInPage";
import SignUpPage from "pages/SignUpPage/SignUpPage";
import React from "react";
import {Route, Routes} from "react-router-dom";

type Props = {};

const RouteDefinitions = (props: Props) => {
	return (
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="*" element={<NotFound />} />
			<Route path="/giris" element={<SignInPage />} />
			<Route path="/kayit-ol" element={<SignUpPage />} />
			<Route path="/platform" element={<Platform/>} />
		</Routes>
	);
};

export default RouteDefinitions;