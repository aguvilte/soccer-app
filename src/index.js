import page from 'page';
import { renderItems } from 'src/render'
import { getItems } from 'src/api'

page('/', index);

function index(ctx) {
    getItems((items) => {
        renderItems(items);
    });
    console.log('salió por acá pero no hizo un pingo')
}

page();