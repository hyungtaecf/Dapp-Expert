//CHANGING ACTIVE STATES
function activateButton(headerId) {
    $(headerId).find(".toggle").click(function() {
        $(headerId).find(".toggle").removeClass("active")
        $(this).addClass("active")
    })
}


$("document").ready(function() {
    // Blockchains
    activateButton(headerId = "#blockchain-select")

    // Categories
    activateButton(headerId = "#category-select")

    // Period
    activateButton(headerId = "#period-select")

    // Chart
    activateButton(headerId = "#chart-select")

})





//INFO MESSAGE
$(function() {
    $('[data-toggle="tooltip"]').tooltip()
});

//TABLE - See more
$("#seeMore").click(function() {
    console.log(document.querySelectorAll("tr").lenght)
    for (let i = 0; i < 10; i++) {
        let row = $("<tr>");
        row.append($("<th>" + (i + 11) + "</th>"))
            .append($("<td>EOS</td>"))
            .append($("<td>Games</td>"))
            .append($("<td>1.85</td>"))
            .append($("<td>61</td>"))
            .append($("<td>$100.00k</td>"))
            .append($("<td>100.00k</td>"))
            .append($("<td>100</td>"));


        $("#tab tbody").append(row);
    }
});

//CHART
const chart = $("#lineChart")
let lineChart = new Chart(chart, {
    type: 'line',
    data: {
        labels: ["1-7", "1-8", "1-9", "1-10", "1-11", "1-12", "1-13"],
        datasets: [{
                label: "My First dataset",
                data: [15, 14, 18, 21, 16, 21, 28],
                backgroundColor: [
                    'rgba(105, 0, 132, .2)',
                ],
                borderColor: [
                    'rgba(200, 99, 132, .7)',
                ],
                borderWidth: 2
            },
            {
                label: "My Second dataset",
                data: [11, 9, 10, 14, 17, 15, 14],
                backgroundColor: [
                    'rgba(0, 137, 132, .2)',
                ],
                borderColor: [
                    'rgba(0, 10, 130, .7)',
                ],
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true
    }
});