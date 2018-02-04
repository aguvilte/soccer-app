import $ from 'jquery';
import apiKey from 'src/private';
// import dbconfig from 'src/private/config.js';

const $itemsContainer = $('#app-body').find('.items');
var itemTemplate = `<article class="item col-3">
                        <p>:name:</p>
                    </article>`;

var dbconfig = {
    host: 'localhost',
    port: 5432,
    database: 'soccer-api',
    user: 'aguchix',
    password: 'matriceisi318'
}

var competitions = {
    id: [],
    name: []
}

var randomCompetitions = [];
var teams = {
    idCompetition: [],
    name: []
}

export function getItems(returnItems) {
// export function getItems(returnItems) {
    $.ajax({
        headers: { 'X-Auth-Token': apiKey },
        url: 'http://api.football-data.org/v1/competitions/',
        dataType: 'json',
        // async: false,
        type: 'GET',
        success: (data) => {
            // returnItems(data)
            for (var i = 0; i < data.length; i++) {
                if(data[i].id != 466) {
                    competitions.id[i] = data[i].id;
                    competitions.name[i] = data[i].caption;
                }
            }
        

            console.log(competitions)

            for (var l = 0; l < 4; l++) {
                teams.idCompetition.push(competitions.id[Math.floor(Math.random()*competitions.id.length)]);
                // teams.idCompetition.unshift(competitions.id[Math.floor(Math.random()*competitions.id.length)]);
                var urlString = 'http://api.football-data.org/v1/competitions/' + teams.idCompetition[l] + '/teams'
                // console.log('asd ' + teams.idCompetition[l])
                // console.log(url)


                $.ajax({
                    headers: { 'X-Auth-Token': apiKey },
                    // url: 'http://api.football-data.org/v1/competitions/' + teams.idCompetition[l] + '/teams',
                    url: urlString,
                    dataType: 'json',
                    type: 'GET',
                    success: (data) => {
                        console.log(data)
                        
                        teams.name.push(data.teams[Math.floor(Math.random()*data.teams.length)].name)
                        // teams.name.unshift('juancho')
                        // console.log(teams)
                        console.log('length of teams.name: ' + teams.name.length)
                    
                        
                    }
                })
            }
            // for (var concha = 0; concha < 4; concha++)
            //     console.log('cuando id competition = ' + teams.idCompetition[concha] + ', el random team es ' + teams.name[concha])

            // console.log(competitions)    
            console.log(teams)
            
        // },
        // complete: (data) => {
        //     for (var i = 0; i < 4; i++) {
        //         var stringToReplace = teams.idCompetition[i] + ' - ' + teams.name[i]
        //         // console.log('la concha de la lora, loco')
        //         // console.log(JSON.stringify(items))
        //         // console.log(stringToReplace)
        //         // console.log(items)
        //         // var itemArticle = itemTemplate.replace(':name:', items[i].caption);
        //         var itemArticle = itemTemplate.replace(':name:', stringToReplace);
                
        //         var $itemArticle = $(itemArticle);
        //         $itemsContainer.append($itemArticle)
                
        //         // competitionsObj.id[i] = items[i].id;
        //         // competitionsObj.name[i] = items[i].caption;
        //     }
        }

    })
    
    returnItems(teams);
    // return teams;
}

setTimeout(function() {
    for (var i = 0; i < 4; i++) {
        var stringToReplace = teams.idCompetition[i] + ' - ' + teams.name[i]
        // console.log('la concha de la lora, loco')
        // console.log(JSON.stringify(items))
        // console.log(stringToReplace)
        // console.log(items)
        // var itemArticle = itemTemplate.replace(':name:', items[i].caption);
        var itemArticle = itemTemplate.replace(':name:', stringToReplace);
        
        var $itemArticle = $(itemArticle);
        $itemsContainer.append($itemArticle)
        
        // competitionsObj.id[i] = items[i].id;
        // competitionsObj.name[i] = items[i].caption;
    }
}, 10000);