import $ from 'jquery';

const $itemsContainer = $('#app-body').find('.items');
var itemTemplate = `<article class="item col-3">
                        <p>:name:</p>
                    </article>`;

export function renderItems(items) {
    for (var i = 0; i < 4; i++) {
        var stringToReplace = items.idCompetition[i] + ' - ' + items.name[i]

        console.log(JSON.stringify(items))
        console.log(stringToReplace)

        var itemArticle = itemTemplate.replace(':name:', stringToReplace);

        var $itemArticle = $(itemArticle);
        $itemsContainer.append($itemArticle)
    }
}                    