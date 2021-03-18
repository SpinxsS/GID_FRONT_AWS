$("#lgTou").on('click', function () {
    $.ajax({
        url: '../../../Login',
        type: 'POST',
        data: {
            action: "revertLogout"
        }
    }).always(function (data) {
        location.href = "../../../index.jsp";
        location.reload();
    });
});