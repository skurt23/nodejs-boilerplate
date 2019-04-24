export function responseOk(data) {
    return {
        status: "ok",
        data: data
    };
}

export function responseError(errorCode, msg) {
    return {
        status: "error",
        code: errorCode,
        msg: msg
    };
}
