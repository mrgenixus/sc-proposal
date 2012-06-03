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
  //database
    function sort(byField, dir) {
	  //bubblesort (ascending values)
	  for ( var i = 0; i < INDEX.length - 1; i++) {
	    for (var j = (i + 1) ; j < INDEX.length ; j++ ) {
		  if (dir == "a" || dir == "A") {
		    if (slides[INDEX[i]].baseData.attribs[byField] > slides[INDEX[j]].baseData.attribs[byField] ) {
		      temp = INDEX[i]
			  INDEX[i] = INDEX[j]
			  INDEX[j] = temp
			}

		  }
		}
	  }
	  //binary tree
	  /*
	  */
	}
	
	function chSortField(newField) {
	  currentSlide = slides[INDEX[CUR_INDEX]]
	  currentButton = document.getElementById("bar" + CUR_INDEX)
	  currentButton.src = NOTSELECTED
	  sort(newField, SORT_DIR)
	  for ( var i = 0; i < INDEX.length; i++ ){
	    if (currentSlide == slides[INDEX[i]]) {
		  CUR_INDEX = i;
		  currentButton = document.getElementById("bar" + CUR_INDEX)
		  currentButton.src = SELECTED
		}
	  }
	  label = document.getElementById("CurSortedAttribute")
	  stock1 = "Organized by increasing: "
	  label.innerHTML = stock1 + ATTRIBUTE_NAMES[newField]
	  
	}