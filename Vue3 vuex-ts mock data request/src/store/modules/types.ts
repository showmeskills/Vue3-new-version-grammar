export interface UserState{
    username: string;
    email: string;
    lastLogin: Date;
    handleChange?:(state:UserState,payload:string)=>void
}



