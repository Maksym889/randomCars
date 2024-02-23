/* eslint-disable no-sparse-arrays */
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
		{ text: "SKODA KODIAQ , 2.0L , 180 HP", image: "SKODA KODIAQ , 2.0L , 180 HP" },
		{ text: "TOYOTA RAV4 , 2.5L , 306 HP", image: "TOYOTA RAV4 , 2.5L , 306 HP" },
		{ text: "MITSUBISHI OUTLANDER , 2.5L , 184 HP", image: "MITSUBISHI OUTLANDER , 2.5L , 184 HP" },
		{ text: "SKODA OCTAVIA , 1.5L , 150 HP", image: "SKODA OCTAVIA , 1.5L , 150 HP" },
		{ text: "NISSAN X-TRAIL , 1.5L , 213 HP", image: "NISSAN X-TRAIL , 1.5L , 213 HP" },
		{ text: "SUZUKI VITARA , 1.4L , 129 HP", image: "SUZUKI VITARA , 1.4L , 129 HP" },
		{ text: "PEUGEOT 3008 , 1.6L , 180 HP", image: "PEUGEOT 3008 , 1.6L , 180 HP" },
		{ text: "VOLKSWAGEN TIGUAN , 2.0L , 190 HP", image: "VOLKSWAGEN TIGUAN , 2.0L , 190 HP" },
		{ text: "MAZDA CX-30 , 2.0L , 180 HP", image: "MAZDA CX-30 , 2.0L , 180 HP" },
		{ text: "MITSUBISHI LANCER X , 2.0L , 150 HP", image: "MITSUBISHI LANCER X , 2.0L , 150 HP" },
		{ text: "VOLKSWAGEN TOUAREG , 3.0L , 381 HP", image: "VOLKSWAGEN TOUAREG , 3.0L , 381 HP" },
		{ text: "HYUNDAI STARIA , 3.5L , 272 HP", image: "HYUNDAI STARIA , 3.5L , 272 HP" },
		{ text: "AUDI RS6 , 4.0L , 600 HP", image: "AUDI RS6 , 4.0L , 600 HP" },
		{ text: "BMW M5 F90 , 4.4L , 635 HP", image: "BMW M5 F90 , 4.4L , 635 HP" },
		{ text: "BMW X5 F15 , 4.4L , 450 HP", image: "BMW X5 F15 , 4.4L , 450 HP" },
		{ text: "CITROEN C4 , 1.2L , 130 HP", image: "CITROEN C4 , 1.2L , 130 HP" },
		{ text: "AUDI A4 B8 , 2.0L , 225 HP", image: "AUDI A4 B8 , 2.0L , 225 HP" },
		{ text: "BMW 3 F30 , 3.0L , 306 HP", image: "BMW 3 F30 , 3.0L , 306 HP" },
		{ text: "AUDI Q7 , 3.0L , 333 HP", image: "AUDI Q7 , 3.0L , 333 HP" },
		{ text: "VOLKSWAGEN JETTA , 1.4L , 150 HP", image: "VOLKSWAGEN JETTA , 1.4L , 150 HP" },
		{ text: "DODGE CHALLENGER , 6.2L , 717 HP", image: "DODGE CHALLENGER , 6.2L , 717 HP" },
		{ text: "MERCEDES W211 , 3.5L , 272 HP", image: "MERCEDES W211 , 3.5L , 272 HP" },
		{ text: "MERCEDES CLS , 5.5L , 525 HP", image: "MERCEDES CLS , 5.5L , 525 HP" },
		{ text: "TOYOTA HILUX , 2.8L , 204 HP", image: "TOYOTA HILUX , 2.8L , 204 HP" },
		{ text: "LEXUS RX , 2.4L , 371 HP", image: "LEXUS RX , 2.4L , 371 HP" },
		{ text: "JEEP COMPASS , 1.3L , 240 HP", image: "JEEP COMPASS , 1.3L , 240 HP" },
		{ text: "SUZUKI JIMNY , 1.5L , 102 HP", image: "SUZUKI JIMNY , 1.5L , 102 HP" },
		{ text: "SKODA SUPERB , 2.0L , 272 HP", image: "SKODA SUPERB , 2.0L , 272 HP" },
		{ text: "NISSAN JUKE , 1.0L , 114 HP", image: "NISSAN JUKE , 1.0L , 114 HP" },
		{ text: "FIAT TIPO , 1.6L , 120 HP", image: "FIAT TIPO , 1.6L , 120 HP" },
		{ text: "FERRARI F8 SPIDER , 3.9L , 720 HP", image: "FERRARI F8 SPIDER , 3.9L , 720 HP" },
		{ text: "FERRARI 812 GTS , 6.5L , 800 HP", image: "FERRARI 812 GTS , 6.5L , 800 HP" },
		{ text: "BUGATTI DIVO , 8.0L , 1500 HP", image: "BUGATTI DIVO , 8.0L , 1500 HP" },
		{ text: "SUBARU CROSSTREK , 2.0L , 156 HP", image: "SUBARU CROSSTREK , 2.0L , 156 HP" },
		{ text: "OPEL ZAFIRA B , 1.8L , 140 HP", image: "OPEL ZAFIRA B , 1.8L , 140 HP" },
		{ text: "JAGUAR F-PACE , 5.0L , 550 HP", image: "JAGUAR F-PACE , 5.0L , 550 HP" },
		{ text: "RENAULT MEGANE , 2.0 , 140 HP", image: "RENAULT MEGANE , 2.0 , 140 HP" },
		{ text: "MCLAREN SPEEDTAIL , 4.0L , 1070 HP", image: "MCLAREN SPEEDTAIL , 4.0L , 1070 HP" },
		{ text: "KOENIGSEGG AGERA RS , 5.0L , 1160 HP", image: "KOENIGSEGG AGERA RS , 5.0L , 1160 HP" },
		{ text: "RENAULT MASTER , 2.3L , 145 HP", image: "RENAULT MASTER , 2.3L , 145 HP" },
		{ text: "MERCEDES G CLASS , 4.0L , 422 HP", image: "MERCEDES G CLASS , 4.0L , 422 HP" },
		{ text: "INFINITI QX50 , 2.0L , 272 HP", image: "INFINITI QX50 , 2.0L , 272 HP" },
		{ text: "VOLKSWAGEN T6 , 2.0L , 199 HP", image: "VOLKSWAGEN T6 , 2.0L , 199 HP" },
		{ text: "BMW M3 , 3.0L , 510 HP", image: "BMW M3 , 3.0L , 510 HP" },
		{ text: "FORD TRANSIT CONNECT , 1.5L , 100 HP", image: "FORD TRANSIT CONNECT , 1.5L , 100 HP" },
		{ text: "MERCEDES S CLASS , 3.0L , 435 HP", image: "MERCEDES S CLASS , 3.0L , 435 HP" },
		{ text: "LEXUS ES 350 , 3.5L , 309 HP", image: "LEXUS ES 350 , 3.5L , 309 HP" },
		{ text: "KIA STINGER , 3.3L , 370 HP", image: "KIA STINGER , 3.3L , 370 HP" },
		{ text: "VOLKSWAGEN ARTEON , 2.0L , 280 HP", image: "VOLKSWAGEN ARTEON , 2.0L , 280 HP" },
		{ text: "CHEVROLET CAMARO , 6.2L , 650 HP", image: "CHEVROLET CAMARO , 6.2L , 650 HP" },
		{ text: "TOYOTA GR SUPRA , 3.0L , 340 HP", image: "TOYOTA GR SUPRA , 3.0L , 340 HP" },
		{ text: "MERCEDES V CLASS , 2.0L , 190 HP", image: "MERCEDES V CLASS , 2.0L , 190 HP" },
		{ text: "HYUNDAI SONATA , 2.4L , 171 HP", image: "HYUNDAI SONATA , 2.4L , 171 HP" },
		{
			text: "MITSUBISHI EVOLUTION 9 , 2.0L , 280 HP",
			image: "MITSUBISHI EVOLUTION 9 , 2.0L , 280 HP",
		},
		{ text: "PORSCHE TAYCAN , 390 KW , 530 HP", image: "PORSCHE TAYCAN , 390 KW , 530 HP" },
		{ text: "TOYOTA SEQUOIA , 5.7L , 383 HP", image: "TOYOTA SEQUOIA , 5.7L , 383 HP" },
		{ text: "PORSCHE MACAN , 2.9L , 440 HP", image: "PORSCHE MACAN , 2.9L , 440 HP" },
		{ text: "VOLKSWAGEN GOLF GTI , 2.0L , 245 HP", image: "VOLKSWAGEN GOLF GTI , 2.0L , 245 HP" },
		{ text: "AUDI R8 , 5.2L , 610 HP", image: "AUDI R8 , 5.2L , 610 HP" },
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
						<div
							className="model"
							key={i}
							id={`model-${i}`}
							// style={{ backgroundColor: el.color }}
						>
							<div className="name">{el.name}</div>
							{/* <div className="car"></div> */}
							<div
								className="image"
								style={{
									backgroundImage: `url('${process.env.PUBLIC_URL}/images/${el?.image}.jpg')`,
								}}
							/>
							<h4>{el.text}</h4>
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
