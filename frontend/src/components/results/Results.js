import {Table} from '@mantine/core';
import ResultsTable from "../results-table/ResultsTable";

export default function Results({ searchResult, headerHeight }) {

    const rows = searchResult.map((element) => (
        <Table.Tr key={element.key}>
            <Table.Td>{element.name}</Table.Td>
            <Table.Td>{element.profile}</Table.Td>
            <Table.Td>{element.time}</Table.Td>
            <Table.Td><a href={element.link}>{element.link}</a></Table.Td>
        </Table.Tr>
    ));

    return (
        <ResultsTable headerHeight={headerHeight}>
            <Table.Tbody>
                {rows}
            </Table.Tbody>
            <Table.Caption>Found {searchResult.length}</Table.Caption>
        </ResultsTable>
    );
}