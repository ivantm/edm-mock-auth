'use strict';

module.exports = [{
    client_id: 'oidcCLIENT',
    client_secret: '91c0fabd17a9db3cfe53f28a10728e39b7724e234ecd78dba1fb05b909fb4ed98c476afc50a634d52808ad3cb2ea744bc8c3b45b7149ec459b5c416a6e8db242',
    grant_types: ['implicit'],
    redirect_uris: ['http://127.0.0.1:3000/'],
    token_endpoint_auth_method: 'client_secret_post',
    response_types: ['id_token token']
}];
