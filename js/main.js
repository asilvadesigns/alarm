////////////////////////////
//
// Show Buttons

// $(".container--sticky").stick_in_parent({
//     offset_top: -20
// });

////////////////////////////
//
// Show Buttons

$("[data-target='input__check']").each(function() {

    $(this).click(function() {
        $(this).toggle(this.checked);
        $(this).toggleClass("ischecked");

        var inputsChecked = $(".ischecked");

        if (inputsChecked.length < 1) {
            $(".button__check").attr('disabled', true);
        } else if (inputsChecked.length >= 1) {
            $(".button__check").removeAttr('disabled');
        }

    });

});


////////////////////////////
//
// Change Folders display

// Set default state
$("#folders__display--grid").attr('disabled', true);

// On click toggle
$("#folders__display--list").click(function() {
    $("#folders__display--parent").removeClass("folders").addClass("folders--list");
    $(this).attr('disabled', true);
    $("#folders__display--grid").removeAttr('disabled');
});

$("#folders__display--grid").click(function() {
    $("#folders__display--parent").removeClass("folders--list").addClass("folders");
    $(this).attr('disabled', true);
    $("#folders__display--list").removeAttr('disabled');
});

////////////////////////////
//
// Search Focus
