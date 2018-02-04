import page from 'page';
import { renderItems } from 'src/render'
import { getItems } from 'src/api'

// const pg = require('pg')

page('/', index);

function index(ctx) {
    getItems((items) => {
        // console.log('viejo: ' + getItems(items))
        console.log('hey')
        // renderItems(items);
    });
    // var items = getItems()
    // renderItems(items)
    console.log('salió por acá pero no hizo un pingo')
}

page();