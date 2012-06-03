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
//Navigation Functions
    function chCurrentFrameTo(newIndex) {
	  old = CUR_INDEX
	  CUR_INDEX = newIndex
	  slides[INDEX[old]].HTML.container.style.display = "none"
	  slides[INDEX[old]].HTML.container.style.visibility = "hidden"
      
	  slides[INDEX[newIndex]].HTML.container.style.display = "inline"
  	  slides[INDEX[newIndex]].HTML.container.style.visibility = "visible"
	 
	  selectedOnBar = document.getElementById("bar" + old)
	  selectedOnBar.src = NOTSELECTED
      selectedOnBar = document.getElementById("bar" + newIndex)
	  selectedOnBar.src = SELECTED

	}

	function prevFrame() {
	  if ( CUR_INDEX > 0 ) {
	    chCurrentFrameTo(CUR_INDEX - 1)
	  }
	  return false;
	}

	function nextFrame() {
	  if ( CUR_INDEX  < INDEX.length-1 ) {
	    chCurrentFrameTo(CUR_INDEX + 1)
	  }
	  return false;
	}
