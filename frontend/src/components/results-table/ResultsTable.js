import {Table} from '@mantine/core';

export default function ResultsTable({ children, striped, headerHeight }) {
    return (
        <Table striped={striped} stickyHeader stickyHeaderOffset={headerHeight}>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th>Name</Table.Th>
                    <Table.Th>Profile</Table.Th>
                    <Table.Th>Timeframe</Table.Th>
                    <Table.Th>Link</Table.Th>
                </Table.Tr>
            </Table.Thead>
            { children }
        </Table>
    );
}

