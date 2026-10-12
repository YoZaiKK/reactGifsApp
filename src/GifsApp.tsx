import { useState } from "react";
import { DisplayGifs } from "./gifs/components/DisplayGifs";
import { PreviousGifs } from "./gifs/components/PreviousGifs";
import { SearchBar } from "./gifs/components/SearchBar";
// import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";

const title = "Buscador de Gifs";
const description = "Descubre y comparte el gif perfecto";
const searchPlaceholder = "Buscar gifs...";

export const GifsApp = () => {
	const [previousSearches, setPreviousSearches] = useState([]);
	const [gifs, setGifs] = useState([]);

	const handleTermClicked = (term: string) => {
		console.log({ term });
	};

	const handleSearch = async (query: string) => {
		const q = query.trim().toLocaleLowerCase();

		if (q === "") {
			return;
		}
		if (!previousSearches.includes(q)) {
			setPreviousSearches([q, ...previousSearches.slice(0, 7)]);
		}
		setGifs(await getGifsByQuery(q));
	};

	return (
		<>
			{/* Header */}
			<CustomHeader title={title} description={description} />

			{/* Search */}
			<SearchBar placeholder={searchPlaceholder} onQuery={handleSearch} />

			{/* Previous Searches */}
			<PreviousGifs
				searches={previousSearches}
				onLabelClicked={handleTermClicked}
			/>

			{/* Gifs */}
			<DisplayGifs gifs={gifs} />
		</>
	);
};
