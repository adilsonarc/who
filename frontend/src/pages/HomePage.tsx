import {useState} from "react";
import SearchBar from "../components/search-bar/SearchBar";
import SearchTable from "../components/search-table/SearchTable";
import ErrorNotification from "../components/error-notification/ErrorNotification";
import ProfileDto from "../services/ProfileDto";

interface HomePageProps {
    headerHeight: number;
}

export default function HomePage({headerHeight}: HomePageProps) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<ProfileDto[] | null>(null);
    const [error, setError] = useState(false);

    return (
        <>
            <SearchBar loading={loading} setLoading={setLoading} setData={setData} setError={setError}/>
            <SearchTable headerHeight={headerHeight} data={data} loading={loading}/>
            {error && <ErrorNotification/>}
        </>
    );
}