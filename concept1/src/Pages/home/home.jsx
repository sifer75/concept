import { useEffect, useState } from "react";
import "./Home.css";

function Home(){
	const [start,setStart] = useState(true);
	useEffect(() => {
		const timeout = setTimeout(() => {
			setStart(!start);
		}, 2000)

		return () => {
			clearTimeout(timeout);
		}
	},[])
	return (
		<>
			{!start && 
				<div className="page">
					<div className="element">OKOKOOKOKOKOK</div>
				</div>
			}
		</>
	);
}

export default Home;