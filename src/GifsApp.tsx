import { DisplayGifs } from "./gifs/components/DisplayGifs";
import { PreviousGifs } from "./gifs/components/PreviousGifs";
import { SearchBar } from "./gifs/components/SearchBar";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";

const title = "Buscador de Gifs";
const description = "Descubre y comparte el gif perfecto";

export const GifsApp = () => {
	return (
		<>
			<CustomHeader title={title} description={description} />

			{/* Search */}
			<SearchBar placeholder="Buscar gifs..." />

			<PreviousGifs />

			{/* Gifs */}
			<DisplayGifs gifs={mockGifs} />
		</>
	);
};
