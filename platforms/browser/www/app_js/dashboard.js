$(document).ready(function () {
    auth();

    $.ajax({
        url: app_hostname + 'item/get_list',
        type: 'POST',
        success: function (data, textStatus, jqXHR) {
            console.log(data);

            for (var i = 0; i < data.data.length; i++) {
                row = data.data[i];
                row.qty=1;
                //console.log(row);
                push_html(row);
            }

        },
        error: function (jqXHR, textStatus, errorThrown) {

        }
    });

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


var cart_init = [];
$(document).on('click', '.add_chart', function () {
    item = decoder($(this).attr('datanya'));
    var allow_push = true;
    for (var i = 0; i < cart_init.length; i++) {
        if (cart_init[i].id_item == item.id_item) {
            allow_push = false;
        }
    }
    if (allow_push) {
        cart_init.push(item);
    }
    console.log(cart_init);
    window.localStorage.setItem('cart',JSON.stringify(cart_init));
    console.log(window.localStorage.getItem('cart'));
});

function decoder(data) {
    data1 = decodeURI(data);
    hasil = JSON.parse(data1);
    return hasil;
}

function push_html(data) {
    str = app_hostname;
    app_hostname_base = str.substring(0, str.length - 4);
    var htmlnya = '<ul id="produks" class="collection">' +
            '<li class="collection-item avatar">' +
            '<div class="col s4">' +
            '<img src="' + app_hostname_base + 'assets/uploads/files/' + data.foto + '" alt="" class="circle"/>' +
            '<span class="title">' + data.nama_item + '</span>' +
            '</div>' +
            '<div class="col s4">' +
            '<p>' + data.nama_jenis + '</p>' +
            '<p>' + data.nama_tipe + '</p>' +
            '</div>' +
            '<div class="col s4">' +
            '<a style="float: right" datanya="' + encodeURI(JSON.stringify(data)) + '" href="#" class="waves-effect waves-light btn add_chart"><i class="fa fa-plus-circle"></i></a>' +
            '</div>' +
            '</li>' +
            '</ul>';
    $('#produk_list').append(htmlnya);
}