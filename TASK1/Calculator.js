let result = '';

function Clear() {
  result = '';
  document.getElementById('res').value = '';
}

function Back() {
  result = result.slice(0, -1);
  document.getElementById('res').value = result;
}

function Solve(val) {
  result += val;
  document.getElementById('res').value = result;
}

function Result() {
  let x = eval(result);
  document.getElementById('res').value = x;
}