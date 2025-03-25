var productData;

$(document).ready(function () {
    GetAllProducts();
});


function GetAllProducts() {
    $.ajax({
        url: '/api/products',
        type: 'GET',
        success: function (data) {
            productData = data;
            PopulateProductTable(productData)
        },
        error: function (error) {
            console.log(error);
        }
    });
};

function PopulateProductTable(data) {
    $('#productsTable').empty();

    data.forEach(function (product) {
        const row = $('<tr>');

        // Explicitly create and append each column
        $('<td>').text(product.name).appendTo(row);
        $('<td>').text(product.description).appendTo(row);
        $('<td>').text(product.price).appendTo(row);
        $('<td>').text('Yes').appendTo(row);

        // Append the row to the table body
        $('#productsTable').append(row);
    })
    
    //data.forEach(function (product) {
    //    const row = $('<tr>').append(
    //        $('<td>').text(product.name),
    //        $('<td>').text(product.description),
    //        $('<td>').text(product.price),
    //        $('<td>').text('Yes'),
    //    );

    //    $('#productsTable').append(row);
    //})


};


