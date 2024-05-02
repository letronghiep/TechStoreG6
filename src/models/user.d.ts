import { Role } from "./roles";

export type User = {
    _id: object | Key | null | undefined;

    full_name?: string;
    username?: string;
    password?: string;
    phone_number?: string;
    email?: string;
    role_code?: Role;
    status?: string[];
    access_token?: string;
    refresh_token?: string;

}