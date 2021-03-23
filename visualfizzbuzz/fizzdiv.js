const divMaker = function (className, num) {
  //find the body
  const body = document.body;

  // create the div
  const divCreated = document.createElement('div');

  //add the number to each square
  divCreated.appendChild(document.createTextNode(num));

  //add class to div
  divCreated.classList.add(className);

  //append div to body
  body.appendChild(divCreated);
};

for (i = 1; i < 101; i++) {
  let func;

  if (i % 3 === 0 && i % 5 === 0) {
    func = divMaker('red', i);
  }

  if (i % 3 === 0) {
    func = divMaker('green', i);
  }

  if (i % 5 === 0) {
    func = divMaker('blue', i);
  }

  func || divMaker('non-div', i);
}
