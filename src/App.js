/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback, useRef } from "react";
import "./App.css";

function App() {
	const [arr, setArr] = useState([
		{ text: "BMW M5 F10 , 4.4L , 560 HP", image: "bmw-m5-f10" },
		{ text: "RANGE ROVER AUTOBIOGRAPHY , 4.4L , 530 HP", image: "Rangeroverautobio" },
		{ text: "FORD FUSION , 2.0L , 245 HP", image: "Fordfusion" },
		{ text: "VOLKSWAGEN GOLF IV , 1.9TDI , 130 HP", image: "VolkswagenGolf" },
		{ text: "TOYOTA CAMRY (XV70) , 3.5L , 305 HP", image: "Toyotacamry70" },
		{ text: "VOLKSWAGEN PASSAT B8 , 2.0 TDI , 150 HP", image: "Passatb8" },
		{ text: "BMW 530 E39 , 3.0i , 228 HP", image: "Bmw530e39" },
		{ text: "MITSUBISHI LANCER EVOLUTION , 2.0L , 295 HPP", image: "LancerEvolution" },
		{ text: "SKODA OCTAVIA A5 RS , 2.0L , 200 HP", image: "SkodaOctaviaRs" },
		{ text: "BMW 330 CI E46 , 3.0L , 225 HP", image: "Bmw330iE46" },
		{ text: "FORD F-350 , 7.3L , 430 HP", image: "FordF350" },
		{ text: "TOYOTA LAND CRUISER , 4.5D , 250 HP", image: "LandCruiser" },
		{ text: "AUDI A6 C7 , 3.0 TDI , 245 HP", image: "AudaA6C7" },
		{ text: "MERCEDES-BENZ S-CLASS , 4.6L , 455 HP", image: "Mercedesbenzs-class" },
		{ text: "PORSCHE CAYENNE , 3.0L , 340 HP", image: "PorsheCayenne" },
		{ text: "BMW M5 E60 , 5.0L , 507 HP", image: "BmwM5E60" },
		{ text: "CHEVROLET MALIBU , 1.5L , 170 HPP", image: "ChevroletMalibu" },
		{ text: "MAZDA 6 , 2.5L , 194 HP", image: "Mazda6" },
		{ text: "VOLVO XC90 , 2.0L , 320 HP", image: "VolvoXC90" },
		{ text: "LEXUS LX 570 , 5.7L , 383 HP", image: "LexusLX570" },
		{ text: "ALFA ROMEO 159 , 3.2L , 260 HP", image: "Alfaromeo" },
		{ text: "NISSAN MICRA , 1.4L , 88 HP", image: "NissanMicra" },
		{ text: "DACIA DUSTER , 1.6L , 105 HP", image: "DaciaDuster" },
		{ text: "RENAULT MEGANE , 1.3i , 140 HP", image: "RenaultMegane" },
		{ text: "FERRARI CALIFORNIA , 3.9L , 560 HP", image: "Ferrari" },
		{ text: "FORD EXPLORER , 3.0L , 370 HP", image: "FordExplorer" },
	]);

	const [colors, setColors] = useState([
		"#ffa500",
		"#278100",
		"#fa6a64",
		"#373715",
		"#755dff",
		"#a09ad1",
		"#282f73",
		"#8a33el",
		"#fb4d46",
	]);

	const [arrRender, setArrRender] = useState([]);
	const [value, setValue] = useState("");
	const [prevColor, setPrevColor] = useState("");

	const handleKeyDown = useCallback(
		e => {
			if (e.key === "Enter") {
				const newArrRender = [...arrRender];
				const car = getRandomObjectFromArray(arr);
				let color = getRandomObjectFromArray(colors);

				if (color === prevColor) {
					color = getRandomObjectFromArray(colors);
				}

				setPrevColor(color);

				newArrRender.push({
					name: value,
					text: car.text,
					image: car.image,
					color,
				});
				setArrRender(newArrRender);
				setValue("");
			}
		},
		[arr, arrRender, value],
	);

	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [handleKeyDown]);

	useEffect(() => {
		const element = document.getElementById(`models`);

		if (!!element) {
			element.scrollIntoView({ block: "end", behavior: "smooth" });
		}
	});

	function getRandomObjectFromArray(array) {
		if (array.length === 0) {
			return null;
		}

		const randomIndex = Math.floor(Math.random() * array.length);

		return array[randomIndex];
	}

	return (
		<div className="App">
			<div className="models" id={"models"}>
				{arrRender.map((el, i) => {
					return (
						<div className="model" key={i} id={`model-${i}`} style={{ backgroundColor: el.color }}>
							<div className="name">{el.name}</div>
							<div className="car">
								<div className="image" style={{ backgroundImage: `url(static/${el.image}.jpg)` }} />
								<h4>{el.text}</h4>
							</div>
						</div>
					);
				})}
			</div>
			<div className="inputContainer">
				<input type="text" name="" id="" value={value} onChange={e => setValue(e.target.value)} />
			</div>
		</div>
	);
}

export default App;
