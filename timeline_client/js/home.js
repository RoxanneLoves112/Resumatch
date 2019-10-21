$.ajax({
  method: "GET",
  url: "http://localhost:3000/experiences",
  success: function(res) {
    var table = $("#experience");
    $.each(res, function(idx, elem){
      table.append('<tr><td>'+elem["company"]+'</td><td>'+elem["role"]+'</td><td>'+elem["job_type"]+
        '</td><td><button id="detailBtn">Click</button></td></tr>');
    });
  },
  error: function(res) {
    alert("There is an error loading data.");
    console.log(res);
  }
})

$( document ).ajaxComplete(function() {
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("detailBtn");
  var span = document.getElementsByClassName("close")[0];
      
  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "block";
  }
      
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
      
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
})