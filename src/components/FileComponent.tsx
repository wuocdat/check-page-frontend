import { ActionIcon, Group, Stack, Text } from "@mantine/core";
import { IconFolderFilled } from "@tabler/icons-react";

interface FileComponentProps {
    title: string;
    path: string;
}

const FileComponent = ({ title, path }: FileComponentProps) => {
    return (
        <Stack spacing="0">
            <Text size="xs" fw={700}>
                {title}
            </Text>
            <Group position="apart">
                <Text truncate size="xs">
                    {path}
                </Text>
                <ActionIcon color="yellow" variant="light">
                    <IconFolderFilled size="1rem" />
                </ActionIcon>
            </Group>
        </Stack>
    );
};

export default FileComponent;
