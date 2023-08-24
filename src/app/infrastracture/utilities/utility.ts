import { HttpRequestResult } from "src/app/shared/models/http-request-result";
import { LogManagerService } from "src/app/shared/services/log-manager.service";

export class Utility{

    constructor(){
    }

    public static log<T>(
        httpRequestResult :HttpRequestResult<T>,
        logManagerService:LogManagerService):void{

            for (let index = 0; index < httpRequestResult.errorMessages.length; index++) {
                logManagerService.logError(httpRequestResult.errorMessages[index]);
            }
            for (let index = 0; index < httpRequestResult.informationMessages.length; index++) {
                logManagerService.logInformation(httpRequestResult.informationMessages[index]);
            }
            for (let index = 0; index < httpRequestResult.hiddenMessages.length; index++) {
                logManagerService.logHidden(httpRequestResult.hiddenMessages[index]);
            }
            
        }
}