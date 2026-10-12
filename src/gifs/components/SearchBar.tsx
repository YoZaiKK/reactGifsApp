import { useEffect, useState } from "react";

interface Props {
	placeholder?: string;
	onQuery: (query: string) => void;
}

export const SearchBar = ({ placeholder = "Buscar", onQuery }: Props) => {
	const [query, setQuery] = useState("");

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			onQuery(query);
		}, 500);
		return () => {
			clearTimeout(timeoutId);
		};
	}, [query]);

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
