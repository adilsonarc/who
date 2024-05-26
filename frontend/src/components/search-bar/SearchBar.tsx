import React from "react";
import {Box, rem, TextInput} from '@mantine/core';
import '@mantine/notifications/styles.css';
import {useForm} from "@mantine/form";
import {validateUrl} from "../../utlis/FormValidation";
import {IconSearch} from "@tabler/icons-react";

interface SearchBarProps {
    setSearchInput: (value: string) => void;
    loading: boolean;
}

interface FormValues {
    searchBarInput: string;
}

export default function SearchBar({setSearchInput, loading}: SearchBarProps)  {
    const form = useForm<FormValues>({
        mode: 'uncontrolled',
        initialValues: {searchBarInput: ''},
        validate: {
            searchBarInput: validateUrl,
        },
    });

    const handleSubmit = (formValues: FormValues) => {
        setSearchInput(formValues.searchBarInput);
    }

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