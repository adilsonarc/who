import {Box, Button, Group, TextInput} from '@mantine/core';
import {useForm} from "@mantine/form";
import moment from 'moment';

function formatTime(timeString) {
    const duration = moment.duration(timeString);
    const hours = Math.floor(duration.asHours());
    const minutes = Math.floor(duration.asMinutes()) - hours * 60;
    const seconds = Math.floor(duration.asSeconds()) - hours * 3600 - minutes * 60;

    let result = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    if (hours > 0) {
        result = `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
    return result;
}

export default function SearchBar({ setIsLoading, setSearchResult }) {
    const handleSubmit = async (values) => {
        setIsLoading(true);
        const url = `http://localhost:8080/api/v1/search?videoLink=${encodeURIComponent(values.searchBarInput)}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error( `HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const results = data.map(result => {
            return ({
                ...result,
                key: crypto.randomUUID(),
                time: formatTime(result.time),
            });
        });

        setSearchResult(results);
        setIsLoading(false);    };

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: { searchBarInput: '' },
        validate: {
            searchBarInput: (value) => {
                try {
                    new URL(value);
                } catch (error) {
                    return 'Invalid URL';
                }
            },
        },
    });

    return (
        <>
            <Box maw={340} mx="auto">
                <form onSubmit={form.onSubmit(handleSubmit)}>
                    <TextInput
                        label="Search twitter accounts in video:"
                        placeholder="https://www.youtube.com/watch?v=yOZNf8SabJw"
                        key={form.key('searchBarInput')}
                        {...form.getInputProps('searchBarInput')}/>
                    <Group justify="flex-end" mt="md">
                        <Button type="submit">Search</Button>
                    </Group>
                </form>
            </Box>
        </>
    );
}