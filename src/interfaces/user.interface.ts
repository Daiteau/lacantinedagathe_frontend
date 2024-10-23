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