import {AppShell, Burger, Group, MantineProvider, Skeleton,} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import HomePage from "./page/HomePage";
import DarkModeToggle from "./components/dark-mode-toggle/DarkModeToggle";
import '@mantine/core/styles.css';

export function App() {
    const [opened, {toggle}] = useDisclosure();
    const headerHeight = 60;

    return (
        <MantineProvider>
            <AppShell
                header={{height: headerHeight}}
                navbar={{width: 300, breakpoint: 'sm', collapsed: {mobile: !opened}}}
                padding="md"
            >
                <AppShell.Header>
                    <Group h="100%" px="md">
                        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm"/>
                        <DarkModeToggle/>
                    </Group>
                </AppShell.Header>
                <AppShell.Navbar p="md">
                    Navbar
                    {Array(15)
                        .fill(0)
                        .map((_, index) => (
                            <Skeleton key={index} h={28} mt="sm" animate={false}/>
                        ))}
                </AppShell.Navbar>
                <AppShell.Main>
                    <HomePage headerHeight={headerHeight}/>
                </AppShell.Main>
            </AppShell>
        </MantineProvider>
    );
}

export default App;