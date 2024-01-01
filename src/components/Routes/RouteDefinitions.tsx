import Homepage from "pages/Homepage/Homepage";
import NotFound from "pages/NotFound";
import React from "react";
import {Route, Routes} from "react-router-dom";

type Props = {};

const RouteDefinitions = (props: Props) => {
	return (
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default RouteDefinitions;