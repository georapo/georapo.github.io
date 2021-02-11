
#nav, #nav ul { /* all lists */
padding: 0;
margin: 0;
list-style: none;
float : left;
width : 11em;
z-index:2;
}

#nav li { /* all list items */
position : relative;
float : left;
line-height : 1.25em;
margin-bottom : -1px;
width: 11em;
z-index:2;
}

#nav li ul { /* second-level lists */
position : absolute;
left: -999em;
margin-left : 130px;
margin-top : -42px;
z-index:2;

}

#nav li ul ul { /* third-and-above-level lists */
left: -999em;
z-index:2;
font-size: 11px;
}

#nav li a {
width: 130px;
#display : block;
color : black;
font-weight : none;
text-decoration : none;
background-color : #FFFFFF;
border : 1px black;
padding : 0px;
line-height:18px;
z-index:2;
font-size: 11px;
}

#nav li a:hover {
color : white;
background-color : black;
z-index:2;
}

#nav li:hover ul ul, #nav li:hover ul ul ul, #nav li.sfhover ul ul, #nav li.sfhover ul ul ul {
left: -999em;
z-index:2;
}

#nav li:hover ul, #nav li li:hover ul, #nav li li li:hover ul, #nav li.sfhover ul, #nav li li.sfhover ul, #nav li li li.sfhover ul { /* lists nested under hovered list items */
left: auto;
z-index:2;
}
