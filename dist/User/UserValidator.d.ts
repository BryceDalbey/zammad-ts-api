import { z } from "zod";
export declare const userSchema: z.ZodObject<{
    id: z.ZodNumber;
    organization_id: z.ZodNullable<z.ZodNumber>;
    note: z.ZodString;
    active: z.ZodBoolean;
    login_failed: z.ZodNumber;
    verified: z.ZodBoolean;
    login: z.ZodString;
    last_login: z.ZodNullable<z.ZodString>;
    firstname: z.ZodString;
    lastname: z.ZodString;
    email: z.ZodString;
    image: z.ZodNullable<z.ZodString>;
    web: z.ZodString;
    phone: z.ZodString;
    fax: z.ZodString;
    mobile: z.ZodString;
    department: z.ZodNullable<z.ZodString>;
    street: z.ZodString;
    zip: z.ZodString;
    city: z.ZodString;
    country: z.ZodString;
    address: z.ZodNullable<z.ZodString>;
    vip: z.ZodBoolean;
    out_of_office: z.ZodBoolean;
    out_of_office_start_at: z.ZodNullable<z.ZodString>;
    out_of_office_end_at: z.ZodNullable<z.ZodString>;
    out_of_office_replacement_id: z.ZodNullable<z.ZodNumber>;
    created_by_id: z.ZodNumber;
    created_at: z.ZodString;
    updated_by_id: z.ZodNullable<z.ZodNumber>;
    updated_at: z.ZodNullable<z.ZodString>;
    role_ids: z.ZodArray<z.ZodNumber, "many">;
    organization_ids: z.ZodArray<z.ZodNumber, "many">;
    authorization_ids: z.ZodArray<z.ZodNumber, "many">;
}, "strip", z.ZodTypeAny, {
    id: number;
    organization_id: number | null;
    note: string;
    active: boolean;
    login_failed: number;
    verified: boolean;
    login: string;
    last_login: string | null;
    firstname: string;
    lastname: string;
    email: string;
    image: string | null;
    web: string;
    phone: string;
    fax: string;
    mobile: string;
    department: string | null;
    street: string;
    zip: string;
    city: string;
    country: string;
    address: string | null;
    vip: boolean;
    out_of_office: boolean;
    out_of_office_start_at: string | null;
    out_of_office_end_at: string | null;
    out_of_office_replacement_id: number | null;
    created_by_id: number;
    created_at: string;
    updated_by_id: number | null;
    updated_at: string | null;
    role_ids: number[];
    organization_ids: number[];
    authorization_ids: number[];
}, {
    id: number;
    organization_id: number | null;
    note: string;
    active: boolean;
    login_failed: number;
    verified: boolean;
    login: string;
    last_login: string | null;
    firstname: string;
    lastname: string;
    email: string;
    image: string | null;
    web: string;
    phone: string;
    fax: string;
    mobile: string;
    department: string | null;
    street: string;
    zip: string;
    city: string;
    country: string;
    address: string | null;
    vip: boolean;
    out_of_office: boolean;
    out_of_office_start_at: string | null;
    out_of_office_end_at: string | null;
    out_of_office_replacement_id: number | null;
    created_by_id: number;
    created_at: string;
    updated_by_id: number | null;
    updated_at: string | null;
    role_ids: number[];
    organization_ids: number[];
    authorization_ids: number[];
}>;
export declare const expandedUserSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodNumber;
    organization_id: z.ZodNullable<z.ZodNumber>;
    note: z.ZodString;
    active: z.ZodBoolean;
    login_failed: z.ZodNumber;
    verified: z.ZodBoolean;
    login: z.ZodString;
    last_login: z.ZodNullable<z.ZodString>;
    firstname: z.ZodString;
    lastname: z.ZodString;
    email: z.ZodString;
    image: z.ZodNullable<z.ZodString>;
    web: z.ZodString;
    phone: z.ZodString;
    fax: z.ZodString;
    mobile: z.ZodString;
    department: z.ZodNullable<z.ZodString>;
    street: z.ZodString;
    zip: z.ZodString;
    city: z.ZodString;
    country: z.ZodString;
    address: z.ZodNullable<z.ZodString>;
    vip: z.ZodBoolean;
    out_of_office: z.ZodBoolean;
    out_of_office_start_at: z.ZodNullable<z.ZodString>;
    out_of_office_end_at: z.ZodNullable<z.ZodString>;
    out_of_office_replacement_id: z.ZodNullable<z.ZodNumber>;
    created_by_id: z.ZodNumber;
    created_at: z.ZodString;
    updated_by_id: z.ZodNullable<z.ZodNumber>;
    updated_at: z.ZodNullable<z.ZodString>;
    role_ids: z.ZodArray<z.ZodNumber, "many">;
    organization_ids: z.ZodArray<z.ZodNumber, "many">;
    authorization_ids: z.ZodArray<z.ZodNumber, "many">;
}, {
    roles: z.ZodArray<z.ZodString, "many">;
    organizations: z.ZodArray<z.ZodString, "many">;
    authorizations: z.ZodArray<z.ZodString, "many">;
    created_by: z.ZodString;
    updated_by: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    id: number;
    organization_id: number | null;
    note: string;
    active: boolean;
    login_failed: number;
    verified: boolean;
    login: string;
    last_login: string | null;
    firstname: string;
    lastname: string;
    email: string;
    image: string | null;
    web: string;
    phone: string;
    fax: string;
    mobile: string;
    department: string | null;
    street: string;
    zip: string;
    city: string;
    country: string;
    address: string | null;
    vip: boolean;
    out_of_office: boolean;
    out_of_office_start_at: string | null;
    out_of_office_end_at: string | null;
    out_of_office_replacement_id: number | null;
    created_by_id: number;
    created_at: string;
    updated_by_id: number | null;
    updated_at: string | null;
    role_ids: number[];
    organization_ids: number[];
    authorization_ids: number[];
    roles: string[];
    organizations: string[];
    authorizations: string[];
    created_by: string;
    updated_by: string;
}, {
    id: number;
    organization_id: number | null;
    note: string;
    active: boolean;
    login_failed: number;
    verified: boolean;
    login: string;
    last_login: string | null;
    firstname: string;
    lastname: string;
    email: string;
    image: string | null;
    web: string;
    phone: string;
    fax: string;
    mobile: string;
    department: string | null;
    street: string;
    zip: string;
    city: string;
    country: string;
    address: string | null;
    vip: boolean;
    out_of_office: boolean;
    out_of_office_start_at: string | null;
    out_of_office_end_at: string | null;
    out_of_office_replacement_id: number | null;
    created_by_id: number;
    created_at: string;
    updated_by_id: number | null;
    updated_at: string | null;
    role_ids: number[];
    organization_ids: number[];
    authorization_ids: number[];
    roles: string[];
    organizations: string[];
    authorizations: string[];
    created_by: string;
    updated_by: string;
}>;
export declare class UserValidator {
    static apiUser: (data: any) => {
        id: number;
        organization_id: number | null;
        note: string;
        active: boolean;
        login_failed: number;
        verified: boolean;
        login: string;
        last_login: string | null;
        firstname: string;
        lastname: string;
        email: string;
        image: string | null;
        web: string;
        phone: string;
        fax: string;
        mobile: string;
        department: string | null;
        street: string;
        zip: string;
        city: string;
        country: string;
        address: string | null;
        vip: boolean;
        out_of_office: boolean;
        out_of_office_start_at: string | null;
        out_of_office_end_at: string | null;
        out_of_office_replacement_id: number | null;
        created_by_id: number;
        created_at: string;
        updated_by_id: number | null;
        updated_at: string | null;
        role_ids: number[];
        organization_ids: number[];
        authorization_ids: number[];
    };
    static apiUserExpanded: (data: any) => {
        id: number;
        organization_id: number | null;
        note: string;
        active: boolean;
        login_failed: number;
        verified: boolean;
        login: string;
        last_login: string | null;
        firstname: string;
        lastname: string;
        email: string;
        image: string | null;
        web: string;
        phone: string;
        fax: string;
        mobile: string;
        department: string | null;
        street: string;
        zip: string;
        city: string;
        country: string;
        address: string | null;
        vip: boolean;
        out_of_office: boolean;
        out_of_office_start_at: string | null;
        out_of_office_end_at: string | null;
        out_of_office_replacement_id: number | null;
        created_by_id: number;
        created_at: string;
        updated_by_id: number | null;
        updated_at: string | null;
        role_ids: number[];
        organization_ids: number[];
        authorization_ids: number[];
        roles: string[];
        organizations: string[];
        authorizations: string[];
        created_by: string;
        updated_by: string;
    };
    static apiUsers: (data: any) => {
        id: number;
        organization_id: number | null;
        note: string;
        active: boolean;
        login_failed: number;
        verified: boolean;
        login: string;
        last_login: string | null;
        firstname: string;
        lastname: string;
        email: string;
        image: string | null;
        web: string;
        phone: string;
        fax: string;
        mobile: string;
        department: string | null;
        street: string;
        zip: string;
        city: string;
        country: string;
        address: string | null;
        vip: boolean;
        out_of_office: boolean;
        out_of_office_start_at: string | null;
        out_of_office_end_at: string | null;
        out_of_office_replacement_id: number | null;
        created_by_id: number;
        created_at: string;
        updated_by_id: number | null;
        updated_at: string | null;
        role_ids: number[];
        organization_ids: number[];
        authorization_ids: number[];
    }[];
    static apiUsersExtended: (data: any) => {
        id: number;
        organization_id: number | null;
        note: string;
        active: boolean;
        login_failed: number;
        verified: boolean;
        login: string;
        last_login: string | null;
        firstname: string;
        lastname: string;
        email: string;
        image: string | null;
        web: string;
        phone: string;
        fax: string;
        mobile: string;
        department: string | null;
        street: string;
        zip: string;
        city: string;
        country: string;
        address: string | null;
        vip: boolean;
        out_of_office: boolean;
        out_of_office_start_at: string | null;
        out_of_office_end_at: string | null;
        out_of_office_replacement_id: number | null;
        created_by_id: number;
        created_at: string;
        updated_by_id: number | null;
        updated_at: string | null;
        role_ids: number[];
        organization_ids: number[];
        authorization_ids: number[];
        roles: string[];
        organizations: string[];
        authorizations: string[];
        created_by: string;
        updated_by: string;
    }[];
}
//# sourceMappingURL=UserValidator.d.ts.map