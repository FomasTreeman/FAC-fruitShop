const basket = { "apple": 0, "banana": 0, "kiwi": 0 };
var ul = document.getElementById("basket");
var addA = document.getElementById("addA");
var addB = document.getElementById("addB");
var addK = document.getElementById("addK");

addA.addEventListener("click", function(){addFruit("apple")});
addB.addEventListener("click", function(){addFruit("banana")});
addK.addEventListener("click", function(){addFruit("kiwi")});

function addFruit(fruit) {
    basket[fruit] += 1;
    basket[fruit] == 1 ? addToBasket(fruit) : updateQuantity(fruit);
}


function addToBasket(item) {
    var li = document.createElement("li");
    li.setAttribute("id", item)
    var add = document.createElement("BUTTON");
    var remove = document.createElement("BUTTON");
    var removeAll = document.createElement("BUTTON");
    var quantity = document.createElement("p");

    add.innerHTML = "add";
    add.id = "add";
    add.setAttribute("onclick", "")
    remove.innerHTML = "remove";
    remove.id = "removeOne"
    remove.setAttribute("onclick", "")
    removeAll.innerHTML = "remove all";
    removeAll.id = "removeAll"
    removeAll.setAttribute("onclick", "")
    quantity.innerHTML = basket[item];
    quantity.id = item + "quantity";

    add.addEventListener("click", function(){addFruit(item)});
    remove.addEventListener("click", function(){removeFromBasket(item)});
    removeAll.addEventListener("click", function(){removeAllFromBasket(item)});

    li.appendChild(document.createTextNode(item));
    li.appendChild(add);
    li.appendChild(remove);
    li.appendChild(removeAll);
    li.appendChild(quantity);
    ul.appendChild(li);
    updateBasketQuantity();

}

function removeFromBasket(fruit) {
    if (basket[fruit] == 1) {
        removeAllFromBasket(fruit);
    } else {
        basket[fruit] -= 1;
        updateQuantity(fruit);
    }
}

function removeAllFromBasket(fruit) {
    basket[fruit] = 0;
    document.getElementById(fruit).remove()
}


function updateQuantity(fruit) {
    document.getElementById(fruit + "quantity").innerHTML = basket[fruit];
    updateBasketQuantity();
}

function updateBasketQuantity() {
    document.getElementById("basketQuantity").innerText = "you have " + Object.values(basket).reduce((prev, curr) => prev + curr, 0) + " items in your basket";
}