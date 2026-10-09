import type { Gif } from "../../mock-data/gifs.mock";

interface Props {
	gifs: Gif[];
}

export const DisplayGifs = ({ gifs }: Props) => {
	return (
		<div className="gifs-container">
			{gifs.map((gif: Gif) => (
				<div key={gif.id} className="gif-card">
					<img src={gif.url} alt={gif.title} />
					<h3>{gif.title}</h3>
					<p>
						{gif.width} x {gif.height} (size in MB)
					</p>
				</div>
			))}
		</div>
	);
};
