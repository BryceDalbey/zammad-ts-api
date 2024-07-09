import { z } from "zod";
export declare const ticketSchema: z.ZodObject<{
    id: z.ZodNumber;
    group_id: z.ZodNumber;
    priority_id: z.ZodNumber;
    state_id: z.ZodNullable<z.ZodNumber>;
    organization_id: z.ZodNullable<z.ZodNumber>;
    number: z.ZodString;
    title: z.ZodString;
    owner_id: z.ZodNullable<z.ZodNumber>;
    customer_id: z.ZodNullable<z.ZodNumber>;
    note: z.ZodNullable<z.ZodString>;
    first_response_at: z.ZodNullable<z.ZodString>;
    first_response_escalation_at: z.ZodNullable<z.ZodString>;
    first_response_in_min: z.ZodNullable<z.ZodNumber>;
    first_response_diff_in_min: z.ZodNullable<z.ZodNumber>;
    close_at: z.ZodNullable<z.ZodString>;
    close_escalation_at: z.ZodNullable<z.ZodString>;
    close_in_min: z.ZodNullable<z.ZodNumber>;
    close_diff_in_min: z.ZodNullable<z.ZodNumber>;
    update_escalation_at: z.ZodNullable<z.ZodString>;
    update_in_min: z.ZodNullable<z.ZodNumber>;
    update_diff_in_min: z.ZodNullable<z.ZodNumber>;
    last_contact_at: z.ZodNullable<z.ZodString>;
    last_contact_agent_at: z.ZodNullable<z.ZodString>;
    last_contact_customer_at: z.ZodNullable<z.ZodString>;
    last_owner_update_at: z.ZodNullable<z.ZodString>;
    create_article_type_id: z.ZodNumber;
    create_article_sender_id: z.ZodNumber;
    article_count: z.ZodNumber;
    escalation_at: z.ZodNullable<z.ZodString>;
    updated_by_id: z.ZodNullable<z.ZodNumber>;
    created_by_id: z.ZodNumber;
    created_at: z.ZodString;
    updated_at: z.ZodString;
}, "strip", z.ZodTypeAny, {
    number: string;
    id: number;
    organization_id: number | null;
    note: string | null;
    updated_by_id: number | null;
    group_id: number;
    priority_id: number;
    state_id: number | null;
    title: string;
    owner_id: number | null;
    customer_id: number | null;
    first_response_at: string | null;
    first_response_escalation_at: string | null;
    first_response_in_min: number | null;
    first_response_diff_in_min: number | null;
    close_at: string | null;
    close_escalation_at: string | null;
    close_in_min: number | null;
    close_diff_in_min: number | null;
    update_escalation_at: string | null;
    update_in_min: number | null;
    update_diff_in_min: number | null;
    last_contact_at: string | null;
    last_contact_agent_at: string | null;
    last_contact_customer_at: string | null;
    last_owner_update_at: string | null;
    create_article_type_id: number;
    create_article_sender_id: number;
    article_count: number;
    escalation_at: string | null;
    created_by_id: number;
    created_at: string;
    updated_at: string;
}, {
    number: string;
    id: number;
    organization_id: number | null;
    note: string | null;
    updated_by_id: number | null;
    group_id: number;
    priority_id: number;
    state_id: number | null;
    title: string;
    owner_id: number | null;
    customer_id: number | null;
    first_response_at: string | null;
    first_response_escalation_at: string | null;
    first_response_in_min: number | null;
    first_response_diff_in_min: number | null;
    close_at: string | null;
    close_escalation_at: string | null;
    close_in_min: number | null;
    close_diff_in_min: number | null;
    update_escalation_at: string | null;
    update_in_min: number | null;
    update_diff_in_min: number | null;
    last_contact_at: string | null;
    last_contact_agent_at: string | null;
    last_contact_customer_at: string | null;
    last_owner_update_at: string | null;
    create_article_type_id: number;
    create_article_sender_id: number;
    article_count: number;
    escalation_at: string | null;
    created_by_id: number;
    created_at: string;
    updated_at: string;
}>;
export declare const expandedTicketSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodNumber;
    group_id: z.ZodNumber;
    priority_id: z.ZodNumber;
    state_id: z.ZodNullable<z.ZodNumber>;
    organization_id: z.ZodNullable<z.ZodNumber>;
    number: z.ZodString;
    title: z.ZodString;
    owner_id: z.ZodNullable<z.ZodNumber>;
    customer_id: z.ZodNullable<z.ZodNumber>;
    note: z.ZodNullable<z.ZodString>;
    first_response_at: z.ZodNullable<z.ZodString>;
    first_response_escalation_at: z.ZodNullable<z.ZodString>;
    first_response_in_min: z.ZodNullable<z.ZodNumber>;
    first_response_diff_in_min: z.ZodNullable<z.ZodNumber>;
    close_at: z.ZodNullable<z.ZodString>;
    close_escalation_at: z.ZodNullable<z.ZodString>;
    close_in_min: z.ZodNullable<z.ZodNumber>;
    close_diff_in_min: z.ZodNullable<z.ZodNumber>;
    update_escalation_at: z.ZodNullable<z.ZodString>;
    update_in_min: z.ZodNullable<z.ZodNumber>;
    update_diff_in_min: z.ZodNullable<z.ZodNumber>;
    last_contact_at: z.ZodNullable<z.ZodString>;
    last_contact_agent_at: z.ZodNullable<z.ZodString>;
    last_contact_customer_at: z.ZodNullable<z.ZodString>;
    last_owner_update_at: z.ZodNullable<z.ZodString>;
    create_article_type_id: z.ZodNumber;
    create_article_sender_id: z.ZodNumber;
    article_count: z.ZodNumber;
    escalation_at: z.ZodNullable<z.ZodString>;
    updated_by_id: z.ZodNullable<z.ZodNumber>;
    created_by_id: z.ZodNumber;
    created_at: z.ZodString;
    updated_at: z.ZodString;
}, {
    article_ids: z.ZodArray<z.ZodNumber, "many">;
    group: z.ZodNullable<z.ZodString>;
    organization: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    state: z.ZodString;
    priority: z.ZodString;
    owner: z.ZodNullable<z.ZodString>;
    customer: z.ZodNullable<z.ZodString>;
    created_by: z.ZodNullable<z.ZodString>;
    updated_by: z.ZodNullable<z.ZodString>;
    create_article_type: z.ZodNullable<z.ZodString>;
    create_article_sender: z.ZodNullable<z.ZodString>;
}>, "strip", z.ZodTypeAny, {
    number: string;
    id: number;
    organization_id: number | null;
    note: string | null;
    updated_by_id: number | null;
    group_id: number;
    priority_id: number;
    state_id: number | null;
    title: string;
    owner_id: number | null;
    customer_id: number | null;
    first_response_at: string | null;
    first_response_escalation_at: string | null;
    first_response_in_min: number | null;
    first_response_diff_in_min: number | null;
    close_at: string | null;
    close_escalation_at: string | null;
    close_in_min: number | null;
    close_diff_in_min: number | null;
    update_escalation_at: string | null;
    update_in_min: number | null;
    update_diff_in_min: number | null;
    last_contact_at: string | null;
    last_contact_agent_at: string | null;
    last_contact_customer_at: string | null;
    last_owner_update_at: string | null;
    create_article_type_id: number;
    create_article_sender_id: number;
    article_count: number;
    escalation_at: string | null;
    created_by_id: number;
    created_at: string;
    updated_at: string;
    article_ids: number[];
    group: string | null;
    state: string;
    priority: string;
    owner: string | null;
    customer: string | null;
    created_by: string | null;
    updated_by: string | null;
    create_article_type: string | null;
    create_article_sender: string | null;
    organization?: string | null | undefined;
}, {
    number: string;
    id: number;
    organization_id: number | null;
    note: string | null;
    updated_by_id: number | null;
    group_id: number;
    priority_id: number;
    state_id: number | null;
    title: string;
    owner_id: number | null;
    customer_id: number | null;
    first_response_at: string | null;
    first_response_escalation_at: string | null;
    first_response_in_min: number | null;
    first_response_diff_in_min: number | null;
    close_at: string | null;
    close_escalation_at: string | null;
    close_in_min: number | null;
    close_diff_in_min: number | null;
    update_escalation_at: string | null;
    update_in_min: number | null;
    update_diff_in_min: number | null;
    last_contact_at: string | null;
    last_contact_agent_at: string | null;
    last_contact_customer_at: string | null;
    last_owner_update_at: string | null;
    create_article_type_id: number;
    create_article_sender_id: number;
    article_count: number;
    escalation_at: string | null;
    created_by_id: number;
    created_at: string;
    updated_at: string;
    article_ids: number[];
    group: string | null;
    state: string;
    priority: string;
    owner: string | null;
    customer: string | null;
    created_by: string | null;
    updated_by: string | null;
    create_article_type: string | null;
    create_article_sender: string | null;
    organization?: string | null | undefined;
}>;
export declare class TicketValidator {
    static validateApiTicket: (data: any) => any;
    static validateExpandedApiTicket: (data: any) => any;
    static validateApiTicketSearchResult: (data: any) => any;
}
//# sourceMappingURL=TicketValidator.d.ts.map