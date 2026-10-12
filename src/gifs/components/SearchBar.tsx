import { useState } from "react";

interface Props {
	placeholder?: string;
	onQuery: (query: string) => void;
}

export const SearchBar = ({ placeholder = "Buscar", onQuery }: Props) => {
	const [query, setQuery] = useState("");
	const handleSearch = () => {
		onQuery(query);
		setQuery("");
	};

	const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			handleSearch();
		}
	};

	return (
		<div className="search-container">
			<input
				type="text"
				placeholder={placeholder}
				value={query}
				onChange={(event) => setQuery(event.target.value)}
				onKeyDown={handleEnter}
			/>
			<button onClick={handleSearch}>Buscar</button>
		</div>
	);
};
