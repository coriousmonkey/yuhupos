$(document).ready(function () {
    auth();

    console.log(get_chart());

    var datanya = get_chart();
    for (var i = 0; i < datanya.length; i++) {
        row = datanya[i];
        push_html(row);
    }
    hitung();
});



function auth() {
    username = window.localStorage.getItem('username');
    password = window.localStorage.getItem('password');

    $.ajax({
        url: app_hostname + 'user/login',
        data: {
            username: username,
            password: password,
        },
        type: 'POST',
        success: function (data, textStatus, jqXHR) {
            console.log(data);
            if (data['succes']) {
                console.log('succes');
            } else {
                window.location = "index.html";
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            window.location = "index.html";
        }
    });
}


function get_chart() {
    var cart = [];
    var cart_str = window.localStorage.getItem('cart');
    if (cart_str.length > 0) {
        var cart = JSON.parse(cart_str);
    }
    return cart;
}

function set_cart(arr_cart){
     var cart_str=JSON.stringify(arr_cart);
     window.localStorage.setItem('cart',cart_str);
}


$(document).on('click', '.plus-minus', function () {
    var attr = $(this).attr('aksi');
    var input = $(this).parent().parent().find('input');
    input_val = (input.val());
    if (attr == 'plus') {
        input_val = parseInt(input_val) + 1;
    } else {
        input_val = parseInt(input_val) - 1;
        if (input_val < 1) {
            input_val = 1;
        }
    }
    input.val(input_val);
    hitung();
});


$(document).on('click', '.delete-btn', function () {
    $(this).parent().parent().parent().parent().remove();
    hitung();
});


$(document).on('keyup', '.change-handler', function () {
    hitung();
});

function hitung() {
    var total_nya = 0;

    var arr_cart=[];

    $('#produk_list > ul').each(function () {
        harga = $(this).find('input[name=harga]').val();
        qty = $(this).find('input[name=qty]').val();
        total = $(this).find('.total');

        total_count = parseFloat(harga) * parseFloat(qty);
        total.html(total_count);

        var cart_peritem = {
            besar: $(this).find('input[name=harga]').val(),
            id_item: $(this).find('input[name=id_item]').val(),
            id_jenis: $(this).find('input[name=id_jenis]').val(),
            id_tipe: $(this).find('input[name=id_tipe]').val(),
            nama_item: $(this).find('input[name=nama_item]').val(),
            nama_jenis: $(this).find('input[name=nama_jenis]').val(),
            nama_tipe: $(this).find('input[name=nama_tipe]').val(),
            qty: $(this).find('input[name=qty]').val(),
            is_active: $(this).find('input[name=is_active]').val(),
            foto: $(this).find('input[name=foto]').val(),
        };
        
        arr_cart.push(cart_peritem);

        total_nya = total_nya + total_count;
    });
    
    set_cart(arr_cart);

    total_html(total_nya);
}

function decoder(data) {
    data1 = decodeURI(data);
    hasil = JSON.parse(data1);
    return hasil;
}

function push_html(data) {
    str = app_hostname;
    app_hostname_base = str.substring(0, str.length - 4);
    var htmlnya = '<ul class="collection">' +
            '<li class="collection-item avatar">' +
            '<div class="row">' +
            '<div class="col s4">' +
            '<img src="' + app_hostname_base + 'assets/uploads/files/' + data.foto + '" alt="" class="circle"/>' +
            '<span class="title">' + data.nama_item + '</span>' +
            '<input type="text" name="harga" class="change-handler" value="' + data.besar + '" />' +
            '<input type="hidden" name="nama_item" class="change-handler" value="' + data.nama_item + '" />' +
            '<input type="hidden" name="nama_jenis" class="change-handler" value="' + data.nama_jenis + '" />' +
            '<input type="hidden" name="nama_tipe" class="change-handler" value="' + data.nama_tipe + '" />' +
            '<input type="hidden" name="id_item" class="change-handler" value="' + data.id_item + '" />' +
            '<input type="hidden" name="id_jenis" class="change-handler" value="' + data.id_jenis + '" />' +
            '<input type="hidden" name="id_tipe" class="change-handler" value="' + data.id_tipe + '" />' +
            '<input type="hidden" name="foto" class="change-handler" value="' + data.foto + '" />' +
            '<input type="hidden" name="is_active" class="change-handler" value="' + data.is_active + '" />' +
            '<input type="hidden" name="besar" class="change-handler" value="' + data.besar + '" />' +
            '</div>' +
            '<div class="col s4">' +
            '<p>' + data.nama_jenis + '</p>' +
            '<p>' + data.nama_tipe + '</p>' +
            '</div>' +
            '<div class="col s4 right-align">' +
            '<h5 class="total" ></h5>' +
            '</div>' +
            '</div>' +
            //--row-----------


            '<div class="row">' +
            '<div class="col s6">' +
            '<div class="col s4">' +
            '<button class="plus-minus btn-floating btn-small" aksi="minus" >-</button>' +
            '</div>' +
            '<div class="col s4 MyDiv">' +
            '<input type="number" name="qty" value="' + data.qty + '" class="change-handler default-input" />' +
            '</div>' +
            '<div class="col s4">' +
            '<button class="plus-minus btn-floating btn-small" aksi="plus" >+</button>' +
            '</div>' +
            '</div>' +
            //---button delete---
            '<div class="col s6 right-align">' +
            '<button class="btn-floating delete-btn red lighten-2" > <i class="fa fa-trash"></i> </button>' +
            '</div>' +
            //---button delete---
            '</div>' +
            //--row-----------
            '</li>' +
            '</ul>';
    $('#produk_list').append(htmlnya);
}

function total_html(total_nya) {
    var htmlnya =
            '<ul class="collection">' +
            '<li class="collection-item avatar">' +
            '<div class="row">' +
            '<div class="col s6">' +
            '<h5>Total :</h5>' +
            '</div>' +
            '<div class="col s6 right-align">' +
            '<h5>' + total_nya + '</h5>';
    '</div>' +
            '</div>' +
            '</li>' +
            '</ul>';

    $('#totalnya').html(htmlnya);


}