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
		var n, w;
	    n = INDEX.length
		w = (530 / n) - 2  
        if ( w > 10 ) {
		  w = 10;
		}

	    document.open()
		document.writeln("<Div id=\"CurSortedAttribute\"> Loaded </div>")
		document.writeln("<img src=\"" + PREV_IMG_SRC + "\" onclick=\"prevFrame()\">")
		for ( var n=0; n < INDEX.length; n++) {
          if (n == 0) {
            document.writeln('<img id = "bar' + n + '"src = "'+ SELECTED +'" width=' + w + ' height="24" onclick="chCurrentFrameTo(' + n + ')">')
			chCurrentFrameTo(n)
          }
          else {
		    document.writeln('<img id = "bar' + n + '"src = "' + NOTSELECTED + '" width=' + w + ' height="24" onclick="chCurrentFrameTo(' + n + ')" >')
		  }
        }
		document.writeln("<img src=\"" + NEXT_IMG_SRC + "\" onclick=\"nextFrame()\">")
		document.close()
		chSortField(0)
