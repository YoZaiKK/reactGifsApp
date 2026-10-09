import { useState } from "react";
import { DisplayGifs } from "./gifs/components/DisplayGifs";
import { PreviousGifs } from "./gifs/components/PreviousGifs";
import { SearchBar } from "./gifs/components/SearchBar";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";

const title = "Buscador de Gifs";
const description = "Descubre y comparte el gif perfecto";
const searchPlaceholder = "Buscar gifs...";

export const GifsApp = () => {
	const [previousSearches, setPreviousSearches] = useState(["Goku"]);

	const handleTermClicked = (term: string) => {
		console.log({ term });
	};
	return (
		<>
			{/* Header */}
			<CustomHeader title={title} description={description} />

			{/* Search */}
			<SearchBar placeholder={searchPlaceholder} />

			{/* Previous Searches */}
			<PreviousGifs
				searches={previousSearches}
				onLabelClicked={handleTermClicked}
			/>

			{/* Gifs */}
			<DisplayGifs gifs={mockGifs} />
		</>
	);
};
