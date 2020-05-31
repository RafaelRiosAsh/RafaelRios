ace.require("ace/ext/language_tools");
var editor = ace.edit("Teditor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/javascript");
editor.renderer.setScrollMargin(0, 100, 0, 0);
editor.setOptions({
    fontSize: 13,
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion:   true
    
});