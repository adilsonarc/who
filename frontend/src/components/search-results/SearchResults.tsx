import {Table} from "@mantine/core";
import TableLoading from "../table-loading/TableLoading";
import ProfileDto from "../../services/ProfileDto";
import {formatTime} from "../../utlis/FormatTime";
import {notifications} from "@mantine/notifications";
import {useEffect, useState} from "react";

interface SearchResultsProps {
    searchInput: string;
}

export default function SearchResults({searchInput}: SearchResultsProps) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<ProfileDto[] | null>(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setData([]);
        setError(false);
        fetch(`http://localhost:8080/api/v1/search?videoLink=${encodeURIComponent(searchInput)}`)
            .then(response => response.json()
                .then(data => setData(data)))
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }, [searchInput]);

    if (error) {
        notifications.show({
            title: 'Error',
            message: 'Something when wrong!',
        });
    }

    return (
        <>
            {loading && <TableLoading/>}
            {data && (
                data.map((profile): ProfileDto => ({
                    ...profile,
                    key: crypto.randomUUID(),
                    timestamp: formatTime(profile.timestamp)
                })).map((profile) =>
                    <Table.Tr key={profile.key}>
                        <Table.Td>{profile.name}</Table.Td>
                        <Table.Td>{profile.profile}</Table.Td>
                        <Table.Td>{profile.timestamp}</Table.Td>
                        <Table.Td>{profile.link}</Table.Td>
                    </Table.Tr>
                )
            )}
        </>
    );
}