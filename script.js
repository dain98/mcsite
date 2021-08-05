let addlink = document.getElementById("addlink");
var i = 0;
var form = 2;
$(function() {
    $('#addlink').click(function(){
        var newDiv = $('<div class="form__group field"><input type="input" class="form__field" placeholder="Link #1" name="link1" id="link1" value="" required /><label for="link1" class="form__label">MP Link #' + form + '</label></div>');
      //newDiv.style.background = "#000";
      $('#form').append(newDiv);
      form++;
    });
    });
// addlink.addEventListener("click", function() {
//     var original = document.getElementById('form');
//     var clone = original.cloneNode(true);
//     clone.id = "form" + ++i;
//     original.parentNode.appendChild(clone);
// //   let form = document.getElementById("form");
// //   let clone = form.firstElementChild.cloneNode(true);
// //   form.appendChild(clone);
// });

function submit(){
    var form = document.querySelectorAll("#form input");
    var tbodyRef = document.getElementById('res').getElementsByTagName('tbody')[0];
    for (var i = 0;i < form.length;i++){
        
        var newRow = tbodyRef.insertRow();
        var newCell = newRow.insertCell();
        var newText = document.createTextNode(form[i].value); // PLAYER NAME
        newCell.appendChild(newText);
        var newCell = newRow.insertCell();
        var newText = document.createTextNode("test"); // COST VALUE
        newCell.appendChild(newText);
        var newCell = newRow.insertCell();
        var newText = document.createTextNode("test2"); // # OF MAPS PLAYED
        newCell.appendChild(newText);
    }
}

function actionToggle() {
    const action = document.querySelector('.action');
    action.classList.toggle('active')
  }