/**
 * 同期処理を行う関数
 */
const synchronousFunc = () => {
  console.log('Processing synchronousFunc');
  return 'Completed!';
};

const message = 'synchronousFunc: ';
const result = synchronousFunc();
console.log(message + result);

// ->
// (1) Processing synchronousFunc
// (2) synchronousFunc... Completed!
