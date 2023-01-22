let tileSelected = null;
let numSelected = null;

let board = [
  "--74916-5",
  "2---6-3-9",
  "-----7-1-",
  "-586----4",
  "--3----9-",
  "--62--187",
  "9-4-7---2",
  "67-83----",
  "81--45---",
];

let solution = [
  "387491625",
  "241568379",
  "569327418",
  "758619234",
  "123784596",
  "496253187",
  "934176852",
  "675832941",
  "812945763",
];

for (let i = 1; i <= 9; i++) {
  //<div id="1" class="number">1</div>
  let number = document.createElement("div");
  number.id = i;
  number.innerText = i;
  number.addEventListener("click", selectNumber);
  number.classList.add("number");
  document.getElementById("digits").appendChild(number);
}
//board//
for (let r = 0; r < 9; r++) {
  for (let c = 0; c < 9; c++) {
    let tile = document.createElement("div");
    tile.id = r.toString() + "-" + c.toString();
    if (board[r][c] != "-") {
      tile.innerText = board[r][c];
      tile.classList.add("tile-present");
    }
    if (r == 2 || r == 5) {
      tile.classList.add("lineHor");
    }
    if (c == 2 || c == 5) {
      tile.classList.add("lineVer");
    }
    tile.addEventListener("click", selectTile);
    tile.classList.add("tile");
    document.getElementById("board").appendChild(tile);
  }
}

function selectNumber() {
  if (numSelected != null) {
    numSelected.classList.remove("num-selected"); //remove kardi id
  }
  numSelected = this;
  numSelected.classList.add("num-selected"); //isko id yw ali dedi
}

let errors = 0;
function selectTile() {
  if (this.innerText != "") {
    return;
  } //number change na kar sake jo eek baari daal diya ha

  //id="0-1"
  let cordinates = this.id.split("-"); //["0","1"]
  let r = parseInt(cordinates[0]);
  let c = parseInt(cordinates[1]);

  if (solution[r][c] == numSelected.id) {
    this.innerText = numSelected.id;
    this.classList.add("colorChange");
  } else {
    errors += 1;
    document.getElementById("errors").innerText = errors;
  }
}
