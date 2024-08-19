/**
 * Git のユーザー名を取得する非同期関数
 */
const getGitUsername = () => {
  const url = 'https://api.github.com/users/kenkenpa198';

  // GitHub API を fetch メソッドで実行する
  fetch(url)
    // 1. fetch() メソッドが Promise<Response> オブジェクトを返す。
    // 2. Promise インスタンスの then() メソッドでコールバック関数を呼ぶ。
    // 3. コールバック関数で Response オブジェクトを res として受け取る。
    // 4. Response オブジェクトの json() メソッドでレスポンスを JSON データとして解析する。
    .then((res) => res.json())
    // 5. json() メソッドは Promise<object> を返す。
    // 6. Promise インスタンスの then() メソッドでコールバック関数を呼ぶ。
    // 7. コールバック関数で JSON データを json として受け取る。
    // 8. JSON データの login プロパティへアクセスし、値を返す。
    .then((json) => {
      console.log('これは非同期処理成功時のメッセージです');
      return json.login;
    });
};

const message = 'Git Username: ';
const result = getGitUsername();
console.log(message + result);

// ->
// Git Username: undefined
// これは非同期処理成功時のメッセージです
