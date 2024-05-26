import {Box, Table} from "@mantine/core";
import SearchResults from "../search-results/SearchResults";
import TableLoading from "../table-loading/TableLoading";
import ProfileDto from "../../services/ProfileDto";

interface SearchResultsProps {
    headerHeight: number;
    data: ProfileDto[] | null;
    loading: boolean;
}

export default function SearchTable({headerHeight, data, loading}: SearchResultsProps) {
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
                        {data && <SearchResults data={data}/>}
                    </Table.Tbody>
                </Table>
            </Box>
        </div>
    );
}