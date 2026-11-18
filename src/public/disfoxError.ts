import { DisfoxErrorCode } from "./errorCode.js"

export interface DisfoxErrorSource {
    body: any
    requester?: string
}

export interface DisfoxErrorType {
    code: DisfoxErrorCode;
    source?: DisfoxErrorSource;
    message: string;
    sourceError?: typeof Error | string | any;
    details?: any;
}

export class DisfoxError extends Error {
    public code: DisfoxErrorCode
    public source?: DisfoxErrorSource
    public details?: any

   constructor({code, source, message, details}: DisfoxErrorType) {
        super(message)
        this.code = code
        this.source = source
        this.details = details

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, DisfoxError)
        }
   }

}
