document.querySelector('.create-todo').addEventListener('click', function () {
    document.querySelector('.new-item').style.display = "block";
});

document.querySelector('.new-item button').addEventListener('click', function () {
    var itemName = document.querySelector('.new-item input').value;
    if (itemName != '') {
        var itemsStorage = localStorage.getItem('todo-items');
        var itemsArr = JSON.parse(itemsStorage);
        itemsArr.push({
            "item": itemName,
            "status": 0
        });

        saveItems(itemsArr);
        fetchItems();

        // Cleanups
        document.querySelector('.new-item input').value = '';
        document.querySelector('.new-item').style.display = "none";
    }
});

function fetchItems() {
    const itemsList = document.querySelector('ul.todo-items');
    itemsList.innerHTML = '';
    var newItemHTML = '';

    try {
        var itemsStorage = localStorage.getItem('todo-items');
        var itemsArr = JSON.parse(itemsStorage);

        for (var i = 0; i < itemsArr.length; i++) {
            var status = '';
            if (itemsArr[i].status == 1) {
                status = 'class="done"';
            }

            newItemHTML += `
                <li data-itemindex=${i} ${status}>
                    <span class="item">${itemsArr[i].item}</span>

                    <div>
                        <span class="itemComplete">☑️</span>
                        <span class="itemDelete">🗑️</span>
                    </div>
                </li>
            `;
        }

        itemsList.innerHTML = newItemHTML;

        var itemListUL = document.querySelectorAll('ul li');
        for (var i = 0; i < itemListUL.length; i++) {
            itemListUL[i].querySelector('.itemComplete').addEventListener('click', function () {
                var index = this.parentNode.parentNode.dataset.itemindex;
                itemComplete(index);
            });
            itemListUL[i].querySelector('.itemDelete').addEventListener('click', function () {
                var index = this.parentNode.parentNode.dataset.itemindex;
                itemDelete(index);
            });
        }
    } catch (error) {
        console.log(error);
    }
}

function saveItems(obj) {
    try {
        localStorage.setItem('todo-items', JSON.stringify(obj));
    } catch (error) {
        console.log(error);
    }
}

function itemComplete(index) {
    var itemsStorage = localStorage.getItem('todo-items');
    var itemsArr = JSON.parse(itemsStorage);

    itemsArr[index].status = 1;
    saveItems(itemsArr);

    document.querySelector('ul.todo-items li[data-itemindex="' + index + '"]').className = "done";
}

function itemDelete(index) {
    var itemsStorage = localStorage.getItem('todo-items');
    var itemsArr = JSON.parse(itemsStorage);

    itemsArr.splice(index, 1);
    saveItems(itemsArr);

    document.querySelector('ul.todo-items li[data-itemindex="' + index + '"]').remove();
}

fetchItems();