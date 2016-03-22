
function onSuccess(){
    navigator.notification.alert("Successfully launched navigator");
}

function onError(errMsg){
    navigator.notification.alert("Error launching navigator: "+errMsg);
}


function navigate(e){
    e.preventDefault();

    var dest = $('#dest input').val(),
        start = $('#start input').val();

    launchnavigator.navigate(dest, {
        start: start,
        enableDebug: true
    });
    return false;
}

function init() {
    $('#form').submit(navigate);

}
$(document).on("deviceready", init);