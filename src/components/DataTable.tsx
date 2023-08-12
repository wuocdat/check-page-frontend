import {
    ScrollArea,
    Table,
    TableProps,
    Text,
    createStyles,
    rem,
} from "@mantine/core";
import { Account } from "../types";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
    header: {
        position: "sticky",
        top: 0,
        backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
        transition: "box-shadow 150ms ease",

        "&::after": {
            content: '""',
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            borderBottom: `${rem(1)} solid ${
                theme.colorScheme === "dark"
                    ? theme.colors.dark[3]
                    : theme.colors.gray[2]
            }`,
        },
    },

    scrolled: {
        boxShadow: theme.shadows.sm,
    },
}));

interface DataTableProps extends TableProps {
    data: Account[];
}

const DataTable = ({ data, ...props }: DataTableProps) => {
    const { classes, cx } = useStyles();
    const [scrolled, setScrolled] = useState(false);

    const rows = data.map((acc, index) => (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{acc.uid}</td>
            <td>
                <Text w={300} truncate>
                    {acc.cookie}
                </Text>
            </td>
            <td>{acc.page_id}</td>
            <td>{acc.inboxed}</td>
            <td>
                <Text w={100} truncate>
                    {acc.status}
                </Text>
            </td>
            <td>{acc.ip}</td>
            <td>{acc.time}</td>
        </tr>
    ));

    return (
        <ScrollArea.Autosize
            mah="100%"
            onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
        >
            <Table
                striped
                highlightOnHover
                withBorder
                withColumnBorders
                miw={800}
                fontSize="sm"
                {...props}
            >
                <thead
                    className={cx(classes.header, {
                        [classes.scrolled]: scrolled,
                    })}
                >
                    <tr>
                        <th>№</th>
                        <th>UID</th>
                        <th>Cookie</th>
                        <th>ID Page</th>
                        <th>Đã inbox</th>
                        <th>Trạng thái</th>
                        <th>IP</th>
                        <th>Thời gian</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </ScrollArea.Autosize>
    );
};

export default DataTable;
