let i = 1;
let result = "";

while (i <= 100) {
  if (i % 3 === 0) {
    result += `${i}: ３の倍数です<br>`;
  }
  i++;
}

document.getElementById("output").innerHTML = result;
