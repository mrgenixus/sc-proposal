/*
 *  Copyright © 2004 Benjamin West & Dave Loftis
 *  All Rights Reserved (and not transfered to 
 *  the SCO Group under any circumstances EVER).
 *
 *  You do not have any rights whatsoever to use
 *  the code inside this file for any purpose
 *  other than to view the finished product
 *  created by the copyright holders.
 *
 *  If you have read this notice and ever plan to
 *  write any JavaScript, it is likely that you
 *  will be infringing, so close the file now.
 *
 *  In all seriousness.  We wrote this, and we
 *  expect you to honor our copyright notice.
 *
 *  Thanks.
 */
  //Objects
  function CoffeeFrame(BaseData) {

    this.container				= document.createElement('DIV')
    this.container.className	= 'container'
	notHTML		=  "<table align=\"center\" >"
	notHTML		+= "  <tr>"
	notHTML		+= "    <td class=\"leftpane rightmargin\" width=\"180\">"
	notHTML		+= "        <DIV class=\"name\">" + BaseData.Name + "</DIV>"
	notHTML		+= "        <DIV class=\"text\">" + BaseData.text + "</DIV>"
	notHTML		+= "    </td>"
	notHTML		+= "    <td class=\"centerpane\" align=\"center\" >"
	notHTML		+= "      <img src=\"" + BaseData.imgSrc + "\" class=\"image\">"
	notHTML		+= "    </td>"
    notHTML		+= "    <td class=\"rightpane\" >"
	notHTML		+= "      <table border=\"0\" "
	notHTML		+= "             cellspacing=\"0\" cellpadding=\"0\">"
	for (var i = 0; i < BaseData.attribs.length; i++){
	  notHTML	+= "        <tr >"
	  notHTML  	+= "          <td class=\"attrib\" onclick=\"chSortField(" + i + ")\" valign=\"center\">"
	  notHTML	+=              ATTRIBUTE_NAMES[i]
      notHTML  	+= "            <img src=\""+ BASE_IMAGE_NAME + BaseData.attribs[i] + ".gif\""
      notHTML   += "                 alt=\"\" class=\"attribimg\""
	  notHTML	+= "                 height=\"15\" width=\"180\" border=\"0\">"
	  notHTML	+= "          </td>"
	  notHTML	+= "        </tr>"
    }
	notHTML		+= "      </table>"
	notHTML		+= "    </td>"
	notHTML		+= "  </tr>"
	notHTML		+= "</table>"
   this.container.innerHTML = notHTML
	a = document.getElementById("slideShowAnchor")
    a.appendChild(this.container)
	
    return this
  }
