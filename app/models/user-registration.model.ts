export class UserRegistration {
    public firstName: string = "";
    public lastName: string = "";
    public email: string = null;
    public password: string = "";
    public mailSubscription: boolean = false;
    public birthDate: string = "";
    public homePark: string = "";
    public gender: string;
    public captcha: string = "";
    
    constructor(
    ) {}
}

export enum Gender {
    Male = 1,
    Female = 2
}