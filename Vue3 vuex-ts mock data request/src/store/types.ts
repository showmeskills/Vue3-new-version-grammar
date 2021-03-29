type Geo = {
    lat:string,
    lng:string
}
type Address = {
    street:string,
    suite:string,
    city:string,
    zipcode:string,
    geo:Geo
}
type Company = {
    name:string,
    catchPhrase:string,
    bs:string,
}
export interface UserList{
    id:number,
    name:string,
    username:string,
    email:string,
    phone:string,
    website:string,
    company:Company
    address:Address
}

export interface RootState{
    HelloMessage:string;
    count:number;
    userList:Array<UserList>;
}

export interface GetterState extends RootState{
    Count?:(state:RootState)=>number;
    UserList?:(state:RootState)=>object[];
}
