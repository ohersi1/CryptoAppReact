import axios from "axios";
import React, { useState, useEffect } from "react";
import Coins from "./components/Coins";

function App() {
	const [coins, setCoins] = useState([]);
	const url =
		"https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en";

	useEffect(() => {
		axios
			.get(url)
			.then((response) => {
				setCoins(response.data);
				console.log(response.data[0]);
			})

			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<>
			<Coins coins={coins}/>
		</>
	);
}

export default App;
