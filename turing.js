ace.require("ace/ext/language_tools");
var editor = ace.edit("Teditor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/javascript");
editor.renderer.setScrollMargin(0, 100, 0, 0);
editor.setOptions({
    fontSize: 13,
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion:   true,
    //printMargin: 140 to be used when we get the minimap view
    printMargin: false
    
});
var toggle = true;
$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        
        if (toggle) {            
            $('#Teditor').css("left","250px");
            $('.moving-btn').css("left","250px");
        }
        else{
            $('#Teditor').css("left","0");
            $('.moving-btn').css("left","0");
        }
        toggle = !toggle;
        
    });

});