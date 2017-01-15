export class EndUser {

    id?: number;
    user_id?: number;
    first_name?: string;
    last_name?: string;
    email?: string;
    contact_number?: string;
    date_of_birth?: Date;
    gender?: number;
    pan_card?: string;
    introducer_name?: string;
    profile_pic?: File|string;
    user_type?: number;
    created_at?: Date;
    updated_at?: Date;
    start? :number;
    size?: number;
    index?: number;
    address_line_1?: string;
    address_line_2?: string;
    city?: string;
    state?: string;
    country?: string;
    pin_code?: string;
}