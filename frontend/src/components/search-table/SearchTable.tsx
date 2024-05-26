import {Box, Table} from "@mantine/core";
import SearchResults from "../search-results/SearchResults";
import TableLoading from "../table-loading/TableLoading";

interface SearchResultsProps {
    headerHeight: number;
    searchInput: string;
    loading: boolean;
    setLoading: (error: boolean) => void;
    setError: (error: boolean) => void;
}

export default function SearchTable({headerHeight, searchInput, loading, setLoading, setError}: SearchResultsProps) {
    const isNotBlankInput = searchInput != null && searchInput.trim() !== '';
    return (
        <div>
            <Box pos="relative" mt="md">
                <Table striped stickyHeader stickyHeaderOffset={headerHeight}>
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>Name</Table.Th>
                            <Table.Th>Profile</Table.Th>
                            <Table.Th>Timeframe</Table.Th>
                            <Table.Th>Link</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {loading && <TableLoading/>}
                        {isNotBlankInput && <SearchResults searchInput={searchInput} setError={setError} setLoading={setLoading}/>}
                    </Table.Tbody>
                </Table>
            </Box>
        </div>
    );
}