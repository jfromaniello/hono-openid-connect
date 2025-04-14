
## ./README.md

# openid-client API Reference

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

## You are probably looking for this

- [authorizationCodeGrant](functions/authorizationCodeGrant.md)
- [buildAuthorizationUrl](functions/buildAuthorizationUrl.md)
- [ClientMetadata](interfaces/ClientMetadata.md)
- [discovery](functions/discovery.md)
- [ServerMetadata](interfaces/ServerMetadata.md)

## Configuration

- [Configuration](classes/Configuration.md)
- [discovery](functions/discovery.md)

## Grants

- [authorizationCodeGrant](functions/authorizationCodeGrant.md)
- [clientCredentialsGrant](functions/clientCredentialsGrant.md)
- [genericGrantRequest](functions/genericGrantRequest.md)
- [initiateBackchannelAuthentication](functions/initiateBackchannelAuthentication.md)
- [initiateDeviceAuthorization](functions/initiateDeviceAuthorization.md)
- [pollBackchannelAuthenticationGrant](functions/pollBackchannelAuthenticationGrant.md)
- [pollDeviceAuthorizationGrant](functions/pollDeviceAuthorizationGrant.md)
- [refreshTokenGrant](functions/refreshTokenGrant.md)

## Advanced Configuration

- [~~allowInsecureRequests~~](functions/allowInsecureRequests.md)
- [dynamicClientRegistration](functions/dynamicClientRegistration.md)
- [enableDecryptingResponses](functions/enableDecryptingResponses.md)
- [enableDetachedSignatureResponseChecks](functions/enableDetachedSignatureResponseChecks.md)
- [enableNonRepudiationChecks](functions/enableNonRepudiationChecks.md)
- [getJwksCache](functions/getJwksCache.md)
- [setJwksCache](functions/setJwksCache.md)
- [useCodeIdTokenResponseType](functions/useCodeIdTokenResponseType.md)
- [useJwtResponseMode](functions/useJwtResponseMode.md)

## Client Authentication Methods

- [ClientSecretBasic](functions/ClientSecretBasic.md)
- [ClientSecretJwt](functions/ClientSecretJwt.md)
- [ClientSecretPost](functions/ClientSecretPost.md)
- [None](functions/None.md)
- [PrivateKeyJwt](functions/PrivateKeyJwt.md)
- [TlsClientAuth](functions/TlsClientAuth.md)

## Errors

- [AuthorizationResponseError](classes/AuthorizationResponseError.md)
- [ClientError](classes/ClientError.md)
- [ResponseBodyError](classes/ResponseBodyError.md)
- [WWWAuthenticateChallengeError](classes/WWWAuthenticateChallengeError.md)

## Authorization Request

- [buildAuthorizationUrl](functions/buildAuthorizationUrl.md)
- [buildAuthorizationUrlWithJAR](functions/buildAuthorizationUrlWithJAR.md)
- [buildAuthorizationUrlWithPAR](functions/buildAuthorizationUrlWithPAR.md)
- [calculatePKCECodeChallenge](functions/calculatePKCECodeChallenge.md)
- [randomNonce](functions/randomNonce.md)
- [randomState](functions/randomState.md)

## DPoP

- [getDPoPHandle](functions/getDPoPHandle.md)
- [randomDPoPKeyPair](functions/randomDPoPKeyPair.md)

## Dynamic Client Registration (DCR)

- [dynamicClientRegistration](functions/dynamicClientRegistration.md)

## OpenID Connect 1.0

- [authorizationCodeGrant](functions/authorizationCodeGrant.md)
- [buildEndSessionUrl](functions/buildEndSessionUrl.md)
- [discovery](functions/discovery.md)
- [fetchUserInfo](functions/fetchUserInfo.md)

## PKCE

- [authorizationCodeGrant](functions/authorizationCodeGrant.md)
- [calculatePKCECodeChallenge](functions/calculatePKCECodeChallenge.md)
- [randomPKCECodeVerifier](functions/randomPKCECodeVerifier.md)

## Protected Resource Requests

- [fetchProtectedResource](functions/fetchProtectedResource.md)
- [fetchUserInfo](functions/fetchUserInfo.md)

## Token Management

- [tokenIntrospection](functions/tokenIntrospection.md)
- [tokenRevocation](functions/tokenRevocation.md)

## Interfaces

- [AuthorizationCodeGrantChecks](interfaces/AuthorizationCodeGrantChecks.md)
- [AuthorizationCodeGrantOptions](interfaces/AuthorizationCodeGrantOptions.md)
- [AuthorizationDetails](interfaces/AuthorizationDetails.md)
- [BackchannelAuthenticationGrantPollOptions](interfaces/BackchannelAuthenticationGrantPollOptions.md)
- [BackchannelAuthenticationResponse](interfaces/BackchannelAuthenticationResponse.md)
- [ConfigurationMethods](interfaces/ConfigurationMethods.md)
- [ConfigurationProperties](interfaces/ConfigurationProperties.md)
- [ConfirmationClaims](interfaces/ConfirmationClaims.md)
- [CryptoKeyPair](interfaces/CryptoKeyPair.md)
- [CustomFetchOptions](interfaces/CustomFetchOptions.md)
- [DecryptionKey](interfaces/DecryptionKey.md)
- [DeviceAuthorizationGrantPollOptions](interfaces/DeviceAuthorizationGrantPollOptions.md)
- [DeviceAuthorizationResponse](interfaces/DeviceAuthorizationResponse.md)
- [DiscoveryRequestOptions](interfaces/DiscoveryRequestOptions.md)
- [DPoPHandle](interfaces/DPoPHandle.md)
- [DPoPOptions](interfaces/DPoPOptions.md)
- [DynamicClientRegistrationRequestOptions](interfaces/DynamicClientRegistrationRequestOptions.md)
- [ExportedJWKSCache](interfaces/ExportedJWKSCache.md)
- [GenerateKeyPairOptions](interfaces/GenerateKeyPairOptions.md)
- [IDToken](interfaces/IDToken.md)
- [IntrospectionResponse](interfaces/IntrospectionResponse.md)
- [JWK](interfaces/JWK.md)
- [JWKS](interfaces/JWKS.md)
- [ModifyAssertionFunction](interfaces/ModifyAssertionFunction.md)
- [ModifyAssertionOptions](interfaces/ModifyAssertionOptions.md)
- [MTLSEndpointAliases](interfaces/MTLSEndpointAliases.md)
- [PrivateKey](interfaces/PrivateKey.md)
- [ServerMetadataHelpers](interfaces/ServerMetadataHelpers.md)
- [TokenEndpointResponse](interfaces/TokenEndpointResponse.md)
- [TokenEndpointResponseHelpers](interfaces/TokenEndpointResponseHelpers.md)
- [UserInfoAddress](interfaces/UserInfoAddress.md)
- [UserInfoResponse](interfaces/UserInfoResponse.md)
- [WWWAuthenticateChallenge](interfaces/WWWAuthenticateChallenge.md)
- [WWWAuthenticateChallengeParameters](interfaces/WWWAuthenticateChallengeParameters.md)

## Type Aliases

- [ClientAuth](type-aliases/ClientAuth.md)
- [CustomFetch](type-aliases/CustomFetch.md)
- [FetchBody](type-aliases/FetchBody.md)
- [JsonArray](type-aliases/JsonArray.md)
- [JsonObject](type-aliases/JsonObject.md)
- [JsonPrimitive](type-aliases/JsonPrimitive.md)
- [JsonValue](type-aliases/JsonValue.md)
- [JWSAlgorithm](type-aliases/JWSAlgorithm.md)
- [OmitSymbolProperties](type-aliases/OmitSymbolProperties.md)

## Variables

- [clockSkew](variables/clockSkew.md)
- [clockTolerance](variables/clockTolerance.md)
- [customFetch](variables/customFetch.md)
- [modifyAssertion](variables/modifyAssertion.md)
- [~~skipStateCheck~~](variables/skipStateCheck.md)
- [~~skipSubjectCheck~~](variables/skipSubjectCheck.md)

## ./classes/AuthorizationResponseError.md

# Class: AuthorizationResponseError

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

Thrown when OAuth 2.0 Authorization Error Response is encountered.

## Example

```http
HTTP/1.1 302 Found
Location: https://client.example.com/cb?error=access_denied&state=xyz
```

## Properties

### cause

