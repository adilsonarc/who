import {Table} from "@mantine/core";
import ProfileDto from "../../services/ProfileDto";
import {formatTime} from "../../utlis/FormatTime";
import {useEffect, useMemo, useState} from "react";
import {fetchData} from "../../utlis/FetchUtils";

interface SearchResultsProps {
    searchInput: string;
    setLoading: (error: boolean) => void;
    setError: (error: boolean) => void;
}

export default function SearchResults({searchInput, setLoading, setError}: SearchResultsProps) {
    const [data, setData] = useState<ProfileDto[] | null>(null);

    useEffect(() => {
        setLoading(true);
        setError(false);
        fetchData(`http://localhost:8080/api/v1/search?videoLink=${encodeURIComponent(searchInput)}`)
            .then(data => setData(data))
            .catch(() => {
                setError(true);
                setData([]);
            })
            .finally(() => setLoading(false));
    }, [searchInput, setLoading, setData, setError]);

    const transformedData = useMemo(() => {
        return data?.map((profile): ProfileDto => ({
            ...profile,
            key: crypto.randomUUID(),
            timestamp: formatTime(profile.timestamp)
        }));
    }, [data]);

    return (
        <>
            {transformedData &&
                transformedData.map((profile) =>
                    <Table.Tr key={profile.key}>
                        <Table.Td>{profile.name}</Table.Td>
                        <Table.Td>{profile.profile}</Table.Td>
                        <Table.Td>{profile.timestamp}</Table.Td>
                        <Table.Td>{profile.link}</Table.Td>
                    </Table.Tr>
                )
            }
        </>
    );
}