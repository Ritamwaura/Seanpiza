$(function () {
//Get inputs
    $("button.proceed").click(function (event) {
        let flavour = $(".flavour option:selected").val();
        let size = $("#size option:selected").val();
        let crust = $("#crust option:selected").val();
        let topping = $("#toppings option:selected").val();
        let number = $("#number").val();
        let order = (f, s, c, t, n, d) => {
            return {
                f,
                s,
                c,
                t,
                n,
                d
            };
        };

        let newOrder = order(flavour, size, crust, topping, number, del_mode);
        console.log(newOrder);
    });


});