document.getElementById("age-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    var age = parseInt(document.getElementById("age").value);
    
    if (age < 0) {
      document.getElementById("result").textContent = "Ange en giltig ålder";
    } else if (age >= 0 && age <= 12) {
      document.getElementById("result").textContent = "Du är ett barn";
    } else if (age >= 13 && age <= 19) {
      document.getElementById("result").textContent = "Du är en tonåring";
    } else if (age >= 20 && age <= 64) {
      document.getElementById("result").textContent = "Du är en vuxen";
    } else {
      document.getElementById("result").textContent = "Du är en senior";
    }
  });