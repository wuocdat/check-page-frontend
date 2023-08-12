import { Account } from "../types";

const mockAcc: Account = {
    uid: "1000923423543",
    cookie: "c_user=100081789893509;xs=41:Vv-uG7ptkQ9I5Q:2:1654604146:-1:-1;fr=0dZtnQgAbuqGXzcEf.AWV5E27gmcgHki-7fbXwlDmtklc.Bin0Fy..AAA.0.0.Bin0Fy.AWW2_LTmjbo;datr=ckGfYoqhYOIX8x_y9rT0NJop|BZS7ECLZ6UDZV6YKXFUMAOI5HX4PQB2Z",
    page_id: "958025305039",
    inboxed: 0,
    status: "Đã gửi xong",
    ip: "116.111.172.109",
    time: "10/08/2023 23:11:11",
};

export const mockAccData: Account[] = Array(100).fill(mockAcc);
