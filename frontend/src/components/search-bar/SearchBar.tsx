import React from "react";
import {Box, rem, TextInput} from '@mantine/core';
import '@mantine/notifications/styles.css';
import {useForm} from "@mantine/form";
import {validateUrl} from "../../utlis/FormValidation";
import {IconSearch} from "@tabler/icons-react";
import {fetchData} from "../../utlis/FetchUtils";
import ProfileDto from "../../services/ProfileDto";

interface SearchBarProps {
    loading: boolean;
    setLoading: (loading: boolean) => void;
    setData: (data: ProfileDto[] | null) => void;
    setError: (error: boolean) => void;
}

interface FormValues {
    searchBarInput: string;
}

export default function SearchBar({loading, setLoading, setData, setError}: SearchBarProps) {
    const form = useForm<FormValues>({
        mode: 'uncontrolled',
        initialValues: {searchBarInput: ''},
        validate: {
            searchBarInput: validateUrl,
        },
    });

    const handleSubmit = (formValues: FormValues) => {
        const searchInput = formValues.searchBarInput;
        setLoading(true);
        setError(false);
        setData(null);
        fetchData(`http://localhost:8080/api/v1/search?videoLink=${encodeURIComponent(searchInput)}`)
            .then(data => setData(data))
            .catch(() => {
                setError(true);
            })
            .finally(() => setLoading(false));
    };

    return (
        <Box maw={340} mx="auto">
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <TextInput
                    disabled={loading}
                    placeholder="Youtube video link"
                    mb="md"
                    leftSection={<IconSearch style={{width: rem(16), height: rem(16)}} stroke={1.5}/>}
                    key={form.key('searchBarInput')}
                    {...form.getInputProps('searchBarInput')}/>
            </form>
        </Box>
    );
}