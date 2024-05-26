import {useState} from "react";
import SearchBar from "../components/search-bar/SearchBar";
import SearchTable from "../components/search-table/SearchTable";
import ErrorNotification from "../components/error-notification/ErrorNotification";

interface HomePageProps {
    headerHeight: number;
}

export default function HomePage({headerHeight}: HomePageProps) {
    const [searchInput, setSearchInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    return (
        <>
            <SearchBar setSearchInput={setSearchInput} loading={loading}/>
            <SearchTable headerHeight={headerHeight} searchInput={searchInput} setError={setError} loading={loading} setLoading={setLoading}/>
            {error && <ErrorNotification/>}
        </>
    );
}