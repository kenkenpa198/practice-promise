/**
 * Git のユーザー名を取得する非同期関数
 */
const getGitUsername = () => {
  const url = 'https://api.github.com/users/kenkenpa198';

  // GitHub API を fetch メソッドで実行する
  fetch(url)
    .then((res) => res.json())
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
