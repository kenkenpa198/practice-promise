/**
 * fetch メソッドで取得したレスポンスのメンバを出力する関数
 *
 * @see https://developer.mozilla.org/ja/docs/Web/API/Response
 */
const showResponseMembers = () => {
  const url = 'https://api.github.com/users/kenkenpa198';

  fetch(url).then((res) => {
    // Response オブジェクトのプロパティ
    console.log('===== Response Members =====');
    console.log(res);

    // Response オブジェクトのメソッド
    console.log('');
    console.log('===== Response Methods =====');
    console.log(res.arrayBuffer);
    console.log(res.blob);
    console.log(res.clone);
    console.log(res.formData);
    console.log(res.json);
    console.log(res.text);
  });
};

showResponseMembers();

// ->
// ===== Response Members =====
// Response {
//   status: 200,
//   statusText: 'OK',
//   headers: Headers {
//     date: 'Mon, 19 Aug 2024 16:17:01 GMT',
//     'content-type': 'application/json; charset=utf-8',
//     'cache-control': 'public, max-age=60, s-maxage=60',
//     vary: 'Accept,Accept-Encoding, Accept, X-Requested-With',
//     etag: 'W/"ef30687effb95d5bcd098c8a6fb8f45738a828463d8b68a921fd6807e38ea071"',
//     'last-modified': 'Wed, 14 Aug 2024 19:12:07 GMT',
//     'x-github-media-type': 'github.v3; format=json',
//     'x-github-api-version-selected': '2022-11-28',
//     'access-control-expose-headers': 'ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Used, X-RateLimit-Resource, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type, X-GitHub-SSO, X-GitHub-Request-Id, Deprecation, Sunset',
//     'access-control-allow-origin': '*',
//     'strict-transport-security': 'max-age=31536000; includeSubdomains; preload',
//     'x-frame-options': 'deny',
//     'x-content-type-options': 'nosniff',
//     'x-xss-protection': '0',
//     'referrer-policy': 'origin-when-cross-origin, strict-origin-when-cross-origin',
//     'content-security-policy': "default-src 'none'",
//     'content-encoding': 'gzip',
//     server: 'github.com',
//     'x-ratelimit-limit': '60',
//     'x-ratelimit-remaining': '50',
//     'x-ratelimit-reset': '1724087008',
//     'x-ratelimit-resource': 'core',
//     'x-ratelimit-used': '10',
//     'accept-ranges': 'bytes',
//     'content-length': '496',
//     'x-github-request-id': 'ED82:36962E:1C72763:1E011A1:66C36FFD'
//   },
//   body: ReadableStream { locked: false, state: 'readable', supportsBYOB: true },
//   bodyUsed: false,
//   ok: true,
//   redirected: false,
//   type: 'basic',
//   url: 'https://api.github.com/users/kenkenpa198'
// }

// ===== Response Methods =====
// [Function: arrayBuffer]
// [Function: blob]
// [Function: clone]
// [Function: formData]
// [Function: json]
// [Function: text]
