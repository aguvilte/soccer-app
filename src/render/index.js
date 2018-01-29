import $ from 'jquery';

const $itemsContainer = $('#app-body').find('.items');
var itemTemplate = `<article class="item">
                        <p>:name:</p>
                    </article>`;

export function renderItems(items) {
    items.teams.forEach((item) => {
        var itemArticle = itemTemplate.replace(':name:', item.name);

        var $itemArticle = $(itemArticle);
        $itemsContainer.append($itemArticle)    
    });
    // console.log(items)
}                    