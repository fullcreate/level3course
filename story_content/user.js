window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  var player = GetPlayer();
var fullScore = player.GetVar("FullScore");
if (fullScore < 0) fullScore = 0;
if (fullScore > 100) fullScore = 100;
var scaledScore = fullScore / 100;
function findAPI(win) {
while (win) {
if (win.API_1484_11) return win.API_1484_11;
if (win.parent == win) break;
win = win.parent;
}
return null;
}
var API = findAPI(window);
if (API) {
API.SetValue("cmi.score.raw", fullScore);
API.SetValue("cmi.score.scaled", scaledScore);
API.SetValue("cmi.score.min", 0);
API.SetValue("cmi.score.max", 100);
API.Commit("");
}
}

};
