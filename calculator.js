var currentNumber = [];
var currentOperator = '';
var arr = [];
var totalResult = 0;

function numbers (n) {
  var sym = ['÷', '×', '+', '-'];
  if (arr.length == 1 && sym.includes(arr[0]) == false) {
    arr = [];
  }
  if (n == 0 && currentNumber[0] == 0 && currentNumber.length == 1) {
    currentNumber = currentNumber;
  } else if (n == '.' && currentNumber.includes('.')) {
    currentNumber = currentNumber;
  } else {
    currentNumber.push(n);
    document.getElementById('display').innerHTML =
    arr.join(' ') + ' ' + currentNumber.join('');
  }
}

function clearDisplay () {
  currentNumber = [];
  currentOperator = '';
  arr = [];
  document.getElementById('display').innerHTML = 0;
}

function operations (operator) {
  var ops = ['÷', '×', '+', '-'];
  var ops2 = ['÷', '×', '+'];
  if (currentNumber.length > 0) {
    arr.push(parseFloat(currentNumber.join('')));
    currentNumber = [];
  }
  if (arr.length > 0 && ops.includes(arr[arr.length - 1]) && ops2.includes(operator)) {
    if (arr[arr.length - 1] == '-' && ops2.includes(arr[arr.length - 2]) && operator != '-') {
      arr.pop();
      arr[arr.length - 1] = operator;
    } else {
      arr[arr.length - 1] = operator;  
    }
  } else if (arr[arr.length - 1] == '-' && operator == '-') {

  } else {
    arr.push(operator);
  }
  document.getElementById('display').innerHTML =
  arr.join(' ');
}

function result () {
  if (currentNumber.length > 0) {
    arr.push(parseFloat(currentNumber.join('')));
    currentNumber = [];
  }
  var tempResult = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == '-') {
      arr[i + 1] = arr[i + 1] * - 1;
    }
  }
  while (arr.includes('-')) {
    var min = arr.indexOf('-');
    arr.splice(min, 1);
  }
  while (arr.includes('÷')) {
    var div = arr.indexOf('÷');
    tempResult = arr[div - 1] / arr[div + 1];
    arr[div - 1] = tempResult;
    arr.splice(div, 2);
  }
  while (arr.includes('×')) {
    var mul = arr.indexOf('×');
    tempResult = arr[mul - 1] * arr[mul + 1];
    arr[mul - 1] = tempResult;
    arr.splice(mul, 2);
  }
  while (arr.includes('+')) {
    var plus = arr.indexOf('+');
    arr.splice(plus, 1);
  }
  var totalResult = 0;
  totalResult = arr.reduce((sum, num) => sum + num, 0);
  arr = [];
  arr.push(totalResult);
  document.getElementById('display').innerHTML =
  arr.join(' ');
}
