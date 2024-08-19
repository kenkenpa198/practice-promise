/**
 * Git のユーザー名を取得する非同期関数
 */
const getGitUsername = () => {
  return new Promise((resolve, reject) => {
    const url = 'https://api.github.com/users/kenkenpa198';

    // GitHub API を fetch メソッドで実行する
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        console.log('これは非同期処理成功時のメッセージです');
        return resolve(json.login);
      })
      .catch((error) => {
        console.error('これは非同期処理失敗時のメッセージです', error);
        return reject(null);
      });
  });
};

const message = 'Git Username: ';
getGitUsername().then((result) => {
  console.log(message + result);
});

// ->
// これは非同期処理成功時のメッセージです
// Git Username: kenkenpa198
