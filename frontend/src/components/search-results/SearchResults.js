
import Results from "../results/Results";
import Loading from "../loading/Loading";

export default function SearchResults({ isLoading, searchResult, headerHeight }) {

    if(isLoading) {
        return <Loading />;
    }

    return <Results searchResult={searchResult} headerHeight={headerHeight}/>
}