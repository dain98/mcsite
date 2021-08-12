let addlink = document.getElementById("addlink");
let loading = document.getElementById('loading');
var button = document.getElementById("submit");
var i = 0;
var forms = 2;


async function submit(){
    button.classList.add("disabled");
    var fields = document.getElementsByClassName("validate");
    var matches = "";
    var warmups = "";
    for (var i = 0;i < fields.length;i++) {
        if (i % 2) {
            if (fields[i].value == "") {
                warmups += "2,";
            } else {
                warmups += fields[i].value + ",";
            }
        } else {
            var tempMatch = fields[i].value.split("/");
            matches += tempMatch.pop() + ",";
        }
    }
    var tbodyRef = document.getElementById('table').getElementsByTagName('tbody')[0];
    const response = await fetch('https://dain.cafe/matches/' + matches.replace(/,\s*$/, "") + '&' + warmups.replace(/,\s*$/, ""));
    const costs = await response.json();
    var new_tbody = document.createElement('tbody');
    costs.forEach(function (player, index) {
        var newRow = new_tbody.insertRow();
        var newCell = newRow.insertCell();
        var newText = document.createTextNode(player[0]); // PLAYER NAME
        newCell.appendChild(newText);
        var newCell = newRow.insertCell();
        var newText = document.createTextNode(player[1]); // COST VALUE
        newCell.appendChild(newText);
    });
    tbodyRef.parentNode.replaceChild(new_tbody,tbodyRef);
    button.classList.remove("disabled");
}

function addField() {
    const div = document.createElement('div');
    const form = document.getElementById('form');
    console.log(form);
    div.className = 'row';
    div.innerHTML = `<div class="input-field col s9"><input id="mplink` + forms + `" type="text" class="validate white-text"><label for="mplink` + forms + `">MP Link #` + forms + `</label></div><div class="input-field col s3"><input id="warmup` + forms + `" type="text" class="validate white-text"><label for="warmup` + forms + `">Warmups</label></div>`
    form.appendChild(div);
    forms++;
}