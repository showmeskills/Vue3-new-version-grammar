type Geo = {
    lat:string;
    lng:string;
}
type Address={
    city:string;
    street:string;
    suite:string;
    zipcode:string;
    geo:Geo;
}
type Company = {
    bs:string;
    catchPhrase:string;
    name:string;
}
export interface Data{
readonly id:number;
    name:string;
    phone:string;
    username:string;
    website:string;
    address:Address;
    company:Company;
}