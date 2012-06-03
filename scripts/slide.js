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
 function Slide(name, text, imgsrc, attribs){
    this.baseData = new Array()
    this.baseData.Name = name
    this.baseData.text = text
    this.baseData.imgSrc = imgsrc
    this.baseData.attribs = new Array()
    this.baseData.attribs = attribs 
    this.HTML = new CoffeeFrame(this.baseData)
    INDEX[INDEX.length] = INDEX.length
    return this

  }