import {Skeleton, Table} from '@mantine/core';

export default function TableLoading() {
    return (
        <Table.Tr>
            <Table.Td colSpan={4}>
                <div style={{height: '2em'}}>
                    <Skeleton height="100%"/>
                </div>
            </Table.Td>
        </Table.Tr>
    );
}