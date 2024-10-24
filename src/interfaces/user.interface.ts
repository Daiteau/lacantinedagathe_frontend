export interface SignUpUserDto {
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    alias?: string,
}

export interface LoginUserDto {
    email: string,
    password: string,
}

export interface UsersDto {
    id: number,
    created_at: Date,
    deleted_at: Date,
    first_name: string,
    last_name: string,
    email: string,
    alias?: string,
    role_id: number
}