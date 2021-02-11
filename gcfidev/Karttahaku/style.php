/*
=================================================================================
LALLALLAA, hah hah haa, tulit tänne selvästi vakoilemaan :D
Juu, aivan kamalaa tyylimäärittelyä, mä en osaa... räpellän siis :)
=================================================================================
*/




body {
  text-align: center; /* keskittää kaiken sisällön, tämä siksi ettei IE osaa oikeanlaista keskitystä */
  font-family: Verdana, Arial, Helvetica, sans-serif;
  font-size: 11px;
}

table {
  font-family: Verdana, Arial, Helvetica, sans-serif;
  font-size: 11px;
  text-align: left; /* poistetaan taulukon sisällön keskitys */
  font-size: 11px;
 border: 0px;
 padding: 0px;
  border-collapse:collapse;
}

th {
  background-color:#c3dde0;
}

table.header {
 margin: auto;
}

.border th{
 border: 1px solid #99AEB0;
}

.border tr{
 border: 1px solid #99AEB0;
}

.border td{
 border: 1px solid #99AEB0;
}

.noborder th{
 border: 0px;
}

.noborder tr{
 border: 0px;
}

.noborder td{
 border: 0px;
}

.runkoborder{
 border: 1px solid #99AEB0;
 }

.left{
  text-align:left;
 }

.center{
  text-align:center;
 }


.right{
  text-align:right;
 }

.top{
  vertical-align: top;
 }

.middle{
  vertical-align: middle;
 }

.bottom{
  vertical-align: bottom;
 }


.fullwidth{
 width:100%;
 }

.colorth{
  background-color:#c3dde0;
 }

.colorthl{
  background-color:#DAE7E9;
 }



.pun_yvtext
{
  font-family: Verdana, Arial, Helvetica, sans-serif;
  font-size: 100%;
 color: red;
  text-decoration: line-through;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
}



  /* Omakartan pikahaun nimivaihtopainike */
.minimalbutton {
  border-width: 1px;
 margin: 0px;
 padding: 0px;
  font-family: Verdana,Arial, Helvetica, sans-serif;
  font-size: 9px;
 width: 30px;
 }

/*
// =================================================================================
// CACHETIETO.PHP
*/


.r1{
 width:140px; 
 background: #FFD0D0;
 vertical-align: top;
 }

.r2{
 width:140px; 
 background: #F0F9FA;
 vertical-align: top;
 }


.z1{
 width:18px; 
 vertical-align: middle;
 }

.z2{
 width:10px; 
 align: right;
 }

.lgtxt
{
 border: 1px solid #c3dde0;
 display: block;
 background: #FFFFFF;
}


.lgtxttbl{
 width:100%;
 }

.lgtxttbl tr:hover {
 background: #BFFFBF;
 }


/*
// =================================================================================
// YLEISTÄ
*/

/* Esitä virheilmoitus (hommassa tuli ERROR) */
.virhe{
  min-height:22px;
  text-align:left;
  font-weight: normal; 
 padding: 3px;
 margin: 3px;
 background:#FFFF00;
 color: #000000;
  border: 2px dotted red;
 }

/* Esitä huomautus */
.huom{
  min-height:22px;
  text-align:left;
  font-weight: normal; 
 padding: 3px;
 margin: 3px;
 background:#FFFFCC;
 color: #000000;
  border: 2px dotted green;
 }

/* Esitä infotieto (homma meni OK) */
.info{
  min-height:22px;
  text-align:left;
  font-weight: normal; 
 padding: 3px;
 margin: 3px;
 background:#B0FFB0;
 color: #006000;
  border: 2px dotted green;
 }

/* Ei tulosteta -määritys */
@media print {
  .noprint { display: none; }
}


  /* Ukkostutkan submit */
.ukkossubmit {
  font-size: 12px;
  border-width: 1px;
 margin: 0px;
 padding: 1px;
  font-family: Verdana, Arial, Helvetica, sans-serif;
  font-size: 11px;
 width: 50px;
 }


