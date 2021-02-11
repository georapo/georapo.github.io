
alkuvari = new Array();

function changeBg(tr) {
  var children = tr.childNodes;
  tmpArray = new Array();
  for (var i=0;i < children.length; i++) {
    tmpArray[i] = tr.children[i].bgColor;
    tr.children[i].bgColor='#BFFFBF';
  }
  alkuvari[tr.rowIndex] = tmpArray;
}

function resetBg(tr) {
  tmpArray = alkuvari[tr.rowIndex];
  var children = tr.childNodes;
  for (var i=0;i < children.length; i++) {
    tr.children[i].bgColor=tmpArray[i];
  }
}



function kuvavaihto(kuvanro,attrnro,kuvaa,kuvab) {
var apu  = document.getElementById(kuvanro).getAttribute("src");
  if (apu == kuvaa){
    document.getElementById(kuvanro).setAttribute("src",kuvab);
    document.getElementById(attrnro).setAttribute("value","2");
  }
  else {
    document.getElementById(kuvanro).setAttribute("src",kuvaa);
    document.getElementById(attrnro).setAttribute("value","1");
  }
}


function koti(homelat,homelon) {
  lomake.lat.value=homelat;
  lomake.lon.value=homelon;
}

function copykoti() {
  document.getElementById('lat').value=document.getElementById('clicklat').value;
  document.getElementById('lon').value=document.getElementById('clicklon').value;
  document.getElementById('clicklat').style.color='#CCCCCC';
  document.getElementById('clicklon').style.color='#CCCCCC';
}




function onMouseOver(tr, evenRow) {
  oldRowClassName = tr.className;
  oldRow = tr;
  tr.className = "overrivi";
}

function onMouseOut(tr) {
  if(oldRow != null) {
    oldRow.className = oldRowClassName;
    oldRow = null;
  }
}



function oMV(tr, evenRow) {
  oldRowClassName = tr.className;
  oldRow = tr;
  tr.className = "overrivi";
}

function oMT(tr) {
  if(oldRow != null) {
    oldRow.className = oldRowClassName;
    oldRow = null;
  }
}



function ShowLog(what,topic){
  window.open (what, '_blank');
}



  function ikkuna(what) {
  open (what, "_new", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0,width=700,height=600");
}



function gpssending(what) {
  open (what, "_new", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0,width=500,height=350");
}

