import { DisfoxError, DisfoxErrorCode } from "@disfox/errors"

console.log(new DisfoxError({
    "code": DisfoxErrorCode.UNKNOWN,
    "message": "DisfoxError Test"
}))