document.getElementById("runButton").addEventListener("click", function() {
    const inputText = document.getElementById("input").value;
        document.getElementById("output").textContent = inputText;
  });
  
  document.getElementById("clearButton").addEventListener("click", function() {
    document.getElementById("output").textContent = '';
  });