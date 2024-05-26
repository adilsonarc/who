import {Table} from "@mantine/core";
import ProfileDto from "../../services/ProfileDto";
import {formatTime} from "../../utlis/FormatTime";
import {useMemo} from "react";

interface SearchResultsProps {
    data: ProfileDto[];
}

export default function SearchResults({data}: SearchResultsProps) {
    const transformedData = useMemo(() => {
        return data?.map((profile): ProfileDto => ({
            ...profile,
            key: crypto.randomUUID(),
            timestamp: formatTime(profile.timestamp)
        }));
    }, [data]);

    return (
        <>
            {transformedData.map((profile) =>
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