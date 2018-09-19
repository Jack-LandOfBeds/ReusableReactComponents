import { StatusCodes } from '../../../Enums/ApplicationConstants';
export let ErrorMessageByStatus = (statusCode: number): string => {
    let message: string = '';
    if (statusCode === StatusCodes.RequestTimeout) {
        message = 'Connection to Database Lost, Try Again.';
    } else if (statusCode === StatusCodes.Conflict) {
        message = 'Outdated Information Detected, Refresh Required.';
    } else if (statusCode === StatusCodes.InternalServerError) {
        message = 'Server Or Critical Error: 500';
    } else if (statusCode === StatusCodes.ExpectationFailed) {
        message = 'Expectation Failed: 417';
    } else {
        message = 'Critical Unspecified Error - Contact System Administrator For Help';
        throw Error(message);
    }
    return message;
};