$(function () {

//Get inputs
    $("#checkout").click(function () {
        let flavour = $(".flavour option:selected").val();
        let size = $("#size option:selected").val();
        let crust = $("#crust option:selected").val();
        let topping = $("#toppings option:selected").val();
        let number = $("#number").val();
        console.log(size);

        //Function order
        let order = (f, s, c, t, n, total) => {
            return {
                f,
                s,
                c,
                t,
                n,
                total
            };
        };

        //check price
        let price, totalPrice;
        switch (flavour) {
            case flavour = "vegtikka":
                switch (size) {
                    case size = "regular":
                        price = 300;
                        totalPrice =  (price * number) + 80;
                        break;
                    case size = "medium":
                        price = 600;
                        totalPrice =  (price * number) + 80;
                        break;
                    case size = "large":
                        price = 1200;
                        totalPrice =  (price * number) + 80;
                        break;
                }
                break;
            case flavour = "chickentikka":
                switch (size) {
                    case size = "regular":
                        price = 300;
                        totalPrice =  (price * number) + 80;
                        break;
                    case size = "medium":
                        price = 600;
                        totalPrice =  (price * number) + 80;
                        break;
                    case size = "large":
                        price = 1200;
                        totalPrice =  (price * number) + 80;
                        break;
                }
                break;
            case flavour = "periperi":
                switch (size) {
                    case size = "regular":
                        price = 300;
                        totalPrice =  (price * number) + 80;
                        break;
                    case size = "medium":
                        price = 600;
                        totalPrice =  (price * number) + 80;
                        break;
                    case size = "large":
                        price = 1200;
                        totalPrice =  (price * number) + 80;
                        break;
                }
                break;
            case flavour = "bbq":
                switch (size) {
                    case size = "regular":
                        price = 300;
                        totalPrice =  (price * number) + 80;
                        break;
                    case size = "medium":
                        price = 600;
                        totalPrice =  (price * number) + 80;
                        break;
                    case size = "large":
                        price = 1200;
                        totalPrice =  (price * number) + 80;
                        break;
                }
                break;
            case flavour = "boerewors":
                switch (size) {
                    case size = "regular":
                        price = 300;
                        totalPrice =  (price * number) + 80;
                        break;
                    case size = "medium":
                        price = 600;
                        totalPrice =  (price * number) + 80;
                        break;
                    case size = "large":
                        price = 1200;
                        totalPrice =  (price * number) + 80;
                        break;
                }
                break;
            case flavour = "hawaiian":
                switch (size) {
                    case size = "regular":
                        price = 300;
                        totalPrice =  (price * number) + 80;
                        break;
                    case size = "medium":
                        price = 600;
                        totalPrice =  (price * number) + 80;
                        break;
                    case size = "large":
                        price = 1200;
                        totalPrice =  (price * number) + 80;
                        break;
                }
                break;
            case flavour = "mushroom":
                switch (size) {
                    case size = "regular":
                        price = 300;
                        totalPrice =  (price * number) + 80;
                        break;
                    case size = "medium":
                        price = 600;
                        totalPrice =  (price * number) + 80;
                        break;
                    case size = "large":
                        price = 1200;
                        totalPrice =  (price * number) + 80;
                        break;
                }
                break;
            case flavour = "regina":
                switch (size) {
                    case size = "regular":
                        price = 300;
                        totalPrice =  (price * number) + 80;
                        break;
                    case size = "medium":
                        price = 600;
                        totalPrice =  (price * number) + 80;
                        break;
                    case size = "large":
                        price = 1200;
                        totalPrice =  (price * number) + 80;
                        break;
                }
                break;
        }

        //Exec order function
        let newOrder = order(flavour, size, crust, topping, number, totalPrice);
        console.log(newOrder); // test func

        // let myOrder = JSON.stringify(JSON.parse(newOrder));
        $("#list").append("<br>" + "Flavour : " + newOrder.f + "<br>" + "Size : " + newOrder.s + "<br>" + "Crust : " + newOrder.c + "<br>" + "Toppings : " + newOrder.t + "<br>" + " Number of pizzas : " + newOrder.n + "<br>" + "Total Price : " + newOrder.total);


    });


});