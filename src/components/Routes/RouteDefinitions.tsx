import Homepage from "pages/Homepage/Homepage";
import NotFound from "pages/NotFound";
import Platform from "pages/Platform/Platform";
import SignInPage from "pages/SignInPage/SignInPage";
import SignUpPage from "pages/SignUpPage/SignUpPage";
import React from "react";
import {Route, Routes} from "react-router-dom";
import ModuleSet from "pages/ModuleSet/ModuleSet";

import Test from "pages/Homepage/test";
import Text2 from "pages/Homepage/text2";

type Props = {};

const RouteDefinitions = (props: Props) => {
	return (
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="*" element={<NotFound />} />
			<Route path="/giris" element={<SignInPage />} />
			<Route path="/kayit-ol" element={<SignUpPage />} />
			<Route path="/test" element={<Test/>} />
			<Route path="/text2" element={<Text2/>} />
			<Route path="/platform" element={<Platform/>} />
			<Route path="/moduleset" element={<ModuleSet/>} />
		</Routes>
	);
};

export default RouteDefinitions;