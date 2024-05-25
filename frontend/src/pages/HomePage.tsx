import {useState} from "react";
import SearchBar from "../components/search-bar/SearchBar";
import SearchTable from "../components/search-table/SearchTable";

interface HomePageProps {
    headerHeight: number;
}

export default function HomePage({headerHeight}: HomePageProps) {
    const [searchInput, setSearchInput] = useState('');

    function handleSearchInputChange(value: string) {
        setSearchInput(value);
    }

    return (
        <>
            <SearchBar handleSearchInputChange={handleSearchInputChange}/>
            <SearchTable headerHeight={headerHeight} searchInput={searchInput}/>
        </>
    );
}