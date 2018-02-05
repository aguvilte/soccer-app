import $ from 'jquery';
import apiKey from 'src/private';

const $itemsContainer = $('#app-body').find('.items');
var itemTemplate = `<article class="item col-3">
                        <p>:name:</p>
                    </article>`;

const $questionContainer = $('#app-body').find('.question');
var questionTemplate = `<h2>¿Cuál equipo pertenece al torneo :competition:?</h2>`

var competitions = {
    id: [],
    name: []
}

var randomCompetitions = [];
var teams = {
    idCompetition: [],
    name: []
}

var teamChoose;
var idCompetitionChoose;
var nameCompetitionChoose;
var indexCompetition;
var indexTeam;

export function getItems(returnItems) {
    $.ajax({
        headers: { 'X-Auth-Token': apiKey },
        url: 'http://api.football-data.org/v1/competitions/',
        dataType: 'json',
        type: 'GET',
        success: (data) => {
            for (var i = 0; i < data.length; i++) {
                if(data[i].id != 466) {
                    competitions.id[i] = data[i].id;
                    competitions.name[i] = data[i].caption;
                }
            }

            for (var l = 0; l < 4; l++) {
                teams.idCompetition.push(competitions.id[Math.floor(Math.random()*competitions.id.length)]);
                var urlString = 'http://api.football-data.org/v1/competitions/' + teams.idCompetition[l] + '/teams'

                $.ajax({
                    headers: { 'X-Auth-Token': apiKey },
                    url: urlString,
                    dataType: 'json',
                    type: 'GET',
                    success: (data) => {                        
                        teams.name.push(data.teams[Math.floor(Math.random()*data.teams.length)].name)
                    }
                })
            }
        }

    })
    
    returnItems(teams);
}

setTimeout(function() {
    for (var i = 0; i < 4; i++) {
        var stringToReplace = teams.name[i]

        var itemArticle = itemTemplate.replace(':name:', stringToReplace);
        
        var $itemArticle = $(itemArticle);
        $itemsContainer.append($itemArticle)
    }

    teamChoose = teams.name[Math.floor(Math.random()*teams.name.length)]
    indexTeam = teams.name.indexOf(teamChoose)
    idCompetitionChoose = teams.idCompetition[indexTeam]
    indexCompetition = competitions.id.indexOf(idCompetitionChoose)
    nameCompetitionChoose = competitions.name[indexCompetition]

    var question = questionTemplate.replace(':competition:', nameCompetitionChoose);
    var $question = $(question);
    $questionContainer.append($question)
}, 10000);