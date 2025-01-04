import { useContext, useState } from 'react';
import "./Search.css"
import Image from "next/image";

const SearchMarkers = ({ markers, handleZoom }) => {
	const [query, setQuery] = useState("");
	const [filteredMarkers, setFilteredMarkers] = useState([]);
	const [isFocused, setIsFocused] = useState(false);

	const handleFocus = () => {
		setIsFocused(true);
	};

	const handleBlur = () => {
		setIsFocused(false);
	};

	const handleInputChange = (e) => {
		const input = e.target.value;
		setQuery(input);

		if (input.trim() === "") {
			setFilteredMarkers([]);
		} else {
			const results = markers.filter((marker) =>
				marker.title.toLowerCase().includes(input.toLowerCase())
			);
			setFilteredMarkers(results);
		}
	};

	return (
		<div className='search'>
			<input
				onFocus={handleFocus}
				onBlur={handleBlur}
				type="text"
				value={query}
				onChange={handleInputChange}
				placeholder="Знайти відділення..."
				className='search__input'
			/>
			{filteredMarkers.length > 0 && isFocused && (
				<ul
					className='search__list'
				>
					{filteredMarkers.map((marker) => (
						<li
							key={marker.id}
							className="search__item"
							onClick={() => handleZoom(marker.lat, marker.lng)}
						>
							<span>{marker.title}</span>
							<Image
								src="images/map/location.svg"
								width={28}
								height={28}
								alt="marker"
							/>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default SearchMarkers;