
var countfields=4
$(document).ready(function () {

    $('#add-field').click(function(e){
        countfields+=1

        var roster=document.getElementById('rosterinfo')
        var maindiv=document.createElement('div')
        maindiv.setAttribute("id",'playerinfo'+countfields)
        maindiv.className="inputplayer"
        maindiv.style.cssText='padding: 15px 25px;margin: 0px 45px;border-radius: 4px;border: 1px solid #CCC;'
        var gamename=document.createElement('input')
        gamename.setAttribute("type","text")
        gamename.setAttribute("placeholder","Game name")
        gamename.setAttribute("size","25")

        var gameid=document.createElement('input')
        gameid.setAttribute("type","text")
        gameid.setAttribute("placeholder","Game id")
        gameid.setAttribute("size","25")

        var discordid=document.createElement('input')
        discordid.setAttribute("type","text")
        discordid.setAttribute("placeholder","Discord id")
        discordid.setAttribute("size","25")


        maindiv.appendChild(gamename)
        maindiv.appendChild(gameid)
        maindiv.appendChild(discordid)

        roster.appendChild(maindiv)

        e.preventDefault();
    });
    $('#done').click(function(e){
            teamname=document.getElementById('name').value
            output='Team name:'+teamname+'\n'

            teamtag=document.getElementById('tag').value
            output+='Team tag:'+teamtag+'\n'

            teamcaptain=document.getElementById('captain').value
            output+='Team Captain: <@'+teamcaptain+'> \n'


            output+='Roster:\n'
            for (var i= 1 ; i<=countfields; i++){
            let players = document.getElementById('playerinfo'+i)
            if (i>4){
                var player="P"+i+". "+players.childNodes[0].value+" | "+players.childNodes[1].value+" | <@"+players.childNodes[2].value+">"
            }else{
                var player="P"+i+". "+players.childNodes[1].value+" | "+players.childNodes[3].value+" | <@"+players.childNodes[5].value+">"

            }
            if (player!="P"+i+".  |  | <@>"){
                output+=player+'\n'
                }
            }
            var pre=document.createElement('pre');
            pre.setAttribute("id","output")
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
        });
})