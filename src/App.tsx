import {
    ActionIcon,
    Box,
    Button,
    Divider,
    Flex,
    Group,
    NumberInput,
    Select,
    Stack,
    Text,
    Textarea,
    Title,
    rem,
    useMantineTheme,
} from "@mantine/core";
import DataTable from "./components/DataTable";
import { mockAccData } from "./constants";
import {
    IconCopy,
    IconPlayerPlayFilled,
    IconPlayerStopFilled,
} from "@tabler/icons-react";
import FileComponent from "./components/FileComponent";

function App() {
    const theme = useMantineTheme();

    return (
        <Flex h="100vh" bg={theme.colors.gray[2]} sx={{ overflow: "hidden" }}>
            <Stack p="xs" sx={{ flex: 1 }}>
                <Box bg="white" sx={{ flex: 1, overflow: "hidden" }}>
                    <DataTable data={mockAccData} />
                </Box>
                <Stack>
                    <Group>
                        <Button
                            w={200}
                            leftIcon={
                                <IconPlayerPlayFilled
                                    style={{ color: "green" }}
                                />
                            }
                            variant="white"
                            color="dark"
                        >
                            Bắt đầu
                        </Button>
                        <Button
                            w={200}
                            leftIcon={
                                <IconPlayerStopFilled
                                    style={{ color: "red" }}
                                />
                            }
                            variant="white"
                            color="dark"
                        >
                            Dừng
                        </Button>
                        <Button w={200} variant="white" color="dark">
                            Lưu cài đặt
                        </Button>
                    </Group>
                    <Group spacing={30}>
                        <Group spacing="0.5rem">
                            <Title order={6}>Mã máy:</Title>
                            <Text fz="sm">38dn34fs8l90s758h2e8l90s758h2e</Text>
                            <ActionIcon variant="transparent">
                                <IconCopy />
                            </ActionIcon>
                        </Group>
                        <Title order={6} color="green">
                            Trạng thái sử dụng: Đã kích hoạt
                        </Title>
                    </Group>
                </Stack>
            </Stack>
            <Divider orientation="vertical" />
            <Stack w={350} p="sm" spacing="xs" sx={{ overflow: "auto" }}>
                <Divider label={<Title order={5}>Cấu hình</Title>} />
                <Stack px="xs" spacing={rem(5)}>
                    <Divider label={<Title order={6}>Cài đặt luồng</Title>} />
                    <NumberInput
                        defaultValue={20}
                        placeholder="Your age"
                        size="xs"
                        label="Số luồng/IP:"
                    />
                    <Group noWrap>
                        <Text size="xs" sx={{ whiteSpace: "nowrap" }}>
                            Time 1 inbox /s
                        </Text>
                        <NumberInput w="auto" defaultValue={3} size="xs" />
                        <Text size="xs">~</Text>
                        <NumberInput w="auto" defaultValue={5} size="xs" />
                    </Group>
                    <Group>
                        <Text size="xs">Gửi xong 1 ID nghỉ /s</Text>
                        <NumberInput
                            defaultValue={5}
                            size="xs"
                            sx={{ flex: 1 }}
                        />
                    </Group>
                    <Group noWrap>
                        <Text size="xs" sx={{ whiteSpace: "nowrap" }}>
                            Số tin nhắn
                        </Text>
                        <NumberInput w="auto" defaultValue={200} size="xs" />
                        <Text size="xs">~</Text>
                        <NumberInput w="auto" defaultValue={400} size="xs" />
                    </Group>
                </Stack>
                <Stack mt="lg" px="xs" spacing={rem(5)}>
                    <Divider label={<Title order={6}>Cài đặt proxy</Title>} />
                    <Select
                        size="xs"
                        placeholder="Pick one"
                        data={[
                            { value: "react", label: "React" },
                            { value: "ng", label: "Angular" },
                            { value: "svelte", label: "Svelte" },
                            { value: "vue", label: "Vue" },
                        ]}
                    />
                    <Textarea
                        size="xs"
                        autosize
                        minRows={4}
                        maxRows={5}
                        placeholder="Enter lis proxy"
                        label="Nhập list proxy"
                    />
                </Stack>
                <Stack mt="lg" px="xs" spacing={rem(5)}>
                    <Divider label={<Title order={6}>Cài đặt file</Title>} />
                    <FileComponent
                        title="File tên"
                        path="/home/wuocdat/all_data/code_space/web/dump"
                    />
                    <FileComponent
                        title="Folder avatar"
                        path="/home/wuocdat/all_data/code_space/web/dump"
                    />
                    <FileComponent
                        title="List UID"
                        path="/home/wuocdat/all_data/code_space/web/dump"
                    />
                    <FileComponent
                        title="File nội dung"
                        path="/home/wuocdat/all_data/code_space/web/dump"
                    />
                    <FileComponent
                        title="File gửi"
                        path="/home/wuocdat/all_data/code_space/web/dump"
                    />
                    <FileComponent
                        title="Cookie"
                        path="/home/wuocdat/all_data/code_space/web/dump"
                    />
                    <Select
                        label={
                            <Text size="xs" fw={700}>
                                Xuất fanpage
                            </Text>
                        }
                        size="xs"
                        placeholder="Pick one"
                        data={[
                            { value: "react", label: "React" },
                            { value: "ng", label: "Angular" },
                            { value: "svelte", label: "Svelte" },
                            { value: "vue", label: "Vue" },
                        ]}
                    />
                    <FileComponent
                        title="Cookie fanpage"
                        path="/home/wuocdat/all_data/code_space/web/dump"
                    />
                </Stack>
            </Stack>
        </Flex>
    );
}

export default App;
