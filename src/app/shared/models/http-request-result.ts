import { HttpStatusCode } from "@angular/common/http";

export class HttpRequestResult<T>{

    constructor() {
        this.errorMessages=[];
        this.hiddenMessages=[];
        this.informationMessages=[];
    }

    public isSuccess!: boolean;
    public httpStatus!: HttpStatusCode;

    public data!: T ;

    public errorMessages: string[];
    public informationMessages: string[];
    public hiddenMessages: string[];
}