const client_errors=Object.freeze({
    BAD_REQUEST:400,
    UNAUTHORISE:401,
    NOT_FOUND:402
});

const server_errors=Object.freeze({
    INTERNAL_SERVER_ERROR:500,
    NOT_IMPLEMENTED:501,

})

const success_codes=Object.freeze({
    OK:200,
    CREATED:201
})

module.exports={
    client_errors,server_errors,success_codes
}