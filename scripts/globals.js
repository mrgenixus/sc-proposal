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
//Setup
  var DEBUG = 1
  //Index-Related Globals
  var INDEX = new Array()
  var CUR_INDEX = 0
  //Sort-Related Globals
  var SORT_DIR = "a"
  var CUR_SORTED_ATTRIBUTE = 0
  //Dimensions and unknowns
  var COFFEE_IMAGE_WIDTH = 40			//Big Image Width
  var COFFEE_IMAGE_HEIGHT = 70			//Big Image Height
  var ATTRIBUTE_NAMES = new Array()		//see below
  /* put PHP code here to handle inputting arrtibute Names
  (i.e.
    ATTRIBUTE_NAMES[0]="Depth of Roast"
  )
  */
    ATTRIBUTE_NAMES[0]="ACIDITY"
	ATTRIBUTE_NAMES[1]="BITTERNESS"
    ATTRIBUTE_NAMES[2]="ORGANICS"
	ATTRIBUTE_NAMES[3]="ROAST"
	ATTRIBUTE_NAMES[4]="COMPLEXITY"

  var NOTSELECTED = "img/button.gif"		//source of unselected index button
  var SELECTED = "img/button_selected.gif"	//source of selected index button

  var BASE_IMAGE_NAME/*(for attributes)*/ = "img/slide-"  
  var IMAGE_EXT = ".gif"
  var NEXT_IMG_SRC = "img/next.gif"					//Next button src
  var PREV_IMG_SRC = "img/prev.gif"					//Previous button src
