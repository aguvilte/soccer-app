import page from 'page';
import { renderItems } from 'src/render'
import { getItems } from 'src/api'

page('/', index);

function index(ctx) {
    getItems((items) => {
        // renderItems(items);
    });
}

page();