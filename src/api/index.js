import $ from 'jquery';
import apiKey from 'src/private';

export function getItems(returnItems) {
    $.ajax({
        headers: { 'X-Auth-Token': apiKey },
        url: 'http://api.football-data.org/v1/competitions/455/teams',
        dataType: 'json',
        type: 'GET',
        success: (data) => {
            returnItems(data);
        }
    });
}