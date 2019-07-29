var flavour, size, crust, topping, number, del_mode;

$(function () {
//Get inputs
    $("button.proceed").click(function (event) {
        flavour = $(".flavour option:selected").val();
        size = $("#size option:selected").val();
        crust = $("#crust option:selected").val();
        topping = $("#toppings option:selected").val();
        let delivery_mode = [];
        $.each(("input[name ='delivery']:checked"), () => {
            delivery_mode.push($(this).val());
            del_mode = JSON.parse(JSON.stringify(delivery_mode));
        });
        let order = (f, c, t, n, d) => {
            return {
                f,
                c,
                t,
                n,
                d
            };
        };
        console.log(del_mode);
        let newOrder = order(flavour, crust, topping, number, del_mode);
        console.log(newOrder);
    });


});