• **cause**: [`URLSearchParams`](https://developer.mozilla.org/docs/Web/API/URLSearchParams)

Authorization Response parameters as [URLSearchParams](https://developer.mozilla.org/docs/Web/API/URLSearchParams)

***

### code

• **code**: `"OAUTH_AUTHORIZATION_RESPONSE_ERROR"`

***

### error

• **error**: `string`

Error code given in the Authorization Response

***

### message

• **message**: `string`

***

### name

• **name**: `string`

***

### error\_description?

• `optional` **error\_description**: `string`

Human-readable text providing additional information, used to assist the developer in
understanding the error that occurred, given in the Authorization Response

***

### stack?

• `optional` **stack**: `string`

## ./classes/ClientError.md

# Class: ClientError

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

## Properties

### message

• **message**: `string`

***

### name

• **name**: `string`

***

### cause?

• `optional` **cause**: `unknown`

***

### code?

• `optional` **code**: `string`

***

### stack?

• `optional` **stack**: `string`

## ./classes/Configuration.md

# Class: Configuration

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

Configuration is an abstraction over the
[OAuth 2.0 Authorization Server metadata](../interfaces/ServerMetadata.md) and
[OAuth 2.0 Client metadata](../interfaces/ClientMetadata.md)

Configuration instances are obtained either through

- (RECOMMENDED) the [discovery](../functions/discovery.md) function that discovers the
  [OAuth 2.0 Authorization Server metadata](../interfaces/ServerMetadata.md) using the
  Authorization Server's Issuer Identifier, or
- The [Configuration](Configuration.md) constructor if the
  [OAuth 2.0 Authorization Server metadata](../interfaces/ServerMetadata.md) is known
  upfront

## Examples

(RECOMMENDED) Setting up a Configuration with a Server Metadata discovery
step

```ts
let server!: URL
let clientId!: string
let clientSecret!: string | undefined

let config = await client.discovery(server, clientId, clientSecret)
```

Setting up a Configuration with a constructor

```ts
let server!: client.ServerMetadata
let clientId!: string
let clientSecret!: string | undefined

let config = new client.Configuration(server, clientId, clientSecret)
```

## Implements

- [`ConfigurationMethods`](../interfaces/ConfigurationMethods.md)
- [`ConfigurationProperties`](../interfaces/ConfigurationProperties.md)

## Constructors

### new Configuration()

▸ **new Configuration**(`server`, `clientId`, `metadata`?, `clientAuthentication`?): [`Configuration`](Configuration.md)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `server` | [`ServerMetadata`](../interfaces/ServerMetadata.md) | Authorization Server Metadata |
| `clientId` | `string` | Client Identifier at the Authorization Server |
| `metadata`? | `string` \| [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ClientMetadata`](../interfaces/ClientMetadata.md)\> | Client Metadata, when a string is passed it is a shorthand for passing just [ClientMetadata.client\_secret](../interfaces/ClientMetadata.md#client_secret). |
| `clientAuthentication`? | [`ClientAuth`](../type-aliases/ClientAuth.md) | Implementation of the Client's Authentication Method at the Authorization Server. Default is [ClientSecretPost](../functions/ClientSecretPost.md) using the [ClientMetadata.client\_secret](../interfaces/ClientMetadata.md#client_secret). |

#### Returns

[`Configuration`](Configuration.md)

## ./classes/ResponseBodyError.md

# Class: ResponseBodyError

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

Throw when a server responds with an "OAuth-style" error JSON body

## Example

```http
HTTP/1.1 400 Bad Request
Content-Type: application/json;charset=UTF-8
Cache-Control: no-store
Pragma: no-cache

{
  "error": "invalid_request"
}
```

## Properties

### cause

• **cause**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `undefined` \| [`JsonValue`](../type-aliases/JsonValue.md)\>

The parsed JSON response body

***

### code

• **code**: `"OAUTH_RESPONSE_BODY_ERROR"`

***

### error

• **error**: `string`

Error code given in the JSON response

***

### message

• **message**: `string`

***

### name

• **name**: `string`

***

### response

• **response**: [`Response`](https://developer.mozilla.org/docs/Web/API/Response)

The "OAuth-style" error [Response](https://developer.mozilla.org/docs/Web/API/Response), its [Response.bodyUsed](https://developer.mozilla.org/docs/Web/API/Response/bodyUsed) is `false` and the JSON
body is available in [ResponseBodyError.cause](ResponseBodyError.md#cause)

***

### status

• **status**: `number`

HTTP Status Code of the response

***

### error\_description?

• `optional` **error\_description**: `string`

Human-readable text providing additional information, used to assist the developer in
understanding the error that occurred, given in the JSON response

***

### stack?

• `optional` **stack**: `string`

## ./classes/WWWAuthenticateChallengeError.md

# Class: WWWAuthenticateChallengeError

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

Thrown when a server responds with a parseable WWW-Authenticate challenges, typically because of
expired tokens, or bad client authentication

## Example

```http
HTTP/1.1 401 Unauthorized
WWW-Authenticate: Bearer error="invalid_token",
                         error_description="The access token expired"
```

## Properties

### cause

• **cause**: [`WWWAuthenticateChallenge`](../interfaces/WWWAuthenticateChallenge.md)[]

The parsed WWW-Authenticate HTTP Header challenges

***

### code

• **code**: `"OAUTH_WWW_AUTHENTICATE_CHALLENGE"`

***

### message

• **message**: `string`

***

### name

• **name**: `string`

***

### response

• **response**: [`Response`](https://developer.mozilla.org/docs/Web/API/Response)

The [Response](https://developer.mozilla.org/docs/Web/API/Response) that included a WWW-Authenticate HTTP Header challenges, its
[Response.bodyUsed](https://developer.mozilla.org/docs/Web/API/Response/bodyUsed) is `true`

***

### status

• **status**: `number`

HTTP Status Code of the response

***

### stack?

• `optional` **stack**: `string`

## ./functions/ClientSecretBasic.md

# Function: ClientSecretBasic()

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

▸ **ClientSecretBasic**(`clientSecret`?): [`ClientAuth`](../type-aliases/ClientAuth.md)

**`client_secret_basic`** uses the HTTP `Basic` authentication scheme to send
`client_id` and `client_secret` in an `Authorization` HTTP Header.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `clientSecret`? | `string` | Client Secret |

## Returns

[`ClientAuth`](../type-aliases/ClientAuth.md)

## Examples

Usage with a [Configuration](../classes/Configuration.md) obtained through [discovery](discovery.md)

```ts
let server!: URL
let clientId!: string
let clientSecret!: string
let clientMetadata!: Partial<client.ClientMetadata> | string | undefined

let config = await client.discovery(
  server,
  clientId,
  clientMetadata,
  client.ClientSecretBasic(clientSecret),
)
```

Usage with a [Configuration](../classes/Configuration.md) instance

```ts
let server!: client.ServerMetadata
let clientId!: string
let clientSecret!: string
let clientMetadata!: Partial<client.ClientMetadata> | string | undefined

let config = new client.Configuration(
  server,
  clientId,
  clientMetadata,
  client.ClientSecretBasic(clientSecret),
)
```

## See

 - [OAuth Token Endpoint Authentication Methods](https://www.iana.org/assignments/oauth-parameters/oauth-parameters.xhtml#token-endpoint-auth-method)
 - [RFC 6749 - The OAuth 2.0 Authorization Framework](https://www.rfc-editor.org/rfc/rfc6749.html#section-2.3)
 - [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0-errata2.html#ClientAuthentication)

## ./functions/ClientSecretJwt.md

# Function: ClientSecretJwt()

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

▸ **ClientSecretJwt**(`clientSecret`?, `options`?): [`ClientAuth`](../type-aliases/ClientAuth.md)

**`client_secret_jwt`** uses the HTTP request body to send `client_id`,
`client_assertion_type`, and `client_assertion` as
`application/x-www-form-urlencoded` body parameters. HMAC is used for the
assertion's authenticity and integrity.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `clientSecret`? | `string` | Client Secret |
| `options`? | [`ModifyAssertionOptions`](../interfaces/ModifyAssertionOptions.md) |  |

## Returns

[`ClientAuth`](../type-aliases/ClientAuth.md)

## Examples

Usage with a [Configuration](../classes/Configuration.md) obtained through [discovery](discovery.md)

```ts
let server!: URL
let clientId!: string
let clientSecret!: string
let clientMetadata!: Partial<client.ClientMetadata> | string | undefined

let config = await client.discovery(
  server,
  clientId,
  clientMetadata,
  client.ClientSecretJwt(clientSecret),
)
```

Usage with a [Configuration](../classes/Configuration.md) instance

```ts
let server!: client.ServerMetadata
let clientId!: string
let clientSecret!: string
let clientMetadata!: Partial<client.ClientMetadata> | string | undefined

let config = new client.Configuration(
  server,
  clientId,
  clientMetadata,
  client.ClientSecretJwt(clientSecret),
)
```

## See

 - [OAuth Token Endpoint Authentication Methods](https://www.iana.org/assignments/oauth-parameters/oauth-parameters.xhtml#token-endpoint-auth-method)
 - [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0-errata2.html#ClientAuthentication)

## ./functions/ClientSecretPost.md

# Function: ClientSecretPost()

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

▸ **ClientSecretPost**(`clientSecret`?): [`ClientAuth`](../type-aliases/ClientAuth.md)

**`client_secret_post`** uses the HTTP request body to send `client_id` and
`client_secret` as `application/x-www-form-urlencoded` body parameters

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `clientSecret`? | `string` | Client Secret |

## Returns

[`ClientAuth`](../type-aliases/ClientAuth.md)

## Examples

Usage with a [Configuration](../classes/Configuration.md) obtained through [discovery](discovery.md)

```ts
let server!: URL
let clientId!: string
let clientSecret!: string
let clientMetadata!: Partial<client.ClientMetadata> | string | undefined

let config = await client.discovery(
  server,
  clientId,
  clientMetadata,
  client.ClientSecretPost(clientSecret),
)
```

Usage with a [Configuration](../classes/Configuration.md) instance

```ts
let server!: client.ServerMetadata
let clientId!: string
let clientSecret!: string
let clientMetadata!: Partial<client.ClientMetadata> | string | undefined

let config = new client.Configuration(
  server,
  clientId,
  clientMetadata,
  client.ClientSecretPost(clientSecret),
)
```

## See

 - [OAuth Token Endpoint Authentication Methods](https://www.iana.org/assignments/oauth-parameters/oauth-parameters.xhtml#token-endpoint-auth-method)
 - [RFC 6749 - The OAuth 2.0 Authorization Framework](https://www.rfc-editor.org/rfc/rfc6749.html#section-2.3)
 - [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0-errata2.html#ClientAuthentication)

## ./functions/None.md

# Function: None()

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

▸ **None**(): [`ClientAuth`](../type-aliases/ClientAuth.md)

**`none`** (public client) uses the HTTP request body to send only
`client_id` as `application/x-www-form-urlencoded` body parameter.

## Returns

[`ClientAuth`](../type-aliases/ClientAuth.md)

## Examples

Usage with a [Configuration](../classes/Configuration.md) obtained through [discovery](discovery.md)

```ts
let server!: URL
let clientId!: string
let clientMetadata!: Partial<client.ClientMetadata> | string | undefined

let config = await client.discovery(
  server,
  clientId,
  clientMetadata,
  client.None(),
)
```

Usage with a [Configuration](../classes/Configuration.md) instance

```ts
let server!: client.ServerMetadata
let clientId!: string
let clientMetadata!: Partial<client.ClientMetadata> | string | undefined

let config = new client.Configuration(
  server,
  clientId,
  clientMetadata,
  client.None(),
)
```

## See

 - [OAuth Token Endpoint Authentication Methods](https://www.iana.org/assignments/oauth-parameters/oauth-parameters.xhtml#token-endpoint-auth-method)
 - [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0-errata2.html#ClientAuthentication)

## ./functions/PrivateKeyJwt.md

# Function: PrivateKeyJwt()

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

▸ **PrivateKeyJwt**(`clientPrivateKey`, `options`?): [`ClientAuth`](../type-aliases/ClientAuth.md)

**`private_key_jwt`** uses the HTTP request body to send `client_id`,
`client_assertion_type`, and `client_assertion` as
`application/x-www-form-urlencoded` body parameters. Digital signature is
used for the assertion's authenticity and integrity.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `clientPrivateKey` | [`CryptoKey`](https://developer.mozilla.org/docs/Web/API/CryptoKey) \| [`PrivateKey`](../interfaces/PrivateKey.md) |  |
| `options`? | [`ModifyAssertionOptions`](../interfaces/ModifyAssertionOptions.md) | - |

## Returns

[`ClientAuth`](../type-aliases/ClientAuth.md)

## Examples

Usage with a [Configuration](../classes/Configuration.md) obtained through [discovery](discovery.md)

```ts
let server!: URL
let key!: client.CryptoKey | client.PrivateKey
let clientId!: string
let clientMetadata!: Partial<client.ClientMetadata> | string | undefined

let config = await client.discovery(
  server,
  clientId,
  clientMetadata,
  client.PrivateKeyJwt(key),
)
```

Usage with a [Configuration](../classes/Configuration.md) instance

```ts
let server!: client.ServerMetadata
let key!: client.CryptoKey | client.PrivateKey
let clientId!: string
let clientMetadata!: Partial<client.ClientMetadata> | string | undefined

let config = new client.Configuration(
  server,
  clientId,
  clientMetadata,
  client.PrivateKeyJwt(key),
)
```

## See

 - [OAuth Token Endpoint Authentication Methods](https://www.iana.org/assignments/oauth-parameters/oauth-parameters.xhtml#token-endpoint-auth-method)
 - [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0-errata2.html#ClientAuthentication)

## ./functions/TlsClientAuth.md

# Function: TlsClientAuth()

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

▸ **TlsClientAuth**(): [`ClientAuth`](../type-aliases/ClientAuth.md)

**`tls_client_auth`** uses the HTTP request body to send only `client_id` as
`application/x-www-form-urlencoded` body parameter and the mTLS key and
certificate is configured through
[ClientMetadata.use\_mtls\_endpoint\_aliases](../interfaces/ClientMetadata.md#use_mtls_endpoint_aliases) and [customFetch](../variables/customFetch.md).

## Returns

[`ClientAuth`](../type-aliases/ClientAuth.md)

## Examples

Usage with a [Configuration](../classes/Configuration.md) obtained through [discovery](discovery.md)

```ts
let server!: URL
let clientId!: string

let clientMetadata = { use_mtls_endpoint_aliases: true }
let config = await client.discovery(
  server,
  clientId,
  clientMetadata,
  client.TlsClientAuth(),
)
```

Usage with a [Configuration](../classes/Configuration.md) instance

```ts
let server!: client.ServerMetadata
let clientId!: string

let clientMetadata = { use_mtls_endpoint_aliases: true }
let config = new client.Configuration(
  server,
  clientId,
  clientMetadata,
  client.TlsClientAuth(),
)
```

## See

 - [OAuth Token Endpoint Authentication Methods](https://www.iana.org/assignments/oauth-parameters/oauth-parameters.xhtml#token-endpoint-auth-method)
 - [RFC 8705 - OAuth 2.0 Mutual-TLS Client Authentication (PKI Mutual-TLS Method)](https://www.rfc-editor.org/rfc/rfc8705.html#name-pki-mutual-tls-method)

## ./functions/allowInsecureRequests.md

# Function: ~~allowInsecureRequests()~~

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

▸ **allowInsecureRequests**(`config`): `void`

By default the module only allows interactions with HTTPS endpoints. This
removes that restriction.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | [`Configuration`](../classes/Configuration.md) |

## Returns

`void`

## Deprecated

Marked as deprecated only to make it stand out as something you
  shouldn't have the need to use, possibly only for local development and
  testing against non-TLS secured environments.

## Examples

Usage with a [Configuration](../classes/Configuration.md) obtained through [discovery](discovery.md) to also
disable its HTTPS-only restriction.

```ts
let server!: URL
let clientId!: string
let clientMetadata!: Partial<client.ClientMetadata> | string | undefined
let clientAuth!: client.ClientAuth | undefined

let config = await client.discovery(
  server,
  clientId,
  clientMetadata,
  clientAuth,
  {
    execute: [client.allowInsecureRequests],
  },
)
```

Usage with a [Configuration](../classes/Configuration.md) instance

```ts
let config!: client.Configuration

client.allowInsecureRequests(config)
```

## ./functions/authorizationCodeGrant.md

# Function: authorizationCodeGrant()

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

▸ **authorizationCodeGrant**(`config`, `currentUrl`, `checks`?, `tokenEndpointParameters`?, `options`?): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`TokenEndpointResponse`](../interfaces/TokenEndpointResponse.md) & [`TokenEndpointResponseHelpers`](../interfaces/TokenEndpointResponseHelpers.md)\>

This method validates the authorization response and then executes the
[Authorization Code Grant](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1) at the Authorization Server's
[token endpoint](../interfaces/ServerMetadata.md#token_endpoint) to obtain an access
token. ID Token and Refresh Token are also optionally issued by the server.

Note:
[URL of the authorization server's token endpoint](../interfaces/ServerMetadata.md#token_endpoint)
must be configured.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | [`Configuration`](../classes/Configuration.md) | - |
| `currentUrl` | [`URL`](https://developer.mozilla.org/docs/Web/API/URL) \| [`Request`](https://developer.mozilla.org/docs/Web/API/Request) | Current [URL](https://developer.mozilla.org/docs/Web/API/URL) the Authorization Server provided an Authorization Response to or a [Request](https://developer.mozilla.org/docs/Web/API/Request), the [Authorization Code Grant](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1) parameters are extracted from this. |
| `checks`? | [`AuthorizationCodeGrantChecks`](../interfaces/AuthorizationCodeGrantChecks.md) | CSRF Protection checks like PKCE, expected state, or expected nonce |
| `tokenEndpointParameters`? | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\> \| [`URLSearchParams`](https://developer.mozilla.org/docs/Web/API/URLSearchParams) | Additional parameters that will be sent to the token endpoint, typically used for parameters such as `resource` ([Resource Indicator](https://www.rfc-editor.org/rfc/rfc8707)) in cases where multiple resource indicators were requested but the authorization server only supports issuing an access token with a single audience |
| `options`? | [`AuthorizationCodeGrantOptions`](../interfaces/AuthorizationCodeGrantOptions.md) | - |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`TokenEndpointResponse`](../interfaces/TokenEndpointResponse.md) & [`TokenEndpointResponseHelpers`](../interfaces/TokenEndpointResponseHelpers.md)\>

## Example

```ts
let config!: client.Configuration
let getCodeVerifierFromSession!: (...args: any) => string
let getCurrentUrl!: (...args: any) => URL

let tokens = await client.authorizationCodeGrant(
  config,
  getCurrentUrl(),
  {
    pkceCodeVerifier: getCodeVerifierFromSession(),
  },
)
```

## ./functions/buildAuthorizationUrl.md

# Function: buildAuthorizationUrl()

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

▸ **buildAuthorizationUrl**(`config`, `parameters`): [`URL`](https://developer.mozilla.org/docs/Web/API/URL)

Returns a URL to redirect the user-agent to, in order to request
authorization at the Authorization Server

Note:
[URL of the authorization server's authorization endpoint](../interfaces/ServerMetadata.md#authorization_endpoint)
must be configured.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | [`Configuration`](../classes/Configuration.md) | - |
| `parameters` | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\> \| [`URLSearchParams`](https://developer.mozilla.org/docs/Web/API/URLSearchParams) | Authorization request parameters that will be included in the [URL.searchParams](https://developer.mozilla.org/docs/Web/API/URL/searchParams) |

## Returns

[`URL`](https://developer.mozilla.org/docs/Web/API/URL)

[URL](https://developer.mozilla.org/docs/Web/API/URL) Instance with [URL.searchParams](https://developer.mozilla.org/docs/Web/API/URL/searchParams) including
  `client_id`, `response_type`, and all parameters from the `parameters`
  argument

## Example

```ts
let config!: client.Configuration
let redirect_uri!: string
let scope!: string

// these must be unique for every single authorization request
let code_verifier = client.randomPKCECodeVerifier()
let code_challenge =
  await client.calculatePKCECodeChallenge(code_verifier)

let redirectTo = client.buildAuthorizationUrl(config, {
  redirect_uri,
  scope,
  code_challenge,
  code_challenge_method: 'S256',
})
// redirect now
```

## ./functions/buildAuthorizationUrlWithJAR.md

# Function: buildAuthorizationUrlWithJAR()

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

▸ **buildAuthorizationUrlWithJAR**(`config`, `parameters`, `signingKey`, `options`?): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`URL`](https://developer.mozilla.org/docs/Web/API/URL)\>

Returns a URL to redirect the user-agent to, in order to request
authorization at the Authorization Server with a prior step of using
[JAR](https://www.rfc-editor.org/rfc/rfc9101.html)

Note:
[URL of the authorization server's authorization endpoint](../interfaces/ServerMetadata.md#authorization_endpoint)
must be configured.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | [`Configuration`](../classes/Configuration.md) | - |
| `parameters` | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\> \| [`URLSearchParams`](https://developer.mozilla.org/docs/Web/API/URLSearchParams) | Authorization request parameters that will be encoded in a [JAR](https://www.rfc-editor.org/rfc/rfc9101.html) Request Object |
| `signingKey` | [`CryptoKey`](https://developer.mozilla.org/docs/Web/API/CryptoKey) \| [`PrivateKey`](../interfaces/PrivateKey.md) | Key to sign the JAR Request Object with. |
| `options`? | [`ModifyAssertionOptions`](../interfaces/ModifyAssertionOptions.md) | - |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`URL`](https://developer.mozilla.org/docs/Web/API/URL)\>

[URL](https://developer.mozilla.org/docs/Web/API/URL) Instance with [URL.searchParams](https://developer.mozilla.org/docs/Web/API/URL/searchParams) including
  `client_id` and `request`

## Examples

Using [JAR](https://www.rfc-editor.org/rfc/rfc9101.html)

```ts
let config!: client.Configuration
let redirect_uri!: string
let scope!: string
let key!: client.CryptoKey

// these must be unique for every single authorization request
let code_verifier = client.randomPKCECodeVerifier()
let code_challenge =
  await client.calculatePKCECodeChallenge(code_verifier)

let redirectTo = await client.buildAuthorizationUrlWithJAR(
  config,
  {
    redirect_uri,
    scope,
    code_challenge,
    code_challenge_method: 'S256',
  },
  key,
)
// redirect now
```

Using [JAR](https://www.rfc-editor.org/rfc/rfc9101.html) and [PAR](https://www.rfc-editor.org/rfc/rfc9126.html) together

```ts
let config!: client.Configuration
let redirect_uri!: string
let scope!: string
let key!: client.CryptoKey

// these must be unique for every single authorization request
let code_verifier = client.randomPKCECodeVerifier()
let code_challenge =
  await client.calculatePKCECodeChallenge(code_verifier)

let { searchParams: params } = await client.buildAuthorizationUrlWithJAR(
  config,
  {
    redirect_uri,
    scope,
    code_challenge,
    code_challenge_method: 'S256',
  },
  key,
)

let redirectTo = await client.buildAuthorizationUrlWithPAR(
  config,
  params,
)
// redirect now
```

## ./functions/buildAuthorizationUrlWithPAR.md

# Function: buildAuthorizationUrlWithPAR()

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

▸ **buildAuthorizationUrlWithPAR**(`config`, `parameters`, `options`?): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`URL`](https://developer.mozilla.org/docs/Web/API/URL)\>

Returns a URL to redirect the user-agent to, in order to request
authorization at the Authorization Server with a prior step of using
[PAR](https://www.rfc-editor.org/rfc/rfc9126.html)

Note:
[URL of the authorization server's authorization endpoint](../interfaces/ServerMetadata.md#authorization_endpoint)
must be configured.

Note:
[URL of the authorization server's pushed authorization request endpoint](../interfaces/ServerMetadata.md#pushed_authorization_request_endpoint)
must be configured.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | [`Configuration`](../classes/Configuration.md) | - |
| `parameters` | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\> \| [`URLSearchParams`](https://developer.mozilla.org/docs/Web/API/URLSearchParams) | Authorization request parameters that will be sent to [PAR](https://www.rfc-editor.org/rfc/rfc9126.html) |
| `options`? | [`DPoPOptions`](../interfaces/DPoPOptions.md) | - |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`URL`](https://developer.mozilla.org/docs/Web/API/URL)\>

[URL](https://developer.mozilla.org/docs/Web/API/URL) Instance with [URL.searchParams](https://developer.mozilla.org/docs/Web/API/URL/searchParams) including
  `client_id` and `request_uri`.

## Examples

Using [PAR](https://www.rfc-editor.org/rfc/rfc9126.html)

```ts
let config!: client.Configuration
let redirect_uri!: string
let scope!: string

// these must be unique for every single authorization request
let code_verifier = client.randomPKCECodeVerifier()
let code_challenge =
  await client.calculatePKCECodeChallenge(code_verifier)

let redirectTo = await client.buildAuthorizationUrlWithPAR(config, {
  redirect_uri,
  scope,
  code_challenge,
  code_challenge_method: 'S256',
})
// redirect now
```

Using [JAR](https://www.rfc-editor.org/rfc/rfc9101.html) and [PAR](https://www.rfc-editor.org/rfc/rfc9126.html) together

```ts
let config!: client.Configuration
let redirect_uri!: string
let scope!: string
let key!: client.CryptoKey

// these must be unique for every single authorization request
let code_verifier = client.randomPKCECodeVerifier()
let code_challenge =
  await client.calculatePKCECodeChallenge(code_verifier)

let { searchParams: params } = await client.buildAuthorizationUrlWithJAR(
  config,
  {
    redirect_uri,
    scope,
    code_challenge,
    code_challenge_method: 'S256',
  },
  key,
)

let redirectTo = await client.buildAuthorizationUrlWithPAR(
  config,
  params,
)
// redirect now
```

## ./functions/buildEndSessionUrl.md

# Function: buildEndSessionUrl()

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

▸ **buildEndSessionUrl**(`config`, `parameters`?): [`URL`](https://developer.mozilla.org/docs/Web/API/URL)

Returns a URL to redirect the user-agent to after they log out to trigger
[RP-Initiated Logout](https://openid.net/specs/openid-connect-rpinitiated-1_0-final.html#RPLogout)
at the Authorization Server.

Note:
[URL of the authorization server's end session endpoint](../interfaces/ServerMetadata.md#end_session_endpoint)
must be configured.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | [`Configuration`](../classes/Configuration.md) | - |
| `parameters`? | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\> \| [`URLSearchParams`](https://developer.mozilla.org/docs/Web/API/URLSearchParams) | Logout endpoint parameters |

## Returns

[`URL`](https://developer.mozilla.org/docs/Web/API/URL)

[URL](https://developer.mozilla.org/docs/Web/API/URL) Instance with [URL.searchParams](https://developer.mozilla.org/docs/Web/API/URL/searchParams) including
  `client_id` and all parameters from the `parameters` argument

## Example

```ts
let config!: client.Configuration
let post_logout_redirect_uri!: string
let id_token!: string

let redirectTo = client.buildEndSessionUrl(config, {
  post_logout_redirect_uri,
  id_token_hint: id_token,
})
// redirect now
```

## ./functions/calculatePKCECodeChallenge.md

# Function: calculatePKCECodeChallenge()

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

▸ **calculatePKCECodeChallenge**(`codeVerifier`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

Calculates the PKCE `code_challenge` value to send with an authorization
request using the S256 PKCE Code Challenge Method transformation

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `codeVerifier` | `string` | `code_verifier` value generated e.g. from [randomPKCECodeVerifier](randomPKCECodeVerifier.md) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

S256 `code_challenge` value calculated from a provided
  `code_verifier`

## ./functions/clientCredentialsGrant.md

# Function: clientCredentialsGrant()

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

▸ **clientCredentialsGrant**(`config`, `parameters`?, `options`?): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`TokenEndpointResponse`](../interfaces/TokenEndpointResponse.md) & [`TokenEndpointResponseHelpers`](../interfaces/TokenEndpointResponseHelpers.md)\>

Performs an OAuth 2.0 [Client Credentials Grant](https://datatracker.ietf.org/doc/html/rfc6749#section-4.4) at the Authorization
Server's [token endpoint](../interfaces/ServerMetadata.md#token_endpoint) using parameters
from the `parameters` argument

Note:
[URL of the authorization server's token endpoint](../interfaces/ServerMetadata.md#token_endpoint)
must be configured.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | [`Configuration`](../classes/Configuration.md) | - |
| `parameters`? | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\> \| [`URLSearchParams`](https://developer.mozilla.org/docs/Web/API/URLSearchParams) | Additional parameters that will be sent to the token endpoint, typically used for parameters such as `scope` and a `resource` ([Resource Indicator](https://www.rfc-editor.org/rfc/rfc8707)) |
| `options`? | [`DPoPOptions`](../interfaces/DPoPOptions.md) | - |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`TokenEndpointResponse`](../interfaces/TokenEndpointResponse.md) & [`TokenEndpointResponseHelpers`](../interfaces/TokenEndpointResponseHelpers.md)\>

## Example

Requesting an Access Token using the [Client Credentials Grant](https://datatracker.ietf.org/doc/html/rfc6749#section-4.4) with
a `scope` and a `resource` ([Resource Indicator](https://www.rfc-editor.org/rfc/rfc8707))
parameters.

```ts
let config!: client.Configuration
let scope!: string
let resource!: string

let tokenEndpointResponse = await client.clientCredentialsGrant(config, {
  scope,
  resource,
})
```

## ./functions/discovery.md

# Function: discovery()

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

▸ **discovery**(`server`, `clientId`, `metadata`?, `clientAuthentication`?, `options`?): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Configuration`](../classes/Configuration.md)\>

Performs Authorization Server Metadata discovery and returns a
[Configuration](../classes/Configuration.md) with the discovered
[Authorization Server](../interfaces/ServerMetadata.md) metadata.

Passing the Authorization Server's Issuer Identifier to this method is the
RECOMMENDED method of client configuration.

This has the same effect as calling the [Configuration](../classes/Configuration.md) constructor
except that the server metadata is discovered from its own Authorization
Server Metadata discovery document.

Note: This method also accepts a URL pointing directly to the Authorization
Server's discovery document, doing so is merely a shorthand for using
[fetch](https://developer.mozilla.org/docs/Web/API/Window/fetch) and passing the discovered JSON metadata (as
[ServerMetadata](../interfaces/ServerMetadata.md)) into the [Configuration](../classes/Configuration.md) constructor. Doing so is
NOT RECOMMENDED as it disables the [ServerMetadata.issuer](../interfaces/ServerMetadata.md#issuer) validation.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `server` | [`URL`](https://developer.mozilla.org/docs/Web/API/URL) | URL representation of the Authorization Server's Issuer Identifier |
| `clientId` | `string` | Client Identifier at the Authorization Server |
| `metadata`? | `string` \| [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ClientMetadata`](../interfaces/ClientMetadata.md)\> | Client Metadata, when a string is passed it is a shorthand for passing just [ClientMetadata.client\_secret](../interfaces/ClientMetadata.md#client_secret) |
| `clientAuthentication`? | [`ClientAuth`](../type-aliases/ClientAuth.md) | Implementation of the Client's Authentication Method at the Authorization Server. Default is [ClientSecretPost](ClientSecretPost.md) using the [ClientMetadata.client\_secret](../interfaces/ClientMetadata.md#client_secret). |
| `options`? | [`DiscoveryRequestOptions`](../interfaces/DiscoveryRequestOptions.md) |  |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Configuration`](../classes/Configuration.md)\>

## ./functions/dynamicClientRegistration.md

# Function: dynamicClientRegistration()

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

▸ **dynamicClientRegistration**(`server`, `metadata`, `clientAuthentication`?, `options`?): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Configuration`](../classes/Configuration.md)\>

Performs Authorization Server Metadata discovery and subsequently a Dynamic
Client Registration at the discovered Authorization Server's
[ServerMetadata.registration\_endpoint](../interfaces/ServerMetadata.md#registration_endpoint) using the provided client
metadata.

Note: This method also accepts a URL pointing directly to the Authorization
Server's discovery document. Doing so is NOT RECOMMENDED as it disables the
[ServerMetadata.issuer](../interfaces/ServerMetadata.md#issuer) validation.

Note: The method does not contain any logic to default the registered
"token_endpoint_auth_method" based on
[ServerMetadata.token\_endpoint\_auth\_methods\_supported](../interfaces/ServerMetadata.md#token_endpoint_auth_methods_supported), nor does it
default the "clientAuthentication" argument value beyond what its description
says.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `server` | [`URL`](https://developer.mozilla.org/docs/Web/API/URL) | URL representation of the Authorization Server's Issuer Identifier |
| `metadata` | [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ClientMetadata`](../interfaces/ClientMetadata.md)\> | Client Metadata to register at the Authorization Server |
| `clientAuthentication`? | [`ClientAuth`](../type-aliases/ClientAuth.md) | Implementation of the Client's Authentication Method at the Authorization Server. Default is [ClientSecretPost](ClientSecretPost.md) using the [ClientMetadata.client\_secret](../interfaces/ClientMetadata.md#client_secret) that the Authorization Server issued, [None](None.md) otherwise. |
| `options`? | [`DynamicClientRegistrationRequestOptions`](../interfaces/DynamicClientRegistrationRequestOptions.md) |  |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Configuration`](../classes/Configuration.md)\>

## See

 - [RFC 7591 - OAuth 2.0 Dynamic Client Registration Protocol (DCR)](https://www.rfc-editor.org/rfc/rfc7591.html)
 - [OpenID Connect Dynamic Client Registration 1.0 (DCR)](https://openid.net/specs/openid-connect-registration-1_0-errata2.html)
 - [RFC 9449 - OAuth 2.0 Demonstrating Proof-of-Possession at the Application Layer (DPoP)](https://www.rfc-editor.org/rfc/rfc9449.html#name-protected-resource-access)

## ./functions/enableDecryptingResponses.md

# Function: enableDecryptingResponses()

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

▸ **enableDecryptingResponses**(`config`, `contentEncryptionAlgorithms`, ...`keys`): `void`

Enables the client to process encrypted ID Tokens, encrypted JWT UserInfo
responses, and encrypted JWT Introspection responses. Multiple private keys
may be provided for the decryption key selection process but only a single
one must match the process.

The following JWE Key Management Algorithms are supported

- ECDH-ES
- ECDH-ES+A128KW
- ECDH-ES+A192KW
- ECDH-ES+A256KW
- RSA-OAEP
- RSA-OAEP-256
- RSA-OAEP-384
- RSA-OAEP-512

Note: ECDH algorithms only allow P-256 or X25519 key curve to be used

The following JWE Content Encryption Algorithms are supported

- A128GCM
- A192GCM
- A256GCM
- A128CBC-HS256
- A192CBC-HS384
- A256CBC-HS512

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | [`Configuration`](../classes/Configuration.md) | - |
| `contentEncryptionAlgorithms` | `string`[] | An allow list for JWE Content Encryption Algorithms identifiers |
| ...`keys` | ([`CryptoKey`](https://developer.mozilla.org/docs/Web/API/CryptoKey) \| [`DecryptionKey`](../interfaces/DecryptionKey.md))[] | Keys to enable decrypting assertions with |

## Returns

`void`

## Example

```ts
let key!: client.CryptoKey | client.DecryptionKey
let config!: client.Configuration

client.enableDecryptingResponses(config, ['A128CBC-HS256'], key)
```

## ./functions/enableDetachedSignatureResponseChecks.md

# Function: enableDetachedSignatureResponseChecks()

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

▸ **enableDetachedSignatureResponseChecks**(`config`): `void`

This builds on top of [useCodeIdTokenResponseType](useCodeIdTokenResponseType.md) and enables the
response to be validated as per the
[FAPI 1.0 Advanced profile](https://openid.net/specs/openid-financial-api-part-2-1_0-final.html#id-token-as-detached-signature).

## Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | [`Configuration`](../classes/Configuration.md) |

## Returns

`void`

## Examples

Usage with a [Configuration](../classes/Configuration.md) obtained through [discovery](discovery.md)

```ts
let server!: URL
let clientId!: string
let clientMetadata!: Partial<client.ClientMetadata> | string | undefined
let clientAuth!: client.ClientAuth | undefined

let config = await client.discovery(
  server,
  clientId,
  clientMetadata,
  clientAuth,
  {
    execute: [
      client.useCodeIdTokenResponseType,
      client.enableDetachedSignatureResponseChecks,
    ],
  },
)
```

Usage with a [Configuration](../classes/Configuration.md) instance

```ts
let config!: client.Configuration

client.useCodeIdTokenResponseType(config)
client.enableDetachedSignatureResponseChecks(config)
```

## See

[ID Token as Detached Signature](https://openid.net/specs/openid-financial-api-part-2-1_0-final.html#id-token-as-detached-signature)

## ./functions/enableNonRepudiationChecks.md

# Function: enableNonRepudiationChecks()

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

▸ **enableNonRepudiationChecks**(`config`): `void`

Enables validating the JWS Signature of either a JWT [Response.body](https://developer.mozilla.org/docs/Web/API/Response/body) or
[TokenEndpointResponse.id\_token](../interfaces/TokenEndpointResponse.md#id_token) of a processed [Response](https://developer.mozilla.org/docs/Web/API/Response) such as
JWT UserInfo or JWT Introspection responses.

Note: Validating signatures of JWTs received via direct communication between
the client and a TLS-secured endpoint (which it is here) is not mandatory
since the TLS server validation is used to validate the issuer instead of
checking the token signature. You only need to use this method for
non-repudiation purposes.

Note:
[URL of the authorization server's JWK Set document](../interfaces/ServerMetadata.md#jwks_uri)
must be configured.

Note: Supports only digital signatures using
[these supported JWS Algorithms](../type-aliases/JWSAlgorithm.md).

## Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | [`Configuration`](../classes/Configuration.md) |

## Returns

`void`

## Examples

Usage with a [Configuration](../classes/Configuration.md) obtained through [discovery](discovery.md) to also
disable the its HTTPS-only restriction.

```ts
let server!: URL
let clientId!: string
let clientMetadata!: Partial<client.ClientMetadata> | string | undefined
let clientAuth!: client.ClientAuth | undefined

let config = await client.discovery(
  server,
  clientId,
  clientMetadata,
  clientAuth,
  {
    execute: [client.enableNonRepudiationChecks],
  },
)
```

Usage with a [Configuration](../classes/Configuration.md) instance

```ts
let config!: client.Configuration

client.enableNonRepudiationChecks(config)
```

## ./functions/fetchProtectedResource.md

# Function: fetchProtectedResource()

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

▸ **fetchProtectedResource**(`config`, `accessToken`, `url`, `method`, `body`?, `headers`?, `options`?): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

Performs an arbitrary Protected Resource resource.

Authorization Header is used to transmit the Access Token value. No other
Access Token means of transport are supported.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | [`Configuration`](../classes/Configuration.md) | - |
| `accessToken` | `string` | OAuth 2.0 Access Token |
| `url` | [`URL`](https://developer.mozilla.org/docs/Web/API/URL) | URL to send the request to |
| `method` | `string` | HTTP Request method to use for the request |
| `body`? | [`FetchBody`](../type-aliases/FetchBody.md) | HTTP Request body to send in the request |
| `headers`? | [`Headers`](https://developer.mozilla.org/docs/Web/API/Headers) | HTTP Request headers to add to the request |
| `options`? | [`DPoPOptions`](../interfaces/DPoPOptions.md) | - |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

## ./functions/fetchUserInfo.md

# Function: fetchUserInfo()

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

▸ **fetchUserInfo**(`config`, `accessToken`, `expectedSubject`, `options`?): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`UserInfoResponse`](../interfaces/UserInfoResponse.md)\>

Performs a UserInfo Request at the
[userinfo endpoint](../interfaces/ServerMetadata.md#userinfo_endpoint) and returns the
parsed UserInfo claims from either its JSON or JWT response.

Authorization Header is used to transmit the Access Token value. No other
Access Token means of transport are supported.

Note:
[URL of authorization server's UserInfo endpoint](../interfaces/ServerMetadata.md#userinfo_endpoint)
must be configured.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | [`Configuration`](../classes/Configuration.md) | - |
| `accessToken` | `string` | OAuth 2.0 Access Token |
| `expectedSubject` | `string` \| *typeof* `skipSubjectCheck` | Expected `sub` claim value. In response to OpenID Connect authentication requests, the expected subject is the one from the ID Token claims retrieved from [TokenEndpointResponseHelpers.claims](../interfaces/TokenEndpointResponseHelpers.md#claims) which is available on all returned Token Endpoint responses. |
| `options`? | [`DPoPOptions`](../interfaces/DPoPOptions.md) | - |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`UserInfoResponse`](../interfaces/UserInfoResponse.md)\>

## See

[OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0-errata2.html#UserInfo)

## ./functions/genericGrantRequest.md

# Function: genericGrantRequest()

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

▸ **genericGrantRequest**(`config`, `grantType`, `parameters`, `options`?): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`TokenEndpointResponse`](../interfaces/TokenEndpointResponse.md) & [`TokenEndpointResponseHelpers`](../interfaces/TokenEndpointResponseHelpers.md)\>

Performs any Grant request at the
[token endpoint](../interfaces/ServerMetadata.md#token_endpoint). The purpose is to be
able to execute grant requests such as Token Exchange Grant, JWT Bearer Token
Grant, SAML 2.0 Bearer Assertion Grant, or any other grant.

Note:
[URL of the authorization server's token endpoint](../interfaces/ServerMetadata.md#token_endpoint)
must be configured.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | [`Configuration`](../classes/Configuration.md) | - |
| `grantType` | `string` | Grant Type |
| `parameters` | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\> \| [`URLSearchParams`](https://developer.mozilla.org/docs/Web/API/URLSearchParams) | Parameters required by the given grant type to send to the [token endpoint](../interfaces/ServerMetadata.md#token_endpoint) |
| `options`? | [`DPoPOptions`](../interfaces/DPoPOptions.md) | - |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`TokenEndpointResponse`](../interfaces/TokenEndpointResponse.md) & [`TokenEndpointResponseHelpers`](../interfaces/TokenEndpointResponseHelpers.md)\>

## Example

Requesting an Access Token using the JWT Bearer Token Grant

```ts
let config!: client.Configuration
let scope!: string
let resource!: string
let assertion!: string

let tokenEndpointResponse = await client.genericGrantRequest(
  config,
  'urn:ietf:params:oauth:grant-type:jwt-bearer',
  { scope, resource, assertion },
)
```

## See

 - [Token Exchange Grant](https://www.rfc-editor.org/rfc/rfc8693.html)
 - [JWT Bearer Token Grant](https://www.rfc-editor.org/rfc/rfc7523.html#section-2.1)
 - [SAML 2.0 Bearer Assertion Grant](https://www.rfc-editor.org/rfc/rfc7522.html#section-2.1)

## ./functions/getDPoPHandle.md

# Function: getDPoPHandle()

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

▸ **getDPoPHandle**(`config`, `keyPair`, `options`?): [`DPoPHandle`](../interfaces/DPoPHandle.md)

Returns a wrapper / handle around a public/private key pair that is used for
negotiating and proving proof-of-possession to sender-constrain OAuth 2.0
tokens via [DPoP](https://www.rfc-editor.org/rfc/rfc9449.html) at the Authorization Server and Resource Server.

Support for [DPoP](https://www.rfc-editor.org/rfc/rfc9449.html) at the authorization is indicated by
[ServerMetadata.dpop\_signing\_alg\_values\_supported](../interfaces/ServerMetadata.md#dpop_signing_alg_values_supported). Whether the
authorization server ends up sender-constraining the access token is at the
server's discretion. When an access token is sender-constrained then the
resulting
[\`token\_type\` will be \`dpop\`](../interfaces/TokenEndpointResponse.md#token_type).

This wrapper / handle also keeps track of server-issued nonces, allowing this
module to automatically retry requests with a fresh nonce when the server
indicates the need to use one.

Note: Public Clients that use DPoP will also get their Refresh Token
sender-constrained, this binding is not indicated in the response.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | [`Configuration`](../classes/Configuration.md) | - |
| `keyPair` | [`CryptoKeyPair`](../interfaces/CryptoKeyPair.md) | [CryptoKeyPair](../interfaces/CryptoKeyPair.md) to sign the DPoP Proof JWT, [randomDPoPKeyPair](randomDPoPKeyPair.md) may be used to generate it |
| `options`? | [`ModifyAssertionOptions`](../interfaces/ModifyAssertionOptions.md) | - |

## Returns

[`DPoPHandle`](../interfaces/DPoPHandle.md)

## See

[RFC 9449 - OAuth 2.0 Demonstrating Proof of Possession (DPoP)](https://www.rfc-editor.org/rfc/rfc9449.html)

## ./functions/getJwksCache.md

# Function: getJwksCache()

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

▸ **getJwksCache**(`config`): `undefined` \| [`ExportedJWKSCache`](../interfaces/ExportedJWKSCache.md)

This function can be used to export the JSON Web Key Set and the timestamp at
which it was last fetched if the client used the
[authorization server's JWK Set](../interfaces/ServerMetadata.md#jwks_uri) to validate
digital signatures.

This function is intended for cloud computing runtimes that cannot keep an in
memory cache between their code's invocations. Use in runtimes where an in
memory cache between requests is available is not desirable.

Note: the client only uses the authorization server's JWK Set when
[enableNonRepudiationChecks](enableNonRepudiationChecks.md), [useJwtResponseMode](useJwtResponseMode.md), or
[useCodeIdTokenResponseType](useCodeIdTokenResponseType.md) is used.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | [`Configuration`](../classes/Configuration.md) |

## Returns

`undefined` \| [`ExportedJWKSCache`](../interfaces/ExportedJWKSCache.md)

## ./functions/initiateBackchannelAuthentication.md

# Function: initiateBackchannelAuthentication()

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

▸ **initiateBackchannelAuthentication**(`config`, `parameters`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`BackchannelAuthenticationResponse`](../interfaces/BackchannelAuthenticationResponse.md)\>

Initiates a [Client-Initiated Backchannel Authentication Grant](https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0-final.html) using
parameters from the `parameters` argument.

Note:
[URL of the authorization server's backchannel authentication endpoint](../interfaces/ServerMetadata.md#backchannel_authentication_endpoint)
must be configured.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | [`Configuration`](../classes/Configuration.md) | - |
| `parameters` | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\> \| [`URLSearchParams`](https://developer.mozilla.org/docs/Web/API/URLSearchParams) | Authorization request parameters that will be sent to the backchannel authentication endpoint |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`BackchannelAuthenticationResponse`](../interfaces/BackchannelAuthenticationResponse.md)\>

## Example

```ts
let config!: client.Configuration
let scope!: string
let login_hint!: string // one of login_hint, id_token_hint, or login_hint_token parameters must be provided in CIBA

let backchannelAuthenticationResponse =
  await client.initiateBackchannelAuthentication(config, {
    scope,
    login_hint,
  })

let { auth_req_id } = backchannelAuthenticationResponse
```

## ./functions/initiateDeviceAuthorization.md

# Function: initiateDeviceAuthorization()

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

▸ **initiateDeviceAuthorization**(`config`, `parameters`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`DeviceAuthorizationResponse`](../interfaces/DeviceAuthorizationResponse.md)\>

Initiates a [Device Authorization Grant](https://www.rfc-editor.org/rfc/rfc8628.html) using parameters from the
`parameters` argument.

Note:
[URL of the authorization server's device authorization endpoint](../interfaces/ServerMetadata.md#device_authorization_endpoint)
must be configured.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | [`Configuration`](../classes/Configuration.md) | - |
| `parameters` | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\> \| [`URLSearchParams`](https://developer.mozilla.org/docs/Web/API/URLSearchParams) | Authorization request parameters that will be sent to the device authorization endpoint |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`DeviceAuthorizationResponse`](../interfaces/DeviceAuthorizationResponse.md)\>

## Example

```ts
let config!: client.Configuration
let scope!: string

let deviceAuthorizationResponse =
  await client.initiateDeviceAuthorization(config, { scope })

let { user_code, verification_uri, verification_uri_complete } =
  deviceAuthorizationResponse

console.log({ user_code, verification_uri, verification_uri_complete })
```

## ./functions/pollBackchannelAuthenticationGrant.md

# Function: pollBackchannelAuthenticationGrant()

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

▸ **pollBackchannelAuthenticationGrant**(`config`, `backchannelAuthenticationResponse`, `parameters`?, `options`?): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`TokenEndpointResponse`](../interfaces/TokenEndpointResponse.md) & [`TokenEndpointResponseHelpers`](../interfaces/TokenEndpointResponseHelpers.md)\>

Continuously polls the [token endpoint](../interfaces/ServerMetadata.md#token_endpoint)
until the end-user finishes the
[Client-Initiated Backchannel Authentication Grant](https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0-final.html) process

Note:
[URL of the authorization server's token endpoint](../interfaces/ServerMetadata.md#token_endpoint)
must be configured.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | [`Configuration`](../classes/Configuration.md) | - |
| `backchannelAuthenticationResponse` | [`BackchannelAuthenticationResponse`](../interfaces/BackchannelAuthenticationResponse.md) | Backchannel Authentication Response obtained from [initiateBackchannelAuthentication](initiateBackchannelAuthentication.md) |
| `parameters`? | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\> \| [`URLSearchParams`](https://developer.mozilla.org/docs/Web/API/URLSearchParams) | Additional parameters that will be sent to the token endpoint, typically used for parameters such as `scope` and a `resource` ([Resource Indicator](https://www.rfc-editor.org/rfc/rfc8707)) |
| `options`? | [`BackchannelAuthenticationGrantPollOptions`](../interfaces/BackchannelAuthenticationGrantPollOptions.md) | - |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`TokenEndpointResponse`](../interfaces/TokenEndpointResponse.md) & [`TokenEndpointResponseHelpers`](../interfaces/TokenEndpointResponseHelpers.md)\>

## Example

```ts
let config!: client.Configuration
let scope!: string
let login_hint!: string // one of login_hint, id_token_hint, or login_hint_token parameters must be provided in CIBA

let backchannelAuthenticationResponse =
  await client.initiateBackchannelAuthentication(config, {
    scope,
    login_hint,
  })

// OPTIONAL: If your client is configured with Ping Mode you'd invoke the following after getting the CIBA Ping Callback (its implementation is framework specific and therefore out of scope for openid-client)

let { auth_req_id } = backchannelAuthenticationResponse

let tokenEndpointResponse =
  await client.pollBackchannelAuthenticationGrant(
    config,
    backchannelAuthenticationResponse,
  )
```

## ./functions/pollDeviceAuthorizationGrant.md

# Function: pollDeviceAuthorizationGrant()

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

▸ **pollDeviceAuthorizationGrant**(`config`, `deviceAuthorizationResponse`, `parameters`?, `options`?): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`TokenEndpointResponse`](../interfaces/TokenEndpointResponse.md) & [`TokenEndpointResponseHelpers`](../interfaces/TokenEndpointResponseHelpers.md)\>

Continuously polls the [token endpoint](../interfaces/ServerMetadata.md#token_endpoint)
until the end-user finishes the [Device Authorization Grant](https://www.rfc-editor.org/rfc/rfc8628.html) process
on their secondary device

Note:
[URL of the authorization server's token endpoint](../interfaces/ServerMetadata.md#token_endpoint)
must be configured.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | [`Configuration`](../classes/Configuration.md) | - |
| `deviceAuthorizationResponse` | [`DeviceAuthorizationResponse`](../interfaces/DeviceAuthorizationResponse.md) | Device Authorization Response obtained from [initiateDeviceAuthorization](initiateDeviceAuthorization.md) |
| `parameters`? | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\> \| [`URLSearchParams`](https://developer.mozilla.org/docs/Web/API/URLSearchParams) | Additional parameters that will be sent to the token endpoint, typically used for parameters such as `scope` and a `resource` ([Resource Indicator](https://www.rfc-editor.org/rfc/rfc8707)) |
| `options`? | [`DeviceAuthorizationGrantPollOptions`](../interfaces/DeviceAuthorizationGrantPollOptions.md) | - |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`TokenEndpointResponse`](../interfaces/TokenEndpointResponse.md) & [`TokenEndpointResponseHelpers`](../interfaces/TokenEndpointResponseHelpers.md)\>

## Example

```ts
let config!: client.Configuration
let scope!: string

let deviceAuthorizationResponse =
  await client.initiateDeviceAuthorization(config, { scope })

let { user_code, verification_uri, verification_uri_complete } =
  deviceAuthorizationResponse

console.log({ user_code, verification_uri, verification_uri_complete })

let tokenEndpointResponse = await client.pollDeviceAuthorizationGrant(
  config,
  deviceAuthorizationResponse,
)
```

## ./functions/randomDPoPKeyPair.md

# Function: randomDPoPKeyPair()

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

▸ **randomDPoPKeyPair**(`alg`?, `options`?): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`CryptoKeyPair`](../interfaces/CryptoKeyPair.md)\>

Generates random [CryptoKeyPair](../interfaces/CryptoKeyPair.md) to sign DPoP Proof JWTs with

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `alg`? | `string` | One of the supported [JWS Algorithm](../type-aliases/JWSAlgorithm.md) identifiers. Default is `ES256`. |
| `options`? | [`GenerateKeyPairOptions`](../interfaces/GenerateKeyPairOptions.md) |  |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`CryptoKeyPair`](../interfaces/CryptoKeyPair.md)\>

## See

[DPoP](https://www.rfc-editor.org/rfc/rfc9449.html)

## ./functions/randomNonce.md

# Function: randomNonce()

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

▸ **randomNonce**(): `string`

## Returns

`string`

Random `nonce` value

## ./functions/randomPKCECodeVerifier.md

# Function: randomPKCECodeVerifier()

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

▸ **randomPKCECodeVerifier**(): `string`

## Returns

`string`

Random `code_verifier` value

## ./functions/randomState.md

# Function: randomState()

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

▸ **randomState**(): `string`

## Returns

`string`

Random `state` value

## ./functions/refreshTokenGrant.md

# Function: refreshTokenGrant()

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

▸ **refreshTokenGrant**(`config`, `refreshToken`, `parameters`?, `options`?): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`TokenEndpointResponse`](../interfaces/TokenEndpointResponse.md) & [`TokenEndpointResponseHelpers`](../interfaces/TokenEndpointResponseHelpers.md)\>

Performs an OAuth 2.0 [Refresh Token Grant](https://datatracker.ietf.org/doc/html/rfc6749#section-6) at the Authorization
Server's [token endpoint](../interfaces/ServerMetadata.md#token_endpoint) using parameters
from the `parameters` argument, allowing a client to obtain a new access
token using a valid refresh token.

Note:
[URL of the authorization server's token endpoint](../interfaces/ServerMetadata.md#token_endpoint)
must be configured.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | [`Configuration`](../classes/Configuration.md) | - |
| `refreshToken` | `string` | OAuth 2.0 Refresh Token provided by the authorization server that is used to obtain a new access token. |
| `parameters`? | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\> \| [`URLSearchParams`](https://developer.mozilla.org/docs/Web/API/URLSearchParams) | Additional parameters that will be sent to the token endpoint, typically used for parameters such as `scope` and a `resource` ([Resource Indicator](https://www.rfc-editor.org/rfc/rfc8707)) |
| `options`? | [`DPoPOptions`](../interfaces/DPoPOptions.md) | - |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`TokenEndpointResponse`](../interfaces/TokenEndpointResponse.md) & [`TokenEndpointResponseHelpers`](../interfaces/TokenEndpointResponseHelpers.md)\>

## Example

Requesting a new Access Token using the [Refresh Token Grant](https://datatracker.ietf.org/doc/html/rfc6749#section-6) with a
`scope` and a `resource` ([Resource Indicator](https://www.rfc-editor.org/rfc/rfc8707))
parameters.

```ts
let config!: client.Configuration
let refreshToken!: string
let scope!: string
let resource!: string

let tokenEndpointResponse = await client.refreshTokenGrant(
  config,
  refreshToken,
  {
    scope,
    resource,
  },
)
```

## ./functions/setJwksCache.md

# Function: setJwksCache()

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

▸ **setJwksCache**(`config`, `jwksCache`): `void`

DANGER ZONE - Use of this function has security implications that must be
understood, assessed for applicability, and accepted before use. It is
critical that the JSON Web Key Set cache only be writable by your own code.

This option is intended for cloud computing runtimes that cannot keep an in
memory cache between their code's invocations. Use in runtimes where an in
memory cache between requests is available is not desirable.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | [`Configuration`](../classes/Configuration.md) | - |
| `jwksCache` | [`ExportedJWKSCache`](../interfaces/ExportedJWKSCache.md) | JWKS Cache previously obtained from [getJwksCache](getJwksCache.md) |

## Returns

`void`

## ./functions/tokenIntrospection.md

# Function: tokenIntrospection()

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

▸ **tokenIntrospection**(`config`, `token`, `parameters`?): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`IntrospectionResponse`](../interfaces/IntrospectionResponse.md)\>

Queries the
[token introspection endpoint](../interfaces/ServerMetadata.md#introspection_endpoint) to
obtain the status and metadata of a given token. The range of metadata
returned is at the discretion of the authorization server.

Note:
[URL of the authorization server's token introspection endpoint](../interfaces/ServerMetadata.md#introspection_endpoint)
must be configured.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | [`Configuration`](../classes/Configuration.md) | - |
| `token` | `string` | OAuth 2.0 token (either access token or refresh token) that is being introspected |
| `parameters`? | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\> \| [`URLSearchParams`](https://developer.mozilla.org/docs/Web/API/URLSearchParams) | Additional parameters to be included in the introspection request body, such as `token_type_hint` |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`IntrospectionResponse`](../interfaces/IntrospectionResponse.md)\>

## See

 - [RFC 7662 - OAuth 2.0 Token Introspection](https://www.rfc-editor.org/rfc/rfc7662.html#section-2)
 - [RFC 9701 - JWT Response for OAuth Token Introspection](https://www.rfc-editor.org/rfc/rfc9701.html#section-4)

## ./functions/tokenRevocation.md

# Function: tokenRevocation()

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

▸ **tokenRevocation**(`config`, `token`, `parameters`?): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Attempts revocation of an OAuth 2.0 token by making a request to the
[token revocation endpoint](../interfaces/ServerMetadata.md#revocation_endpoint). Whether
the token gets revoked, and the effect of that revocation is at the
discretion of the authorization server.

Note:
[URL of the authorization server's token revocation endpoint](../interfaces/ServerMetadata.md#revocation_endpoint)
must be configured.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | [`Configuration`](../classes/Configuration.md) | - |
| `token` | `string` | OAuth 2.0 token (either access token or refresh token) that is being revoked |
| `parameters`? | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\> \| [`URLSearchParams`](https://developer.mozilla.org/docs/Web/API/URLSearchParams) | Additional parameters to be included in the revocation request body, such as `token_type_hint` |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

## See

[RFC 7009 - OAuth 2.0 Token Revocation](https://www.rfc-editor.org/rfc/rfc7009.html#section-2)

## ./functions/useCodeIdTokenResponseType.md

# Function: useCodeIdTokenResponseType()

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

▸ **useCodeIdTokenResponseType**(`config`): `void`

This changes the `response_type` used by the client to be `code id_token` and
expects the authorization server response passed to
[authorizationCodeGrant](authorizationCodeGrant.md) to be one described by
[OpenID Connect 1.0 Hybrid Flow](https://openid.net/specs/openid-connect-core-1_0-errata2.html#HybridFlowAuth).

Note:
[URL of the authorization server's JWK Set document](../interfaces/ServerMetadata.md#jwks_uri)
must be configured.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | [`Configuration`](../classes/Configuration.md) |

## Returns

`void`

## Examples

Usage with a [Configuration](../classes/Configuration.md) obtained through [discovery](discovery.md)

```ts
let server!: URL
let clientId!: string
let clientMetadata!: Partial<client.ClientMetadata> | string | undefined
let clientAuth!: client.ClientAuth | undefined

let config = await client.discovery(
  server,
  clientId,
  clientMetadata,
  clientAuth,
  {
    execute: [client.useCodeIdTokenResponseType],
  },
)
```

Usage with a [Configuration](../classes/Configuration.md) instance

```ts
let config!: client.Configuration

client.useCodeIdTokenResponseType(config)
```

## See

[OpenID Connect 1.0 Hybrid Flow](https://openid.net/specs/openid-connect-core-1_0-errata2.html#HybridFlowAuth)

## ./functions/useJwtResponseMode.md

# Function: useJwtResponseMode()

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

▸ **useJwtResponseMode**(`config`): `void`

This changes the `response_mode` used by the client to be `jwt` and expects
the authorization server response passed to [authorizationCodeGrant](authorizationCodeGrant.md) to
be one described by [JARM](https://openid.net/specs/oauth-v2-jarm-final.html).

Note:
[URL of the authorization server's JWK Set document](../interfaces/ServerMetadata.md#jwks_uri)
must be configured.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | [`Configuration`](../classes/Configuration.md) |

## Returns

`void`

## Examples

Usage with a [Configuration](../classes/Configuration.md) obtained through [discovery](discovery.md)

```ts
let server!: URL
let clientId!: string
let clientMetadata!: Partial<client.ClientMetadata> | string | undefined
let clientAuth!: client.ClientAuth | undefined

let config = await client.discovery(
  server,
  clientId,
  clientMetadata,
  clientAuth,
  {
    execute: [client.useJwtResponseMode],
  },
)
```

Usage with a [Configuration](../classes/Configuration.md) instance

```ts
let config!: client.Configuration

client.useJwtResponseMode(config)
```

## See

[JARM](https://openid.net/specs/oauth-v2-jarm-final.html)

## ./interfaces/AuthorizationCodeGrantChecks.md

# Interface: AuthorizationCodeGrantChecks

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

## Properties

### expectedNonce?

• `optional` **expectedNonce**: `string`

Expected value of the `nonce` ID Token claim. This value must match
exactly. When `undefined` the expectation is that there is no `nonce` in
the ID Token (i.e. also `undefined`).

Using this option also means that an ID Token must be part of the response.

***

### expectedState?

• `optional` **expectedState**: `string` \| *typeof* `skipStateCheck`

Expected value of the `state` authorization response parameter. This value
must match exactly. When `undefined` the expectation is that there is no
`state` in the authorization response.

***

### idTokenExpected?

• `optional` **idTokenExpected**: `boolean`

Use this to have the client assert that an ID Token is returned by the
Authorization Server.

Note: When `expectedNonce` or `maxAge` is used this has no effect.

***

### maxAge?

• `optional` **maxAge**: `number`

ID Token [\`auth\_time\`](IDToken.md#auth_time) claim value will be checked
to be present and conform to this `maxAge` value. Use of this option is
required if you sent a `max_age` parameter in the authorization request.
Default is [ClientMetadata.default\_max\_age](ClientMetadata.md#default_max_age) and falls back to not
checking the claim's value beyond it being a number when present.

***

### pkceCodeVerifier?

• `optional` **pkceCodeVerifier**: `string`

When PKCE is used this is the `code_verifier` that will be sent to the
[token endpoint](ServerMetadata.md#token_endpoint).

## ./interfaces/AuthorizationCodeGrantOptions.md

# Interface: AuthorizationCodeGrantOptions

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

## Properties

### DPoP?

• `optional` **DPoP**: [`DPoPHandle`](DPoPHandle.md)

DPoP handle to use for requesting a sender-constrained access token.
Usually obtained from [getDPoPHandle](../functions/getDPoPHandle.md)

#### See

[RFC 9449 - OAuth 2.0 Demonstrating Proof of Possession (DPoP)](https://www.rfc-editor.org/rfc/rfc9449.html)

## ./interfaces/AuthorizationDetails.md

# Interface: AuthorizationDetails

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

## Indexable

\[`parameter`: `string`\]: `undefined` \| [`JsonValue`](../type-aliases/JsonValue.md)

## Properties

### type

• `readonly` **type**: `string`

***

### actions?

• `readonly` `optional` **actions**: `string`[]

***

### datatypes?

• `readonly` `optional` **datatypes**: `string`[]

***

### identifier?

• `readonly` `optional` **identifier**: `string`

***

### locations?

• `readonly` `optional` **locations**: `string`[]

***

### privileges?

• `readonly` `optional` **privileges**: `string`[]

## ./interfaces/BackchannelAuthenticationGrantPollOptions.md

# Interface: BackchannelAuthenticationGrantPollOptions

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

## Properties

### DPoP?

• `optional` **DPoP**: [`DPoPHandle`](DPoPHandle.md)

DPoP handle to use for requesting a sender-constrained access token.
Usually obtained from [getDPoPHandle](../functions/getDPoPHandle.md)

#### See

[RFC 9449 - OAuth 2.0 Demonstrating Proof of Possession (DPoP)](https://www.rfc-editor.org/rfc/rfc9449.html)

***

### signal?

• `optional` **signal**: [`AbortSignal`](https://developer.mozilla.org/docs/Web/API/AbortSignal)

AbortSignal to abort polling. Default is that the operation will time out
after the indicated expires_in property returned by the server in
[initiateBackchannelAuthentication](../functions/initiateBackchannelAuthentication.md)

## ./interfaces/BackchannelAuthenticationResponse.md

# Interface: BackchannelAuthenticationResponse

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

## Indexable

\[`parameter`: `string`\]: `undefined` \| [`JsonValue`](../type-aliases/JsonValue.md)

## Properties

### auth\_req\_id

• `readonly` **auth\_req\_id**: `string`

Unique identifier to identify the authentication request.

***

### expires\_in

• `readonly` **expires\_in**: `number`

The lifetime in seconds of the "auth_req_id".

***

### interval?

• `readonly` `optional` **interval**: `number`

The minimum amount of time in seconds that the client should wait between polling requests to
the token endpoint.

## ./interfaces/ClientMetadata.md

# Interface: ClientMetadata

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

A subset of the [IANA OAuth Client Metadata
registry](https://www.iana.org/assignments/oauth-parameters/oauth-parameters.xhtml#client-metadata)
that has an effect on how the Client functions

## Indexable

\[`metadata`: `string`\]: `undefined` \| [`JsonValue`](../type-aliases/JsonValue.md)

## Properties

### client\_id

• **client\_id**: `string`

Client identifier.

***

### \[clockSkew\]?

• `optional` **\[clockSkew\]**: `number`

See [clockSkew](../variables/clockSkew.md).

***

### \[clockTolerance\]?

• `optional` **\[clockTolerance\]**: `number`

See [clockTolerance](../variables/clockTolerance.md).

***

### authorization\_signed\_response\_alg?

• `optional` **authorization\_signed\_response\_alg**: `string`

JWS `alg` algorithm required for signing authorization responses. When not configured the
default is to allow only algorithms listed in
[\`as.authorization\_signing\_alg\_values\_supported\`](ServerMetadata.md#authorization_signing_alg_values_supported)
and fall back to `RS256` when the authorization server metadata is not set.

***

### client\_secret?

• `optional` **client\_secret**: `string`

Client secret.

***

### default\_max\_age?

• `optional` **default\_max\_age**: `number`

Default Maximum Authentication Age.

***

### id\_token\_signed\_response\_alg?

• `optional` **id\_token\_signed\_response\_alg**: `string`

JWS `alg` algorithm required for signing the ID Token issued to this Client. When not
configured the default is to allow only algorithms listed in
[\`as.id\_token\_signing\_alg\_values\_supported\`](ServerMetadata.md#id_token_signing_alg_values_supported)
and fall back to `RS256` when the authorization server metadata is not set.

***

### introspection\_signed\_response\_alg?

• `optional` **introspection\_signed\_response\_alg**: `string`

JWS `alg` algorithm REQUIRED for signed introspection responses. When not configured the
default is to allow only algorithms listed in
[\`as.introspection\_signing\_alg\_values\_supported\`](ServerMetadata.md#introspection_signing_alg_values_supported)
and fall back to `RS256` when the authorization server metadata is not set.

***

### require\_auth\_time?

• `optional` **require\_auth\_time**: `boolean`

Boolean value specifying whether the [\`auth\_time\`](IDToken.md#auth_time) Claim in the ID Token
is REQUIRED. Default is `false`.

***

### use\_mtls\_endpoint\_aliases?

• `optional` **use\_mtls\_endpoint\_aliases**: `boolean`

Indicates the requirement for a client to use mutual TLS endpoint aliases
indicated by the
[Authorization Server Metadata](ServerMetadata.md#mtls_endpoint_aliases).
Default is `false`.

When combined with [customFetch](../variables/customFetch.md) (to use a [Fetch API](https://developer.mozilla.org/docs/Web/API/Window/fetch)
implementation that supports client certificates) this can be used to
target security profiles that utilize Mutual-TLS for either client
authentication or sender constraining.

#### Examples

(Node.js) Using [nodejs/undici](https://github.com/nodejs/undici) for
Mutual-TLS Client Authentication and Certificate-Bound Access Tokens
support.

```ts
import * as undici from 'undici'

let config!: client.Configuration
let key!: string // PEM-encoded key
let cert!: string // PEM-encoded certificate

let agent = new undici.Agent({ connect: { key, cert } })

config[client.customFetch] = (...args) =>
  // @ts-expect-error
  undici.fetch(args[0], { ...args[1], dispatcher: agent })
```

(Deno) Using Deno.createHttpClient API for Mutual-TLS Client Authentication
and Certificate-Bound Access Tokens support.

```ts
let config!: client.Configuration
let key!: string // PEM-encoded key
let cert!: string // PEM-encoded certificate

// @ts-expect-error
let agent = Deno.createHttpClient({ key, cert })

config[client.customFetch] = (...args) =>
  // @ts-expect-error
  fetch(args[0], { ...args[1], client: agent })
```

#### See

[RFC 8705 - OAuth 2.0 Mutual-TLS Client Authentication and Certificate-Bound Access Tokens](https://www.rfc-editor.org/rfc/rfc8705.html)

***

### userinfo\_signed\_response\_alg?

• `optional` **userinfo\_signed\_response\_alg**: `string`

JWS `alg` algorithm REQUIRED for signing UserInfo Responses. When not configured the default is
to allow only algorithms listed in
[\`as.userinfo\_signing\_alg\_values\_supported\`](ServerMetadata.md#userinfo_signing_alg_values_supported)
and fail otherwise.

## ./interfaces/ConfigurationMethods.md

# Interface: ConfigurationMethods

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

Public methods available on a [Configuration](../classes/Configuration.md) instance

## Methods

### clientMetadata()

▸ **clientMetadata**(): [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype)\<[`OmitSymbolProperties`](../type-aliases/OmitSymbolProperties.md)\<[`ClientMetadata`](ClientMetadata.md)\>\>

Used to retrieve the Client Metadata

#### Returns

[`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype)\<[`OmitSymbolProperties`](../type-aliases/OmitSymbolProperties.md)\<[`ClientMetadata`](ClientMetadata.md)\>\>

***

### serverMetadata()

▸ **serverMetadata**(): [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype)\<[`ServerMetadata`](ServerMetadata.md)\> & [`ServerMetadataHelpers`](ServerMetadataHelpers.md)

Used to retrieve the Authorization Server Metadata

#### Returns

[`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype)\<[`ServerMetadata`](ServerMetadata.md)\> & [`ServerMetadataHelpers`](ServerMetadataHelpers.md)

## ./interfaces/ConfigurationProperties.md

# Interface: ConfigurationProperties

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

Public properties available on a [Configuration](../classes/Configuration.md) instance

## Properties

### \[customFetch\]?

• `optional` **\[customFetch\]**: [`CustomFetch`](../type-aliases/CustomFetch.md)

Custom [Fetch API](https://developer.mozilla.org/docs/Web/API/Window/fetch) implementation to use for the HTTP Requests
the client will be making.

#### See

[customFetch](../variables/customFetch.md)

***

### timeout?

• `optional` **timeout**: `number`

Timeout (in seconds) for the HTTP Requests the client will be making.
Default is `30` (seconds)

## ./interfaces/ConfirmationClaims.md

# Interface: ConfirmationClaims

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

## Indexable

\[`claim`: `string`\]: `undefined` \| [`JsonValue`](../type-aliases/JsonValue.md)

## Properties

### jkt?

• `readonly` `optional` **jkt**: `string`

***

### x5t#S256?

• `readonly` `optional` **x5t#S256**: `string`

## ./interfaces/CryptoKeyPair.md

# Interface: CryptoKeyPair

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

## Properties

### privateKey

• **privateKey**: [`CryptoKey`](https://developer.mozilla.org/docs/Web/API/CryptoKey)

***

### publicKey

• **publicKey**: [`CryptoKey`](https://developer.mozilla.org/docs/Web/API/CryptoKey)

## ./interfaces/CustomFetchOptions.md

# Interface: CustomFetchOptions

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

## Properties

### body

• **body**: [`FetchBody`](../type-aliases/FetchBody.md)

The request body content to send to the server

***

### headers

• **headers**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\>

HTTP Headers

***

### method

• **method**: `string`

The
[request method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

***

### redirect

• **redirect**: `"manual"`

See [Request.redirect](https://developer.mozilla.org/docs/Web/API/Request/redirect)

***

### signal?

• `optional` **signal**: [`AbortSignal`](https://developer.mozilla.org/docs/Web/API/AbortSignal)

An AbortSignal configured as per the [ConfigurationProperties.timeout](ConfigurationProperties.md#timeout)
value

## ./interfaces/DPoPHandle.md

# Interface: DPoPHandle

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

DPoP handle to use for requesting a sender-constrained access token. Obtained
from [getDPoPHandle](../functions/getDPoPHandle.md)

## See

[RFC 9449 - OAuth 2.0 Demonstrating Proof of Possession (DPoP)](https://www.rfc-editor.org/rfc/rfc9449.html)

## Methods

### calculateThumbprint()

▸ **calculateThumbprint**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

Calculates the JWK Thumbprint of the DPoP public key using the SHA-256 hash function for use as
the optional `dpop_jkt` authorization request parameter.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

#### See

[RFC 9449 - OAuth 2.0 Demonstrating Proof-of-Possession at the Application Layer (DPoP)](https://www.rfc-editor.org/rfc/rfc9449.html#name-authorization-code-binding-)

## ./interfaces/DPoPOptions.md

# Interface: DPoPOptions

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

## Properties

### DPoP?

• `optional` **DPoP**: [`DPoPHandle`](DPoPHandle.md)

DPoP handle to use for requesting a sender-constrained access token.
Usually obtained from [getDPoPHandle](../functions/getDPoPHandle.md)

#### See

[RFC 9449 - OAuth 2.0 Demonstrating Proof of Possession (DPoP)](https://www.rfc-editor.org/rfc/rfc9449.html)

## ./interfaces/DecryptionKey.md

# Interface: DecryptionKey

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

## Properties

### key

• **key**: [`CryptoKey`](https://developer.mozilla.org/docs/Web/API/CryptoKey)

An asymmetric private CryptoKey. Its algorithm must be compatible with a
supported JWE Key Management Algorithm Identifier

***

### alg?

• `optional` **alg**: `string`

The key's JWE Key Management Algorithm Identifier, this can be used to
limit ECDH and X25519 keys to only a specified ECDH-ES* JWE Key Management
Algorithm (The other (RSA) keys have a JWE Key Management Algorithm
Identifier fully specified by their CryptoKey algorithm).

***

### kid?

• `optional` **kid**: `string`

The key's JWK Key ID.

## ./interfaces/DeviceAuthorizationGrantPollOptions.md

# Interface: DeviceAuthorizationGrantPollOptions

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

## Properties

### DPoP?

• `optional` **DPoP**: [`DPoPHandle`](DPoPHandle.md)

DPoP handle to use for requesting a sender-constrained access token.
Usually obtained from [getDPoPHandle](../functions/getDPoPHandle.md)

#### See

[RFC 9449 - OAuth 2.0 Demonstrating Proof of Possession (DPoP)](https://www.rfc-editor.org/rfc/rfc9449.html)

***

### signal?

• `optional` **signal**: [`AbortSignal`](https://developer.mozilla.org/docs/Web/API/AbortSignal)

AbortSignal to abort polling. Default is that the operation will time out
after the indicated expires_in property returned by the server in
[initiateDeviceAuthorization](../functions/initiateDeviceAuthorization.md)

## ./interfaces/DeviceAuthorizationResponse.md

# Interface: DeviceAuthorizationResponse

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

## Indexable

\[`parameter`: `string`\]: `undefined` \| [`JsonValue`](../type-aliases/JsonValue.md)

## Properties

### device\_code

• `readonly` **device\_code**: `string`

The device verification code

***

### expires\_in

• `readonly` **expires\_in**: `number`

The lifetime in seconds of the "device_code" and "user_code"

***

### user\_code

• `readonly` **user\_code**: `string`

The end-user verification code

***

### verification\_uri

• `readonly` **verification\_uri**: `string`

The end-user verification URI on the authorization server. The URI should be short and easy to
remember as end users will be asked to manually type it into their user agent.

***

### interval?

• `readonly` `optional` **interval**: `number`

The minimum amount of time in seconds that the client should wait between polling requests to
the token endpoint.

***

### verification\_uri\_complete?

• `readonly` `optional` **verification\_uri\_complete**: `string`

A verification URI that includes the "user_code" (or other information with the same function
as the "user_code"), which is designed for non-textual transmission

## ./interfaces/DiscoveryRequestOptions.md

# Interface: DiscoveryRequestOptions

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

## Properties

### \[customFetch\]?

• `optional` **\[customFetch\]**: [`CustomFetch`](../type-aliases/CustomFetch.md)

Custom [Fetch API](https://developer.mozilla.org/docs/Web/API/Window/fetch) implementation to use for the HTTP Requests
the client will be making. If this option is used, then the customFetch
value will be assigned to the resolved [Configuration](../classes/Configuration.md) instance for
use with all its future individual HTTP requests.

#### See

[customFetch](../variables/customFetch.md)

***

### algorithm?

• `optional` **algorithm**: `"oidc"` \| `"oauth2"`

The issuer transformation algorithm to use. Default is `oidc`.

#### Example

```txt
Given the Issuer Identifier is https://example.com
  oidc  => https://example.com/.well-known/openid-configuration
  oauth => https://example.com/.well-known/oauth-authorization-server

Given the Issuer Identifier is https://example.com/pathname
  oidc  => https://example.com/pathname/.well-known/openid-configuration
  oauth => https://example.com/.well-known/oauth-authorization-server/pathname
```

#### See

 - [OpenID Connect Discovery 1.0 (oidc)](https://openid.net/specs/openid-connect-discovery-1_0-errata2.html)
 - [RFC8414 - OAuth 2.0 Authorization Server Metadata (oauth)](https://www.rfc-editor.org/rfc/rfc8414.html)

***

### execute?

• `optional` **execute**: (`config`) => `void`[]

Methods (available list linked below) to execute with the
[Configuration](../classes/Configuration.md) instance as argument after it is instantiated

Note: Presence of [allowInsecureRequests](../functions/allowInsecureRequests.md) in this option also enables
the use of insecure HTTP requests for the Authorization Server Metadata
discovery request itself.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | [`Configuration`](../classes/Configuration.md) |

#### Returns

`void`

#### Example

Disable the HTTPS-only restriction for the discovery call and subsequently
for all requests made with the resulting [Configuration](../classes/Configuration.md) instance.

```ts
let server!: URL
let clientId!: string
let clientMetadata!:
  | Partial<client.ClientMetadata>
  | undefined
  | string
let clientAuth!: client.ClientAuth | undefined

let config = await client.discovery(
  server,
  clientId,
  clientMetadata,
  clientAuth,
  {
    execute: [client.allowInsecureRequests],
  },
)
```

#### See

 - [allowInsecureRequests](../functions/allowInsecureRequests.md)
 - [enableNonRepudiationChecks](../functions/enableNonRepudiationChecks.md)
 - [useCodeIdTokenResponseType](../functions/useCodeIdTokenResponseType.md)
 - [enableDetachedSignatureResponseChecks](../functions/enableDetachedSignatureResponseChecks.md)
 - [useJwtResponseMode](../functions/useJwtResponseMode.md)

***

### timeout?

• `optional` **timeout**: `number`

Timeout (in seconds) for the Authorization Server Metadata discovery. If
this option is used, then the same timeout value will be assigned to the
resolved [Configuration](../classes/Configuration.md) instance for use with all its future
individual HTTP requests. Default is `30` (seconds)

## ./interfaces/DynamicClientRegistrationRequestOptions.md

# Interface: DynamicClientRegistrationRequestOptions

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

## Properties

### \[customFetch\]?

• `optional` **\[customFetch\]**: [`CustomFetch`](../type-aliases/CustomFetch.md)

Custom [Fetch API](https://developer.mozilla.org/docs/Web/API/Window/fetch) implementation to use for the HTTP Requests
the client will be making. If this option is used, then the customFetch
value will be assigned to the resolved [Configuration](../classes/Configuration.md) instance for
use with all its future individual HTTP requests.

#### See

[customFetch](../variables/customFetch.md)

***

### algorithm?

• `optional` **algorithm**: `"oidc"` \| `"oauth2"`

The issuer transformation algorithm to use. Default is `oidc`.

#### Example

```txt
Given the Issuer Identifier is https://example.com
  oidc  => https://example.com/.well-known/openid-configuration
  oauth => https://example.com/.well-known/oauth-authorization-server

Given the Issuer Identifier is https://example.com/pathname
  oidc  => https://example.com/pathname/.well-known/openid-configuration
  oauth => https://example.com/.well-known/oauth-authorization-server/pathname
```

#### See

 - [OpenID Connect Discovery 1.0 (oidc)](https://openid.net/specs/openid-connect-discovery-1_0-errata2.html)
 - [RFC8414 - OAuth 2.0 Authorization Server Metadata (oauth)](https://www.rfc-editor.org/rfc/rfc8414.html)

***

### DPoP?

• `optional` **DPoP**: [`DPoPHandle`](DPoPHandle.md)

DPoP handle to use for requesting a sender-constrained access token.
Usually obtained from [getDPoPHandle](../functions/getDPoPHandle.md)

#### See

[RFC 9449 - OAuth 2.0 Demonstrating Proof of Possession (DPoP)](https://www.rfc-editor.org/rfc/rfc9449.html)

***

### execute?

• `optional` **execute**: (`config`) => `void`[]

Methods (available list linked below) to execute with the
[Configuration](../classes/Configuration.md) instance as argument after it is instantiated

Note: Presence of [allowInsecureRequests](../functions/allowInsecureRequests.md) in this option also enables
the use of insecure HTTP requests for the Authorization Server Metadata
discovery request itself.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | [`Configuration`](../classes/Configuration.md) |

#### Returns

`void`

#### Example

Disable the HTTPS-only restriction for the discovery call and subsequently
for all requests made with the resulting [Configuration](../classes/Configuration.md) instance.

```ts
let server!: URL
let clientId!: string
let clientMetadata!:
  | Partial<client.ClientMetadata>
  | undefined
  | string
let clientAuth!: client.ClientAuth | undefined

let config = await client.discovery(
  server,
  clientId,
  clientMetadata,
  clientAuth,
  {
    execute: [client.allowInsecureRequests],
  },
)
```

#### See

 - [allowInsecureRequests](../functions/allowInsecureRequests.md)
 - [enableNonRepudiationChecks](../functions/enableNonRepudiationChecks.md)
 - [useCodeIdTokenResponseType](../functions/useCodeIdTokenResponseType.md)
 - [enableDetachedSignatureResponseChecks](../functions/enableDetachedSignatureResponseChecks.md)
 - [useJwtResponseMode](../functions/useJwtResponseMode.md)

***

### initialAccessToken?

• `optional` **initialAccessToken**: `string`

Access token optionally issued by an authorization server used to authorize
calls to the client registration endpoint.

***

### timeout?

• `optional` **timeout**: `number`

Timeout (in seconds) for the Authorization Server Metadata discovery. If
this option is used, then the same timeout value will be assigned to the
resolved [Configuration](../classes/Configuration.md) instance for use with all its future
individual HTTP requests. Default is `30` (seconds)

## ./interfaces/ExportedJWKSCache.md

# Interface: ExportedJWKSCache

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

## Properties

### jwks

• **jwks**: [`JWKS`](JWKS.md)

***

### uat

• **uat**: `number`

## ./interfaces/GenerateKeyPairOptions.md

# Interface: GenerateKeyPairOptions

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

## Properties

### extractable?

• `optional` **extractable**: `boolean`

Indicates whether or not the private key may be exported. Default is `false`.

***

### modulusLength?

• `optional` **modulusLength**: `number`

(RSA algorithms only) The length, in bits, of the RSA modulus. Default is `2048`.

## ./interfaces/IDToken.md

# Interface: IDToken

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

## Indexable

\[`claim`: `string`\]: `undefined` \| [`JsonValue`](../type-aliases/JsonValue.md)

## Properties

### aud

• `readonly` **aud**: `string` \| `string`[]

***

### exp

• `readonly` **exp**: `number`

***

### iat

• `readonly` **iat**: `number`

***

### iss

• `readonly` **iss**: `string`

***

### sub

• `readonly` **sub**: `string`

***

### auth\_time?

• `readonly` `optional` **auth\_time**: `number`

***

### azp?

• `readonly` `optional` **azp**: `string`

***

### cnf?

• `readonly` `optional` **cnf**: [`ConfirmationClaims`](ConfirmationClaims.md)

***

### jti?

• `readonly` `optional` **jti**: `string`

***

### nbf?

• `readonly` `optional` **nbf**: `number`

***

### nonce?

• `readonly` `optional` **nonce**: `string`

## ./interfaces/IntrospectionResponse.md

# Interface: IntrospectionResponse

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

## Indexable

\[`claim`: `string`\]: `undefined` \| [`JsonValue`](../type-aliases/JsonValue.md)

## Properties

### active

• `readonly` **active**: `boolean`

***

### aud?

• `readonly` `optional` **aud**: `string` \| `string`[]

***

### authorization\_details?

• `readonly` `optional` **authorization\_details**: [`AuthorizationDetails`](AuthorizationDetails.md)[]

***

### client\_id?

• `readonly` `optional` **client\_id**: `string`

***

### cnf?

• `readonly` `optional` **cnf**: [`ConfirmationClaims`](ConfirmationClaims.md)

***

### exp?

• `readonly` `optional` **exp**: `number`

***

### iat?

• `readonly` `optional` **iat**: `number`

***

### iss?

• `readonly` `optional` **iss**: `string`

***

### jti?

• `readonly` `optional` **jti**: `string`

***

### nbf?

• `readonly` `optional` **nbf**: `number`

***

### scope?

• `readonly` `optional` **scope**: `string`

***

### sid?

• `readonly` `optional` **sid**: `string`

***

### sub?

• `readonly` `optional` **sub**: `string`

***

### token\_type?

• `readonly` `optional` **token\_type**: `string`

***

### username?

• `readonly` `optional` **username**: `string`

## ./interfaces/JWK.md

# Interface: JWK

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

## Indexable

\[`parameter`: `string`\]: `undefined` \| [`JsonValue`](../type-aliases/JsonValue.md)

## Properties

### alg?

• `readonly` `optional` **alg**: `string`

***

### crv?

• `readonly` `optional` **crv**: `string`

***

### e?

• `readonly` `optional` **e**: `string`

***

### key\_ops?

• `readonly` `optional` **key\_ops**: `string`[]

***

### kid?

• `readonly` `optional` **kid**: `string`

***

### kty?

• `readonly` `optional` **kty**: `string`

***

### n?

• `readonly` `optional` **n**: `string`

***

### use?

• `readonly` `optional` **use**: `string`

***

### x?

• `readonly` `optional` **x**: `string`

***

### y?

• `readonly` `optional` **y**: `string`

## ./interfaces/JWKS.md

# Interface: JWKS

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

## Properties

### keys

• `readonly` **keys**: [`JWK`](JWK.md)[]

## ./interfaces/MTLSEndpointAliases.md

# Interface: MTLSEndpointAliases

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

## Indexable

\[`metadata`: `string`\]: `undefined` \| `string`

## Properties

### backchannel\_authentication\_endpoint?

• `readonly` `optional` **backchannel\_authentication\_endpoint**: `string`

CIBA Backchannel Authentication Endpoint.

***

### device\_authorization\_endpoint?

• `readonly` `optional` **device\_authorization\_endpoint**: `string`

URL of the authorization server's device authorization endpoint.

***

### introspection\_endpoint?

• `readonly` `optional` **introspection\_endpoint**: `string`

URL of the authorization server's introspection endpoint.

***

### pushed\_authorization\_request\_endpoint?

• `readonly` `optional` **pushed\_authorization\_request\_endpoint**: `string`

URL of the authorization server's pushed authorization request endpoint.

***

### revocation\_endpoint?

• `readonly` `optional` **revocation\_endpoint**: `string`

URL of the authorization server's revocation endpoint.

***

### token\_endpoint?

• `readonly` `optional` **token\_endpoint**: `string`

URL of the authorization server's token endpoint.

***

### userinfo\_endpoint?

• `readonly` `optional` **userinfo\_endpoint**: `string`

URL of the authorization server's UserInfo Endpoint.

## ./interfaces/ModifyAssertionFunction.md

# Interface: ModifyAssertionFunction()

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

▸ **ModifyAssertionFunction**(`header`, `payload`): `void`

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `header` | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `undefined` \| [`JsonValue`](../type-aliases/JsonValue.md)\> | JWS Header to modify right before it is signed. |
| `payload` | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `undefined` \| [`JsonValue`](../type-aliases/JsonValue.md)\> | JWT Claims Set to modify right before it is signed. |

## Returns

`void`

## ./interfaces/ModifyAssertionOptions.md

# Interface: ModifyAssertionOptions

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

## Properties

### \[modifyAssertion\]?

• `optional` **\[modifyAssertion\]**: [`ModifyAssertionFunction`](ModifyAssertionFunction.md)

Use to modify a JWT assertion payload or header right before it is signed.

#### See

[modifyAssertion](../variables/modifyAssertion.md)

## ./interfaces/PrivateKey.md

# Interface: PrivateKey

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

Interface to pass an asymmetric private key and, optionally, its associated JWK Key ID to be
added as a `kid` JOSE Header Parameter.

## Properties

### key

• **key**: [`CryptoKey`](https://developer.mozilla.org/docs/Web/API/CryptoKey)

An asymmetric private CryptoKey.

Its algorithm must be compatible with a supported [JWS Algorithm](../type-aliases/JWSAlgorithm.md).

***

### kid?

• `optional` **kid**: `string`

JWK Key ID to add to JOSE headers when this key is used. When not provided no `kid` (JWK Key
ID) will be added to the JOSE Header.

## ./interfaces/ServerMetadata.md

# Interface: ServerMetadata

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

Authorization Server Metadata

## See

[IANA OAuth Authorization Server Metadata registry](https://www.iana.org/assignments/oauth-parameters/oauth-parameters.xhtml#authorization-server-metadata)

## Indexable

\[`metadata`: `string`\]: `undefined` \| [`JsonValue`](../type-aliases/JsonValue.md)

## Properties

### issuer

• `readonly` **issuer**: `string`

Authorization server's Issuer Identifier URL.

***

### acr\_values\_supported?

• `readonly` `optional` **acr\_values\_supported**: `string`[]

JSON array containing a list of the Authentication Context Class References that this
authorization server supports.

***

### authorization\_encryption\_alg\_values\_supported?

• `readonly` `optional` **authorization\_encryption\_alg\_values\_supported**: `string`[]

JSON array containing a list of algorithms supported by the authorization server for
introspection response encryption (`alg` value).

***

### authorization\_encryption\_enc\_values\_supported?

• `readonly` `optional` **authorization\_encryption\_enc\_values\_supported**: `string`[]

JSON array containing a list of algorithms supported by the authorization server for
introspection response encryption (`enc` value).

***

### authorization\_endpoint?

• `readonly` `optional` **authorization\_endpoint**: `string`

URL of the authorization server's authorization endpoint.

***

### authorization\_response\_iss\_parameter\_supported?

• `readonly` `optional` **authorization\_response\_iss\_parameter\_supported**: `boolean`

Boolean value indicating whether the authorization server provides the `iss` parameter in the
authorization response.

***

### authorization\_signing\_alg\_values\_supported?

• `readonly` `optional` **authorization\_signing\_alg\_values\_supported**: `string`[]

JSON array containing a list of algorithms supported by the authorization server for
introspection response signing.

***

### backchannel\_authentication\_endpoint?

• `readonly` `optional` **backchannel\_authentication\_endpoint**: `string`

CIBA Backchannel Authentication Endpoint.

***

### backchannel\_authentication\_request\_signing\_alg\_values\_supported?

• `readonly` `optional` **backchannel\_authentication\_request\_signing\_alg\_values\_supported**: `string`[]

JSON array containing a list of the JWS signing algorithms supported for validation of signed
CIBA authentication requests.

***

### backchannel\_logout\_session\_supported?

• `readonly` `optional` **backchannel\_logout\_session\_supported**: `boolean`

Boolean value specifying whether the authorization server can pass a `sid` (session ID) Claim
in the Logout Token to identify the RP session with the OP.

***

### backchannel\_logout\_supported?

• `readonly` `optional` **backchannel\_logout\_supported**: `boolean`

Boolean value specifying whether the authorization server supports back-channel logout.

***

### backchannel\_token\_delivery\_modes\_supported?

• `readonly` `optional` **backchannel\_token\_delivery\_modes\_supported**: `string`[]

Supported CIBA authentication result delivery modes.

***

### backchannel\_user\_code\_parameter\_supported?

• `readonly` `optional` **backchannel\_user\_code\_parameter\_supported**: `boolean`

Indicates whether the authorization server supports the use of the CIBA `user_code` parameter.

***

### check\_session\_iframe?

• `readonly` `optional` **check\_session\_iframe**: `string`

URL of an authorization server iframe that supports cross-origin communications for session
state information with the RP Client, using the HTML5 postMessage API.

***

### claim\_types\_supported?

• `readonly` `optional` **claim\_types\_supported**: `string`[]

JSON array containing a list of the Claim Types that the authorization server supports.

***

### claims\_locales\_supported?

• `readonly` `optional` **claims\_locales\_supported**: `string`[]

Languages and scripts supported for values in Claims being returned, represented as a JSON
array of RFC 5646 language tag values.

***

### claims\_parameter\_supported?

• `readonly` `optional` **claims\_parameter\_supported**: `boolean`

Boolean value specifying whether the authorization server supports use of the `claims`
parameter.

***

### claims\_supported?

• `readonly` `optional` **claims\_supported**: `string`[]

JSON array containing a list of the Claim Names of the Claims that the authorization server MAY
be able to supply values for.

***

### code\_challenge\_methods\_supported?

• `readonly` `optional` **code\_challenge\_methods\_supported**: `string`[]

PKCE code challenge methods supported by this authorization server.

***

### device\_authorization\_endpoint?

• `readonly` `optional` **device\_authorization\_endpoint**: `string`

URL of the authorization server's device authorization endpoint.

***

### display\_values\_supported?

• `readonly` `optional` **display\_values\_supported**: `string`[]

JSON array containing a list of the `display` parameter values that the authorization server
supports.

***

### dpop\_signing\_alg\_values\_supported?

• `readonly` `optional` **dpop\_signing\_alg\_values\_supported**: `string`[]

JSON array containing a list of the JWS algorithms supported for DPoP Proof JWTs.

***

### end\_session\_endpoint?

• `readonly` `optional` **end\_session\_endpoint**: `string`

URL at the authorization server to which an RP can perform a redirect to request that the
End-User be logged out at the authorization server.

***

### frontchannel\_logout\_session\_supported?

• `readonly` `optional` **frontchannel\_logout\_session\_supported**: `boolean`

Boolean value specifying whether the authorization server can pass `iss` (issuer) and `sid`
(session ID) query parameters to identify the RP session with the authorization server when the
`frontchannel_logout_uri` is used.

***

### frontchannel\_logout\_supported?

• `readonly` `optional` **frontchannel\_logout\_supported**: `boolean`

Boolean value specifying whether the authorization server supports HTTP-based logout.

***

### grant\_types\_supported?

• `readonly` `optional` **grant\_types\_supported**: `string`[]

JSON array containing a list of the `grant_type` values that this authorization server
supports.

***

### id\_token\_encryption\_alg\_values\_supported?

• `readonly` `optional` **id\_token\_encryption\_alg\_values\_supported**: `string`[]

JSON array containing a list of the JWE `alg` values supported by the authorization server for
the ID Token.

***

### id\_token\_encryption\_enc\_values\_supported?

• `readonly` `optional` **id\_token\_encryption\_enc\_values\_supported**: `string`[]

JSON array containing a list of the JWE `enc` values supported by the authorization server for
the ID Token.

***

### id\_token\_signing\_alg\_values\_supported?

• `readonly` `optional` **id\_token\_signing\_alg\_values\_supported**: `string`[]

JSON array containing a list of the JWS `alg` values supported by the authorization server for
the ID Token.

***

### introspection\_encryption\_alg\_values\_supported?

• `readonly` `optional` **introspection\_encryption\_alg\_values\_supported**: `string`[]

JSON array containing a list of algorithms supported by the authorization server for
introspection response content key encryption (`alg` value).

***

### introspection\_encryption\_enc\_values\_supported?

• `readonly` `optional` **introspection\_encryption\_enc\_values\_supported**: `string`[]

JSON array containing a list of algorithms supported by the authorization server for
introspection response content encryption (`enc` value).

***

### introspection\_endpoint?

• `readonly` `optional` **introspection\_endpoint**: `string`

URL of the authorization server's introspection endpoint.

***

### introspection\_endpoint\_auth\_methods\_supported?

• `readonly` `optional` **introspection\_endpoint\_auth\_methods\_supported**: `string`[]

JSON array containing a list of client authentication methods supported by this introspection
endpoint.

***

### introspection\_endpoint\_auth\_signing\_alg\_values\_supported?

• `readonly` `optional` **introspection\_endpoint\_auth\_signing\_alg\_values\_supported**: `string`[]

JSON array containing a list of the JWS signing algorithms supported by the introspection
endpoint for the signature on the JWT used to authenticate the client at the introspection
endpoint.

***

### introspection\_signing\_alg\_values\_supported?

• `readonly` `optional` **introspection\_signing\_alg\_values\_supported**: `string`[]

JSON array containing a list of algorithms supported by the authorization server for
introspection response signing.

***

### jwks\_uri?

• `readonly` `optional` **jwks\_uri**: `string`

URL of the authorization server's JWK Set document.

***

### mtls\_endpoint\_aliases?

• `readonly` `optional` **mtls\_endpoint\_aliases**: [`MTLSEndpointAliases`](MTLSEndpointAliases.md)

JSON object containing alternative authorization server endpoints, which a client intending to
do mutual TLS will use in preference to the conventional endpoints.

***

### op\_policy\_uri?

• `readonly` `optional` **op\_policy\_uri**: `string`

URL that the authorization server provides to the person registering the client to read about
the authorization server's requirements on how the client can use the data provided by the
authorization server.

***

### op\_tos\_uri?

• `readonly` `optional` **op\_tos\_uri**: `string`

URL that the authorization server provides to the person registering the client to read about
the authorization server's terms of service.

***

### pushed\_authorization\_request\_endpoint?

• `readonly` `optional` **pushed\_authorization\_request\_endpoint**: `string`

URL of the authorization server's pushed authorization request endpoint.

***

### registration\_endpoint?

• `readonly` `optional` **registration\_endpoint**: `string`

URL of the authorization server's Dynamic Client Registration Endpoint.

***

### request\_object\_encryption\_alg\_values\_supported?

• `readonly` `optional` **request\_object\_encryption\_alg\_values\_supported**: `string`[]

JSON array containing a list of the JWE `alg` values supported by the authorization server for
Request Objects.

***

### request\_object\_encryption\_enc\_values\_supported?

• `readonly` `optional` **request\_object\_encryption\_enc\_values\_supported**: `string`[]

JSON array containing a list of the JWE `enc` values supported by the authorization server for
Request Objects.

***

### request\_object\_signing\_alg\_values\_supported?

• `readonly` `optional` **request\_object\_signing\_alg\_values\_supported**: `string`[]

JSON array containing a list of the JWS `alg` values supported by the authorization server for
Request Objects.

***

### request\_parameter\_supported?

• `readonly` `optional` **request\_parameter\_supported**: `boolean`

Boolean value specifying whether the authorization server supports use of the `request`
parameter.

***

### request\_uri\_parameter\_supported?

• `readonly` `optional` **request\_uri\_parameter\_supported**: `boolean`

Boolean value specifying whether the authorization server supports use of the `request_uri`
parameter.

***

### require\_pushed\_authorization\_requests?

• `readonly` `optional` **require\_pushed\_authorization\_requests**: `boolean`

Indicates whether the authorization server accepts authorization requests only via PAR.

***

### require\_request\_uri\_registration?

• `readonly` `optional` **require\_request\_uri\_registration**: `boolean`

Boolean value specifying whether the authorization server requires any `request_uri` values
used to be pre-registered.

***

### require\_signed\_request\_object?

• `readonly` `optional` **require\_signed\_request\_object**: `boolean`

Indicates where authorization request needs to be protected as Request Object and provided
through either `request` or `request_uri` parameter.

***

### response\_modes\_supported?

• `readonly` `optional` **response\_modes\_supported**: `string`[]

JSON array containing a list of the `response_mode` values that this authorization server
supports.

***

### response\_types\_supported?

• `readonly` `optional` **response\_types\_supported**: `string`[]

JSON array containing a list of the `response_type` values that this authorization server
supports.

***

### revocation\_endpoint?

• `readonly` `optional` **revocation\_endpoint**: `string`

URL of the authorization server's revocation endpoint.

***

### revocation\_endpoint\_auth\_methods\_supported?

• `readonly` `optional` **revocation\_endpoint\_auth\_methods\_supported**: `string`[]

JSON array containing a list of client authentication methods supported by this revocation
endpoint.

***

### revocation\_endpoint\_auth\_signing\_alg\_values\_supported?

• `readonly` `optional` **revocation\_endpoint\_auth\_signing\_alg\_values\_supported**: `string`[]

JSON array containing a list of the JWS signing algorithms supported by the revocation endpoint
for the signature on the JWT used to authenticate the client at the revocation endpoint.

***

### scopes\_supported?

• `readonly` `optional` **scopes\_supported**: `string`[]

JSON array containing a list of the `scope` values that this authorization server supports.

***

### service\_documentation?

• `readonly` `optional` **service\_documentation**: `string`

URL of a page containing human-readable information that developers might want or need to know
when using the authorization server.

***

### signed\_metadata?

• `readonly` `optional` **signed\_metadata**: `string`

Signed JWT containing metadata values about the authorization server as claims.

***

### subject\_types\_supported?

• `readonly` `optional` **subject\_types\_supported**: `string`[]

JSON array containing a list of the Subject Identifier types that this authorization server
supports.

***

### tls\_client\_certificate\_bound\_access\_tokens?

• `readonly` `optional` **tls\_client\_certificate\_bound\_access\_tokens**: `boolean`

Indicates authorization server support for mutual-TLS client certificate-bound access tokens.

***

### token\_endpoint?

• `readonly` `optional` **token\_endpoint**: `string`

URL of the authorization server's token endpoint.

***

### token\_endpoint\_auth\_methods\_supported?

• `readonly` `optional` **token\_endpoint\_auth\_methods\_supported**: `string`[]

JSON array containing a list of client authentication methods supported by this token endpoint.

***

### token\_endpoint\_auth\_signing\_alg\_values\_supported?

• `readonly` `optional` **token\_endpoint\_auth\_signing\_alg\_values\_supported**: `string`[]

JSON array containing a list of the JWS signing algorithms supported by the token endpoint for
the signature on the JWT used to authenticate the client at the token endpoint.

***

### ui\_locales\_supported?

• `readonly` `optional` **ui\_locales\_supported**: `string`[]

Languages and scripts supported for the user interface, represented as a JSON array of language
tag values from RFC 5646.

***

### userinfo\_encryption\_alg\_values\_supported?

• `readonly` `optional` **userinfo\_encryption\_alg\_values\_supported**: `string`[]

JSON array containing a list of the JWE `alg` values supported by the UserInfo Endpoint.

***

### userinfo\_encryption\_enc\_values\_supported?

• `readonly` `optional` **userinfo\_encryption\_enc\_values\_supported**: `string`[]

JSON array containing a list of the JWE `enc` values supported by the UserInfo Endpoint.

***

### userinfo\_endpoint?

• `readonly` `optional` **userinfo\_endpoint**: `string`

URL of the authorization server's UserInfo Endpoint.

***

### userinfo\_signing\_alg\_values\_supported?

• `readonly` `optional` **userinfo\_signing\_alg\_values\_supported**: `string`[]

JSON array containing a list of the JWS `alg` values supported by the UserInfo Endpoint.

## ./interfaces/ServerMetadataHelpers.md

# Interface: ServerMetadataHelpers

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

## Methods

### supportsPKCE()

▸ **supportsPKCE**(`method`?): `boolean`

Determines whether the Authorization Server supports a given Code Challenge
Method

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `method`? | `string` | Code Challenge Method. Default is `S256` |

#### Returns

`boolean`

## ./interfaces/TokenEndpointResponse.md

# Interface: TokenEndpointResponse

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

## Indexable

\[`parameter`: `string`\]: `undefined` \| [`JsonValue`](../type-aliases/JsonValue.md)

## Properties

### access\_token

• `readonly` **access\_token**: `string`

***

### token\_type

• `readonly` **token\_type**: [`Lowercase`](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#lowercasestringtype)\<`string`\>

NOTE: because the value is case insensitive it is always returned lowercased

***

### authorization\_details?

• `readonly` `optional` **authorization\_details**: [`AuthorizationDetails`](AuthorizationDetails.md)[]

***

### expires\_in?

• `readonly` `optional` **expires\_in**: `number`

***

### id\_token?

• `readonly` `optional` **id\_token**: `string`

***

### refresh\_token?

• `readonly` `optional` **refresh\_token**: `string`

***

### scope?

• `readonly` `optional` **scope**: `string`

## ./interfaces/TokenEndpointResponseHelpers.md

# Interface: TokenEndpointResponseHelpers

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

Helpers attached to any resolved [TokenEndpointResponse](TokenEndpointResponse.md)

## Methods

### claims()

▸ **claims**(): `undefined` \| [`IDToken`](IDToken.md)

Returns the parsed JWT Claims Set of an
[id\_token](TokenEndpointResponse.md#id_token) returned by the
authorization server

Note: Returns `undefined` when
[expires\_in](TokenEndpointResponse.md#expires_in) was not returned by the
authorization server

#### Returns

`undefined` \| [`IDToken`](IDToken.md)

***

### expiresIn()

▸ **expiresIn**(): `undefined` \| `number`

Returns the number of seconds until the
[access\_token](TokenEndpointResponse.md#access_token) expires

Note: Returns `0` when already expired

Note: Returns `undefined` when
[expires\_in](TokenEndpointResponse.md#expires_in) was not returned by the
authorization server

#### Returns

`undefined` \| `number`

## ./interfaces/UserInfoAddress.md

# Interface: UserInfoAddress

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

## Indexable

\[`claim`: `string`\]: `undefined` \| [`JsonValue`](../type-aliases/JsonValue.md)

## Properties

### country?

• `readonly` `optional` **country**: `string`

***

### formatted?

• `readonly` `optional` **formatted**: `string`

***

### locality?

• `readonly` `optional` **locality**: `string`

***

### postal\_code?

• `readonly` `optional` **postal\_code**: `string`

***

### region?

• `readonly` `optional` **region**: `string`

***

### street\_address?

• `readonly` `optional` **street\_address**: `string`

## ./interfaces/UserInfoResponse.md

# Interface: UserInfoResponse

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

## Indexable

\[`claim`: `string`\]: `undefined` \| [`JsonValue`](../type-aliases/JsonValue.md)

## Properties

### sub

• `readonly` **sub**: `string`

***

### address?

• `readonly` `optional` **address**: [`UserInfoAddress`](UserInfoAddress.md)

***

### birthdate?

• `readonly` `optional` **birthdate**: `string`

***

### email?

• `readonly` `optional` **email**: `string`

***

### email\_verified?

• `readonly` `optional` **email\_verified**: `boolean`

***

### family\_name?

• `readonly` `optional` **family\_name**: `string`

***

### gender?

• `readonly` `optional` **gender**: `string`

***

### given\_name?

• `readonly` `optional` **given\_name**: `string`

***

### locale?

• `readonly` `optional` **locale**: `string`

***

### middle\_name?

• `readonly` `optional` **middle\_name**: `string`

***

### name?

• `readonly` `optional` **name**: `string`

***

### nickname?

• `readonly` `optional` **nickname**: `string`

***

### phone\_number?

• `readonly` `optional` **phone\_number**: `string`

***

### picture?

• `readonly` `optional` **picture**: `string`

***

### preferred\_username?

• `readonly` `optional` **preferred\_username**: `string`

***

### profile?

• `readonly` `optional` **profile**: `string`

***

### updated\_at?

• `readonly` `optional` **updated\_at**: `number`

***

### website?

• `readonly` `optional` **website**: `string`

***

### zoneinfo?

• `readonly` `optional` **zoneinfo**: `string`

## ./interfaces/WWWAuthenticateChallenge.md

# Interface: WWWAuthenticateChallenge

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

Parsed WWW-Authenticate challenge

## Properties

### parameters

• `readonly` **parameters**: [`WWWAuthenticateChallengeParameters`](WWWAuthenticateChallengeParameters.md)

Parsed WWW-Authenticate challenge auth-param dictionary (always present but will be empty when
[token68](WWWAuthenticateChallenge.md#token68) is present)

***

### scheme

• `readonly` **scheme**: [`Lowercase`](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#lowercasestringtype)\<`string`\>

Parsed WWW-Authenticate challenge auth-scheme

NOTE: because the value is case insensitive it is always returned lowercased

***

### token68?

• `readonly` `optional` **token68**: `string`

Parsed WWW-Authenticate challenge token68

## ./interfaces/WWWAuthenticateChallengeParameters.md

# Interface: WWWAuthenticateChallengeParameters

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

WWW-Authenticate challenge auth-param dictionary with known and unknown parameter names

## Indexable

\[`parameter`: [`Lowercase`](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#lowercasestringtype)\<`string`\>\]: `undefined` \| `string`

## Properties

### algs?

• `readonly` `optional` **algs**: `string`

***

### error?

• `readonly` `optional` **error**: `string`

***

### error\_description?

• `readonly` `optional` **error\_description**: `string`

***

### error\_uri?

• `readonly` `optional` **error\_uri**: `string`

***

### realm?

• `readonly` `optional` **realm**: `string`

***

### scope?

• `readonly` `optional` **scope**: `string`

## ./type-aliases/ClientAuth.md

# Type Alias: ClientAuth()

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

• **ClientAuth**: (`as`, `client`, `body`, `headers`) => `void`

Implementation of the Client's Authentication Method at the Authorization
Server.

The default is [ClientSecretPost](../functions/ClientSecretPost.md) if [ClientMetadata.client\_secret](../interfaces/ClientMetadata.md#client_secret)
is present, [None](../functions/None.md) otherwise.

Other Client Authentication Methods must be provided explicitly and their
implementations are linked below.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `as` | [`ServerMetadata`](../interfaces/ServerMetadata.md) |
| `client` | [`ClientMetadata`](../interfaces/ClientMetadata.md) |
| `body` | [`URLSearchParams`](https://developer.mozilla.org/docs/Web/API/URLSearchParams) |
| `headers` | [`Headers`](https://developer.mozilla.org/docs/Web/API/Headers) |

## Returns

`void`

## See

 - [ClientSecretBasic](../functions/ClientSecretBasic.md)
 - [ClientSecretJwt](../functions/ClientSecretJwt.md)
 - [ClientSecretPost](../functions/ClientSecretPost.md)
 - [None](../functions/None.md)
 - [PrivateKeyJwt](../functions/PrivateKeyJwt.md)
 - [TlsClientAuth](../functions/TlsClientAuth.md)

## ./type-aliases/CustomFetch.md

# Type Alias: CustomFetch()

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

• **CustomFetch**: (`url`, `options`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

## Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `string` |
| `options` | [`CustomFetchOptions`](../interfaces/CustomFetchOptions.md) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

## See

[customFetch](../variables/customFetch.md)

## ./type-aliases/FetchBody.md

# Type Alias: FetchBody

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

• **FetchBody**: [`ArrayBuffer`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| `null` \| [`ReadableStream`](https://developer.mozilla.org/docs/Web/API/ReadableStream) \| `string` \| [`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) \| `undefined` \| [`URLSearchParams`](https://developer.mozilla.org/docs/Web/API/URLSearchParams)

## ./type-aliases/JWSAlgorithm.md

# Type Alias: JWSAlgorithm

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

• **JWSAlgorithm**: `"PS256"` \| `"ES256"` \| `"RS256"` \| `"Ed25519"` \| `"ES384"` \| `"PS384"` \| `"RS384"` \| `"ES512"` \| `"PS512"` \| `"RS512"` \| `"EdDSA"`

JWS `alg` Algorithm identifiers from the
[JSON Web Signature and Encryption Algorithms IANA registry](https://www.iana.org/assignments/jose/jose.xhtml#web-signature-encryption-algorithms)
for which Digital Signature validation is implemented.

## ./type-aliases/JsonArray.md

# Type Alias: JsonArray

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

• **JsonArray**: [`JsonValue`](JsonValue.md)[]

JSON Array

## ./type-aliases/JsonObject.md

# Type Alias: JsonObject

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

• **JsonObject**: `{ [Key in string]?: JsonValue }`

JSON Object

## ./type-aliases/JsonPrimitive.md

# Type Alias: JsonPrimitive

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

• **JsonPrimitive**: `string` \| `number` \| `boolean` \| `null`

JSON Primitives

## ./type-aliases/JsonValue.md

# Type Alias: JsonValue

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

• **JsonValue**: [`JsonPrimitive`](JsonPrimitive.md) \| [`JsonObject`](JsonObject.md) \| [`JsonArray`](JsonArray.md)

JSON Values

## ./type-aliases/OmitSymbolProperties.md

# Type Alias: OmitSymbolProperties\<T\>

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

• **OmitSymbolProperties**\<`T`\>: `{ [K in keyof T as K extends symbol ? never : K]: T[K] }`

Removes all Symbol properties from a type

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## ./variables/clockSkew.md

# Variable: clockSkew

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

• `const` **clockSkew**: *typeof* `oauth.clockSkew` = `oauth.clockSkew`

Use to adjust the assumed current time. Positive and negative finite values
representing seconds are allowed. Default is `0` (Date.now() + 0 seconds is
used).

## Examples

When the local clock is mistakenly 1 hour in the past

```ts
let clientMetadata: client.ClientMetadata = {
  client_id: 'abc4ba37-4ab8-49b5-99d4-9441ba35d428',
  // ... other metadata
  [client.clockSkew]: +(60 * 60),
}
```

When the local clock is mistakenly 1 hour in the future

```ts
let clientMetadata: client.ClientMetadata = {
  client_id: 'abc4ba37-4ab8-49b5-99d4-9441ba35d428',
  // ... other metadata
  [client.clockSkew]: -(60 * 60),
}
```

## ./variables/clockTolerance.md

# Variable: clockTolerance

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

• `const` **clockTolerance**: *typeof* `oauth.clockTolerance` = `oauth.clockTolerance`

Use to set allowed clock tolerance when checking DateTime JWT Claims. Only
positive finite values representing seconds are allowed. Default is `30` (30
seconds).

## Example

Tolerate 30 seconds clock skew when validating JWT claims like exp or nbf.

```ts
let clientMetadata: client.ClientMetadata = {
  client_id: 'abc4ba37-4ab8-49b5-99d4-9441ba35d428',
  // ... other metadata
  [client.clockTolerance]: 30,
}
```

## ./variables/customFetch.md

# Variable: customFetch

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

• `const` **customFetch**: *typeof* `oauth.customFetch` = `oauth.customFetch`

When set on a [Configuration](../classes/Configuration.md), this replaces the use of global fetch. As
a fetch replacement the arguments and expected return are the same as fetch.

In theory any module that claims to be compatible with the
[Fetch API](https://developer.mozilla.org/docs/Web/API/Window/fetch) can be used but your mileage may vary. No workarounds
to allow use of non-conform [Response](https://developer.mozilla.org/docs/Web/API/Response) instances will be considered.

If you only need to update the [Request](https://developer.mozilla.org/docs/Web/API/Request) properties you do not need to
use a [Fetch API](https://developer.mozilla.org/docs/Web/API/Window/fetch) module, just change what you need and pass it
to globalThis.fetch just like this module would normally do.

Its intended use cases are:

- [Request](https://developer.mozilla.org/docs/Web/API/Request)/[Response](https://developer.mozilla.org/docs/Web/API/Response) tracing and logging
- Custom caching strategies
- Changing the [Request](https://developer.mozilla.org/docs/Web/API/Request) properties like headers, body, credentials, mode
  before it is passed to fetch

Known caveats:

- Expect Type-related issues when passing the inputs through to fetch-like
  modules, they hardly ever get their typings inline with actual fetch, you
  should `@ts-expect-error` them.
- Returning self-constructed [Response](https://developer.mozilla.org/docs/Web/API/Response) instances prohibits
  AS/RS-signalled DPoP Nonce caching.

## Examples

Using [sindresorhus/ky](https://github.com/sindresorhus/ky) for retries and
its hooks feature for logging outgoing requests and their responses.

```ts
import ky from 'ky'

let config!: client.Configuration
let logRequest!: (request: Request) => void
let logResponse!: (request: Request, response: Response) => void
let logRetry!: (
  request: Request,
  error: Error,
  retryCount: number,
) => void

config[client.customFetch] = (...args) =>
  ky(args[0], {
    ...args[1],
    hooks: {
      beforeRequest: [
        (request) => {
          logRequest(request)
        },
      ],
      beforeRetry: [
        ({ request, error, retryCount }) => {
          logRetry(request, error, retryCount)
        },
      ],
      afterResponse: [
        (request, _, response) => {
          logResponse(request, response)
        },
      ],
    },
  })
```

Using [nodejs/undici](https://github.com/nodejs/undici) to detect and use
HTTP proxies.

```ts
import * as undici from 'undici'

// see https://undici.nodejs.org/#/docs/api/EnvHttpProxyAgent
let envHttpProxyAgent = new undici.EnvHttpProxyAgent()

let config!: client.Configuration

// @ts-ignore
config[client.customFetch] = (...args) => {
  // @ts-ignore
  return undici.fetch(args[0], { ...args[1], dispatcher: envHttpProxyAgent }) // prettier-ignore
}
```

Using [nodejs/undici](https://github.com/nodejs/undici) to automatically
retry network errors.

```ts
import * as undici from 'undici'

// see https://undici.nodejs.org/#/docs/api/RetryAgent
let retryAgent = new undici.RetryAgent(new undici.Agent(), {
  statusCodes: [],
  errorCodes: [
    'ECONNRESET',
    'ECONNREFUSED',
    'ENOTFOUND',
    'ENETDOWN',
    'ENETUNREACH',
    'EHOSTDOWN',
    'UND_ERR_SOCKET',
  ],
})

let config!: client.Configuration

// @ts-ignore
config[client.customFetch] = (...args) => {
  // @ts-ignore
  return undici.fetch(args[0], { ...args[1], dispatcher: retryAgent }) // prettier-ignore
}
```

Using [nodejs/undici](https://github.com/nodejs/undici) to mock responses in
tests.

```ts
import * as undici from 'undici'

// see https://undici.nodejs.org/#/docs/api/MockAgent
let mockAgent = new undici.MockAgent()
mockAgent.disableNetConnect()

let config!: client.Configuration

// @ts-ignore
config[client.customFetch] = (...args) => {
  // @ts-ignore
  return undici.fetch(args[0], { ...args[1], dispatcher: mockAgent }) // prettier-ignore
}
```

## ./variables/modifyAssertion.md

# Variable: modifyAssertion

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

• `const` **modifyAssertion**: *typeof* `oauth.modifyAssertion` = `oauth.modifyAssertion`

Use to mutate JWT header and payload before they are signed. Its intended use
is working around non-conform server behaviours, such as modifying JWT "aud"
(audience) claims, or otherwise changing fixed claims used by this library.

## Example

Changing the `alg: "Ed25519"` back to `alg: "EdDSA"`

```ts
let key!: client.CryptoKey | client.PrivateKey
let config!: client.Configuration
let parameters!: URLSearchParams
let keyPair!: client.CryptoKeyPair

let remapEd25519: client.ModifyAssertionOptions = {
  [client.modifyAssertion]: (header) => {
    if (header.alg === 'Ed25519') {
      header.alg = 'EdDSA'
    }
  },
}

// For JAR
client.buildAuthorizationUrlWithJAR(
  config,
  parameters,
  key,
  remapEd25519,
)

// For Private Key JWT
client.PrivateKeyJwt(key, remapEd25519)

// For DPoP
client.getDPoPHandle(config, keyPair, remapEd25519)
```

## ./variables/skipStateCheck.md

# Variable: ~~skipStateCheck~~

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

• `const` **skipStateCheck**: *typeof* `oauth.skipStateCheck` = `oauth.skipStateCheck`

DANGER ZONE - This option has security implications that must be understood,
assessed for applicability, and accepted before use.

Use this as a value for `state` check state parameter options to skip the
`state` value check. This should only be done if the `state` parameter value
used is integrity protected (and its integrity and expiration is checked) and
bound to the browsing session. One such mechanism to do so is described in an
I-D
[draft-bradley-oauth-jwt-encoded-state-09](https://datatracker.ietf.org/doc/html/draft-bradley-oauth-jwt-encoded-state-09).

## Deprecated

Marked as deprecated only to make it stand out as something you
  shouldn't use unless you've assessed the implications.

## ./variables/skipSubjectCheck.md

# Variable: ~~skipSubjectCheck~~

[💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

***

• `const` **skipSubjectCheck**: *typeof* `oauth.skipSubjectCheck` = `oauth.skipSubjectCheck`

DANGER ZONE - This option has security implications that must be understood,
assessed for applicability, and accepted before use.

Use this as a value to [fetchUserInfo](../functions/fetchUserInfo.md) `expectedSubject` parameter to
skip the `sub` claim value check.

## Deprecated

Marked as deprecated only to make it stand out as something you
  shouldn't use unless you've assessed the implications.

## See

[OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0-errata2.html#UserInfoResponse)
