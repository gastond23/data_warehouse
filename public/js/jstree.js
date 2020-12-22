let espacio = " ";

$('#jstree').jstree({
    "core": {
        "themes": {
            "variant": "large"
        }
    },
    "checkbox": {
        "keep_selected_style": true
    }
});

$(function () {

    $('#jstree').jstree();

    $('#jstree').on("changed.jstree", function (e, data) {
        let searchId = data.selected[0].split(" ");
        console.log(searchId);
    });


    $('button').on('click', function () {
        $('#jstree').jstree(true).select_node('child_node_1');
        $('#jstree').jstree('select_node', 'child_node_1');
        $.jstree.reference('#jstree').select_node('child_node_1');
    });
});
