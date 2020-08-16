/* ************************************
	Author:			Ben Holladay
	AuthorEmail:	bwholladay@gmail.com
	Ward:			Morrisville Ward, Apex North Carolina Stake
	Date:			2018-May
 * ************************************/
	function NavigateTo(choice)	{
		var strUrl = "";

		switch (choice) {
			case "OTS":
			case "OTH":
			case "OTD":
			case "OTM":
			case "OTP":
			case "OTK":
				strUrl = "./scripture.htm?OT";
				break;
			case "NTS":
			case "NTH":
			case "NTD":
			case "NTM":
			case "NTP":
			case "NTK":
				strUrl = "./scripture.htm?NT";
				break;
			case "BMS":
			case "BMH":
			case "BMD":
			case "BMM":
			case "BMP":
			case "BMK":
				strUrl = "./scripture.htm?BM";
				break;
			case "CHS":
			case "CHH":
			case "CHD":
			case "CHM":
			case "CHP":
			case "CHK":
				strUrl = "./scripture.htm?CH";
				break;
			default:
				location.href = "../default.htm";
				return;
				break;
		} // switch
		strUrl += choice.substring(choice.length - 1);

		location.href = strUrl;
	} // NavigateTo
