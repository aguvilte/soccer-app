import $ from 'jquery';

const $itemsContainer = $('#app-body').find('.items');
var itemTemplate = `<article class="item col-3">
                        <p>:name:</p>
                    </article>`;

// var competitionsObj = [];

export function renderItems(items) {
    // for(var property in items) {
    //     alert(property + "=" + items[property]);
    // }
    console.log('items: ---------')
    console.log(items)

    // for (var i = 0; i < items.length; i++) {
    for (var i = 0; i < 4; i++) {
        var stringToReplace = items.idCompetition[i] + ' - ' + items.name[i]
        // console.log('la concha de la lora, loco')
        console.log(JSON.stringify(items))
        console.log(stringToReplace)
        // console.log(items)
        // var itemArticle = itemTemplate.replace(':name:', items[i].caption);
        var itemArticle = itemTemplate.replace(':name:', stringToReplace);

        var $itemArticle = $(itemArticle);
        $itemsContainer.append($itemArticle)

        // competitionsObj.id[i] = items[i].id;
        // competitionsObj.name[i] = items[i].caption;
    }
    // localStorage.competitions = ;
}                    