.tuulivoima{
 padding: 1px; 
text-align:center; 
align:center; 
width:14px;
 }


/* käyttäjät -haun tulosruutu (esim. lokiseuranta) */
.kayttajat {
 border: 1px solid #99AEB0;
  background-color: #FFF;
    font-size: 9px;
  border: 1px solid #000000;
    font-family: Verdana, Arial, Helvetica, sans-serif;
 }

/* vasemman laidan valikon hover-valikkoa jäljittelevät valintakentät */
.navi_link {
  text-decoration:none;
  line-height: 16px;
 }

.navi_link2 {
  text-decoration:none;
  line-height: 16px;
  display:block;
}

.nowrap{
  white-space:nowrap;
 }

/* Kartan infowindow */
.infowindow{
width:290px;
min-height:80px;
}

/* Piilokentät yms. */
.piilo{
 display:none;
 visibility:hidden;
 }

  /* wanha input-kenttien määrittely tyyli1 (vielä käytössä) */
.kentta {
  background-color: #FFF;
  font-size: 12px;
  border-width: 1px;
  border-style : inset;
  font-family: Verdana, Arial, Helvetica, sans-serif;
 }

/* wanha input-kenttien määrittely tyyli2 (vielä käytössä) */
.kentta2 {
  background-color: #FFF;
  font-size: 12px;
  border-width: 1px;
  font-family: Verdana, Arial, Helvetica, sans-serif;
  }



/*
 // ---------------------------------------------------------------------------------
 // PREMIUM PRINT -OSUUS Begin
 // ---------------------------------------------------------------------------------
 */

.printhint{
 width:15px;
  font-size:10px;
  font-weight: normal;
  text-align:center;
 }



/* taulukko */
.premium_print {
 border: 1px solid #99AEB0;
 width: 100%;
 margin-bottom: 1em;
 }
.vas {
  border-left: 1px solid #99AEB0;
 }
.oik {
  border-right: 1px solid #99AEB0;
 }
.yla {
  border-top: 1px solid #99AEB0;
 }
.ala {
  border-bottom: 1px solid #99AEB0;
 }



  
td.attribuutit img {
 width: 20px;
 height: 20px;
 border: 0px;
 margin: 1px;
}



/*
// ---------------------------------------------------------------------------------
// PREMIUM PRINT -OSUUS end
// ---------------------------------------------------------------------------------
*/


.googleth {
  background-color:#DAE7E9;
  font-weight:bold;
  font-size: 11px;
  font-family: Verdana, Arial, Helvetica, sans-serif;
 }
.googletd1 {
  background-color: #FFFFFF;
  font-size: 11px;
  font-family: Verdana, Arial, Helvetica, sans-serif;
 }
.googletd2 {
  background-color: #F0F9FA;
  font-size: 11px;
  font-family: Verdana, Arial, Helvetica, sans-serif;
 }
.googlehover {
  background-color: #BFFFBF;
  font-size: 11px;
  font-family: Verdana, Arial, Helvetica, sans-serif;
 }
.googleborder{

 }


/*
// ---------------------------------------------------------------------------------
// KIVENALLA verkkokauppaosuus
// ---------------------------------------------------------------------------------
*/

.heading_normaltext {
  font-weight:bold;
  font-size: 16px;
  font-family: Verdana, Arial, Helvetica, sans-serif;

}


/* Esitä infotieto (homma meni OK) */
.kivivali{
  text-align:left;
  font-weight: normal; 
 padding: 0px;
 margin: 0px;
 background:#B0FFB0;
 color: #006000;
  width: 100%;
 }


.bighead_gc {
  font-weight: normal;
  font-size: 14px;
  font-family: Verdana, Arial, Helvetica, sans-serif;

}


ul.garmin { 
border-bottom: 0px solid #000000; 
font-family: Verdana, Arial, Helvetica, sans-serif; 
font-size: 100%; 
color: #000000; 
margin-left: 0px; 
margin-right: 0px; 
margin-top: 0px; 
margin-bottom: 0px; 
list-style-image: url('/putiikki/images/li2.gif');
}