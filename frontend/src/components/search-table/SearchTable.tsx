import {Box, Table} from "@mantine/core";
import SearchResults from "../search-results/SearchResults";
import {isNotBlank} from "../../utlis/StringUtils";

interface SearchResultsProps {
    headerHeight: number;
    searchInput: string;
}

export default function SearchTable({headerHeight, searchInput}: SearchResultsProps) {
    const content = isNotBlank(searchInput) ? <SearchResults searchInput={searchInput}/> : <></>
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
                        {content}
                    </Table.Tbody>
                </Table>
            </Box>
        </div>
    );
}