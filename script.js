function updateCard() {
  let name = document.getElementById("nameInput").value;
  let msg = document.getElementById("msgInput").value;

  if (name) {
    document.getElementById("nameOutput").innerText = name;
  }

  if (msg) {
    document.getElementById("messageOutput").innerText = msg;
  }
}
