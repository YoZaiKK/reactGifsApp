import { mockGifs, type Gif } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";

const title = "Buscador de Gifs";
const description = "Descubre y comparte el gif perfecto";

export const GifsApp = () => {
	return (
		<>
			<CustomHeader title={title} description={description} />

			{/* Search */}
			<div className="search-container">
				<input type="text" placeholder="Buscar gifs..." />
				<button>Buscar</button>
			</div>

			{/* Busquedas previas */}
			<div className="previous-searches">
				<h2>Busquedas previas</h2>
				<ul className="previous-searches-list">
					<li>Goku</li>
					<li>Saitama</li>
					<li>Miku</li>
					<li>Pandas</li>
				</ul>
			</div>

			{/* Gifs */}
			<div className="gifs-container">
				{mockGifs.map((gif: Gif) => (
					<div key={gif.id} className="gif-card">
						<img src={gif.url} alt={gif.title} />
						<h3>{gif.title}</h3>
						<p>
							{gif.width} x {gif.height} (size in MB)
						</p>
					</div>
				))}
			</div>
		</>
	);
};
