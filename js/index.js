

$(document).ready(function () {
    $('#add-field').click(function(e){
        $('.rosterinfo').append(
            '<div id="playerinfo'+countfields+'" class="inputplayer">\n             <input type="text"  class="player" placeholder="Game name" >\n              <input type="text"  class="player"  placeholder="Game id" >\n               <input type="text"  class="player"  placeholder="Discord id">\n             <button id="field-'+countfields+'-delete" class="btn btn-danger" style="{margin: auto;padding: 0px 0px;}">Delete</button>\n     </div>'
            )
        countfields+=1
        e.preventDefault();
    })
    $('.btn.btn-success').click(function(e){
            teamname=document.getElementById('name').value
            output='Team name:'+teamname+'\n'

            teamtag=document.getElementById('tag').value
            output+='Team tag:'+teamtag+'\n'

            teamcaptain=document.getElementById('captain').value
            output+='Team Captain: <@'+teamcaptain+'> \n'


            output+='Roster:\n'
            for (var i= 1 ; i<5 ; i++){
            let players = document.getElementById('playerinfo'+i)
            var player= "P"+i+". "+players.childNodes[1].value+' | '+players.childNodes[3].value+'| <@'+players.childNodes[5].value+'>'
            output+=player+'\n'
//            console.log(player)

            }
            console.log(output)
            var pre=document.createElement('pre');
            var text=document.createTextNode(output);
            pre.appendChild(text);
            var card = document.getElementById("card-block")
            if (card.childNodes.length ==0){
                card.appendChild(pre)
            }else{
                for (var i=0;i<card.childNodes.length;i++){
            card.removeChild(card.childNodes[i]);
            }
            card.appendChild(pre)
            }
            e.preventDefault();

        })
})