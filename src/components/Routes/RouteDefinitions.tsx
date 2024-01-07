import Homepage from "pages/Homepage/Homepage";
import NotFound from "pages/NotFound";
import React from "react";
import {Route, Routes} from "react-router-dom";

import Test from "pages/Homepage/test";
import Text2 from "pages/Homepage/text2";

type Props = {};

const RouteDefinitions = (props: Props) => {
	return (
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="*" element={<NotFound />} />
			<Route path="/test" element={<Test/>} />
			<Route path="/text2" element={<Text2/>} />
		</Routes>
	);
};

export default RouteDefinitions;