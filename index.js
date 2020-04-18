$(() => {
    $(".checkAll").on("change", function() {
        $(".check, .checkAll").prop("checked", $(this).prop("checked"));
    });
    $(".check").on("change", function() {
        if ($(".check:checked").length===3) {
            $(".checkAll").prop("checked", true)
        }
        else {
            $(".checkAll").prop("checked", false);
        }
    })
    function account() {
        let sumAmount = 0;
        let sumPrice = 0;
        $(".amount").each((i, dom) => {
            let amount = parseInt($(dom).children().prop("value"))
        sumAmount += amount;
        let price = parseInt($(dom).siblings(".price").children().text().substr(1));
        sumPrice += amount*price;
        // console.log(sumAmount);
        // console.log(sumAmount, sumPrice);   
        $("footer .amountAll").html(sumAmount);
        $("footer .totalAll").html("$" + (sumPrice).toFixed(2)); 
        })
        if ($("div.mainDiv").length===0) {
            $("footer .amountAll").html(0);
            $("footer .totalAll").html("$" + (0).toFixed(2));
            
        }
        // console.log($("div.mainDiv").length);
    }
    $(".amount").on("change", "input", function() {
        let price = $(this).parent().siblings(".price").children().text().substr(1);
        let amount = $(this).prop("value");
        // console.log(priceNum);
        $(this).parent().siblings(".total").html("$" + (price*amount).toFixed(2));
        // console.log(this);
        // $("footer .amount").html("test");  
        account();
    });
    $(".delete a").on("click", function() {
        $(this).parents(".mainDiv").remove();
        // console.log("get")
        account();
    });
    $(".delSct").on("click", function() {
        // console.log("get");
        $("div.mainDiv").each((i, dom) => {
            // console.log($(dom).children(".check").prop("checked"));
            if ($(dom).children(".check").prop("checked")==true) {
                $(dom).remove();
            }
        })
        account();
    })
    $(".clear").on("click", function() {
        $("div.mainDiv").remove();
        account();
    })
})