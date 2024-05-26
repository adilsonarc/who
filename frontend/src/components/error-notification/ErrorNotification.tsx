import {IconX} from '@tabler/icons-react';
import {Notification, rem} from '@mantine/core';

export default function ErrorNotification() {
    const xIcon = <IconX style={{width: rem(20), height: rem(20)}}/>;

    return (
        <Notification icon={xIcon} color="red" title="Bummer!" withCloseButton={false}>
            Something went wrong
        </Notification>
    );
}