var productsData;

$(document).ready(function () {
    getAllProducts();

});

function getAllProducts() {
    $.ajax({
        url: '/api/products',
        type: 'GET',
        success: function (data) {
            productsData = data;
            populateProductTable(productsData);
        },
        error: function (error) {
            console.log(error);
        }
    });
};

function populateProductTable(data) {
    $('#productsTable').empty();

    data.forEach(function (product) {
        const row = $('<tr>');

        $('<td>').html('<a href="#" class="table-links" onclick="openUpdateModal(' + product.id + ')">' + product.name + '</a>').appendTo(row);
        $('<td>').text(product.description).appendTo(row);
        $('<td>').text(product.price).appendTo(row);
        $('<td>').html('<i class="fa-solid fa-trash" style="color:red" onclick="deleteProduct(' + product.id + ')"></i>').appendTo(row);

        $('#productsTable').append(row);
    })
};

function deleteProduct(id) {
    $.ajax({
        url: `/api/products/${id}`,
        type: 'DELETE',
        success: function (result) {
            getAllProducts();
        },
        error: function (error) {
            console.log(error);
        }
    });
};

function openAddModal() {
    $('#submitAddButton').show();
    $('#submitUpdateButton').hide();
    $('#modal-text').empty();
    $('#modal-text').append('Add a Product');

    clearModalFields();
    showModal();  
}

function closeModal() {
    hideErrors();
    clearModalFields();

    $('#productModal').hide();
}

function showModal() {
    $('#productModal').show();
};

function clearModalFields() {
    $('#productNameInput').val('');
    $('#productDescriptionInput').val('');
    $('#productPriceInput').val('');
}


function addProduct() {
    const validatedData = ValidateModalData();

    if (!validatedData.isValid) {
        validatedData.errors.forEach(function (errorLabelId) {
            $(errorLabelId).show();
        })
        return
    };

    $.ajax({
        url: '/api/products',
        type: 'POST',
        data: JSON.stringify(validatedData.data),
        contentType: 'application/json',
        success: function (result) {
            getAllProducts();
            clearModalFields();
            closeModal();
        },
        error: function (error) {
            console.log(error);
        }
    });

};

function collectModalData(){
    return {
        Name: $('#productNameInput').val(),
        Description: $('#productDescriptionInput').val(),
        Price: parseFloat($('#productPriceInput').val()),
    }
};

function ValidateModalData() {
    const modelData = collectModalData();
    let isValidFlag = true;
    let faultyFields = [];

    if (modelData.Name === "") {
        faultyFields.push("#productNameError");
        isValidFlag = false;   
    }

    if (modelData.Description === "") {
        faultyFields.push("#productDescriptionError");
        isValidFlag = false;
    }

    if (modelData.Price === "" || isNaN(modelData.Price) || modelData.Price <= 0) {
        faultyFields.push("#productPriceError");
        isValidFlag = false;
    }

    return {
        isValid: isValidFlag,
        errors: faultyFields,
        data: modelData
    };
};

function displayError() {
    $(faultyField).show();
};

function hideErrors() {
    $('#productNameError').hide();
    $('#productDescriptionError').hide();
    $('#productPriceError').hide();
}

function openUpdateModal(id) {
    const product = productsData.find(x => x.id == id)
    populateFields(product);

    $('#productModal').data('productId', id);
    $('#modal-text').empty().append('Update a Product');
    $('#submitUpdateButton').show();
    $('#submitAddButton').hide();
    
    showModal(); 
}

function populateFields(product) {
    $('#productNameInput').val(product.name);
    $('#productDescriptionInput').val(product.description);
    $('#productPriceInput').val(product.price);
}

function updateProduct() {
    const id = $('#productModal').data('productId');
    const validatedData = ValidateModalData();

    if (!validatedData.isValid) {
        validatedData.errors.forEach(function (errorLabelId) {
            $(errorLabelId).show();
        })
        return
    };

    $.ajax({
        url: `/api/products/${id}`,
        type: 'PUT',
        data: JSON.stringify(validatedData.data),
        contentType: 'application/json',
        success: function (result) {
            getAllProducts();
            clearModalFields();
            closeModal();
        },
        error: function (error) {
            console.log(error);
        }
    });
}


