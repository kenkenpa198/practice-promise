// 非同期処理を行う関数
const getGitUsername = () => {
  const url = 'https://api.github.com/users/kenkenpa198';

  // GitHub API を Fetch API (非同期処理) で実行する
  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      console.log('これは非同期処理成功時のメッセージです');
      return json.login;
    })
    .catch((error) => {
      console.error('これは非同期処理失敗時のメッセージです', error);
      return null;
    });
};

const message = 'Git Username: ';
const result = getGitUsername();
console.log(message + result);

// ->
// Git Username: undefined
// これは非同期処理成功時のメッセージです
