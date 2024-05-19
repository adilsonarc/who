import {Skeleton, Table} from '@mantine/core';
import ResultsTable from "../results-table/ResultsTable";

function LoadingRow({index}) {
    return (
        <Table.Tr key={index}>
            {Array(4).fill().map((_, i) => (
                <Table.Td key={i}>
                    <div style={{height: '2em'}}>
                        <Skeleton height="100%"/>
                    </div>
                </Table.Td>
            ))}
        </Table.Tr>
    );
}

export default function Loading() {
    const rows = Array(10)
        .fill()
        .map((_, i) => <LoadingRow index={i}/>);

    return (
        <ResultsTable>
            <Table.Tbody>
                {rows}
            </Table.Tbody>
        </ResultsTable>
    );
}