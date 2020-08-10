/* ************************************
	Author:			Ben Holladay
	AuthorEmail:	bwholladay@gmail.com
	Date:			2018-May
 * ************************************/
// global variables
var titleHint = "Scripture Text";
var numOfScripts = 25;						// the number of scriptures
var S = [numOfScripts];				// array of scripture mastery scriptures with details
var book = "ot";							// book of scripture
var fieldNum = 1;							// 1=text, 2=setting, 3=doctTeaching, 4=missApp, 5=persApp, 6=keyword
var field = "text";						// ref, text, setting, teaching, missApp, persApp, keywords, displayed

function Scripture(ref, text, setting, teaching, missApp, persApp, keywords, displayed) {
	this.ref = ref;		// the scripture reference
	this.text = text;		// the scripture text
	this.setting = setting; 	// the historical setting
	this.teaching = teaching;	// the doctrinal teaching
	this.missApp = missApp;	// the missionary application
	this.persApp = persApp;	// the personal application
	this.keywords = keywords;	// keywords associated with the scripture
	this.displayed = displayed;	// flag marked when data is displayed
} // scripture

var keyCode = location.search;
var hintType = "S";

// get the book and hint type (fieldNum)
keyCode = keyCode.substring(keyCode.length - 3);
book = keyCode.substring(0, 2);
hintType = keyCode.substring(2);

// verify book is expected value
switch (book) {
	case "NT":
		titleBook = "New Testament";
		initializeNT();
		break;
	case "BM":
		titleBook = "Book of Mormon";
		initializeBM();
		break;
	case "CH":
		titleBook = "Church History";
		initializeCH();
		break;
	default:
		titleBook = "Old Testament";
		initializeOT();
		break;
} // switch

// verify hintType is an expected value
switch (hintType) {
	case "H":
		titleHint = "Historical Setting";
		fieldNum = 2;
		field = "setting";
		break;
	case "D":
		titleHint = "Doctrinal Teaching";
		fieldNum = 3;
		field = "teaching";
		break;
	case "M":
		titleHint = "Missionary Application";
		fieldNum = 4;
		field = "missApp";
		break;
	case "P":
		titleHint = "Personal Application";
		fieldNum = 5;
		field = "persApp";
		break;
	case "K":
		titleHint = "Keyword";
		fieldNum = 6;
		field = "keywords"
		break;
	default:
		titleHint = "Scripture Text";
		fieldNum = 1;
		field = "text";
		break;
} // switch
