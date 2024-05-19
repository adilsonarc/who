import {useState} from "react";
import SearchBar from "../components/search-bar/SearchBar";
import SearchResults from "../components/search-results/SearchResults";

export default function HomePage({headerHeight}) {

    const [isLoading, setIsLoading] = useState(false);
    const [searchResult, setSearchResult] = useState([]);

    return (
        <>
            <SearchBar setIsLoading={setIsLoading} setSearchResult={setSearchResult}/>
            <SearchResults isLoading={isLoading} searchResult={searchResult} headerHeight={headerHeight}/>
        </>
    );
}