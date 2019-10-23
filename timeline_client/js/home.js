// getting data from the experience table
$.ajax({
  method: "GET",
  url: "http://localhost:3000/experiences",
  success: function(res) {
    // var tableBody = $(".experience tbody");
    var tableBehavioral = $("#tb-behavioral");
    $.each(res, function(idx, elem){
      tableBehavioral.append('<tr><td>'+elem["company"]+'</td><td>'+elem["role"]+'</td><td>'+elem["job_type"]+
        '</td><td><button class="detailBtn">Click</button></td></tr>');
    });
  },
  error: function(res) {
    alert("There is an error loading data.");
    console.log(res);
  }
})

// display greeting according to time
var hour = new Date().getHours()
console.log(hour)
if (hour > 17) {
  alt = 'Evening'
} else if (hour > 12) {
  alt = 'Afternoon'
} else {  
  alt = 'Morning'
}
var options = { year: 'numeric', month: 'long', day: 'numeric' }
document.getElementById("greeting").innerHTML = "Good " + alt + "! " + new Date().toLocaleDateString("en-US", options);


// executed after the table is populated
$( document ).ajaxComplete(function() {
  $('.dropdown-trigger').dropdown();
  $('.tabs').tabs();
  var modal = document.getElementById("myModal");
  var btns = document.getElementsByClassName("detailBtn");
  var span = document.getElementsByClassName("close")[0];

  var tableBehavioral = document.getElementById("tb-behavioral");
  var tableTechnical = document.getElementById("tb-technical");
  $('#behavioral').append(tableBehavioral);
  $('#technical').append(tableTechnical);

  // When the user clicks the button, open the modal 
  for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function() {
      modal.style.display = "block";
    }
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







