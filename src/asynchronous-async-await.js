// 非同期処理を行う関数
const getGitUsername = async () => {
  const message = 'Git Username: ';
  const url = 'https://api.github.com/users/kenkenpa198';

  // GitHub API を fetch メソッドで実行する
  const json = await fetch(url)
    .then((res) => {
      console.log('これは非同期処理成功時のメッセージです');
      return res.json();
    })
    .catch((error) => {
      console.error('これは非同期処理失敗時のメッセージです。', error);
      return null;
    });

  console.log(message + json.login);
};

getGitUsername();

// ->
// これは非同期処理成功時のメッセージです
// Git Username: kenkenpa198
