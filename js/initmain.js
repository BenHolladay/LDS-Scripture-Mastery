/* ************************************
	Author:			Ben Holladay
	AuthorEmail:	bwholladay@gmail.com
	Ward:			Morrisville Ward, Apex North Carolina Stake
	Date:			2018-May
 * ************************************/
	var numOfScripts = 8;				// the number of scriptures
	var S = new Array(numOfScripts);	// array of scripture mastery scriptures with details
	var scriptNum = 0;					// the randomly picked number

	function scripture(ref, text)
	{
		this.ref = ref;		// the scripture reference
		this.text = text;		// the scripture text
	}

	S[0]  = new scripture("Mosiah 5:7-8",
		"And now, because of the covenant which ye have made ye shall be called the children of Christ, his sons, and his daughters; for behold, this day he hath spiritually begotten you; for ye say that your hearts are changed through faith on his name; therefore, ye are born of him and have become his sons and his daughters. And under this head ye are made free, and there is no other head whereby ye can be made free. There is no other name given whereby salvation cometh; therefore, I would that ye should take upon you the name of Christ, all you that have entered into the covenant with God that ye should be obedient unto the end of your lives.");
	S[1]  = new scripture("Helaman 5:12",
		"And now, my sons, remember, remember that it is upon the rock of our Redeemer, who is Christ, the Son of God, that ye must build your foundation; that when the devil shall send forth his mighty winds, yea, his shafts in the whirlwinds, yea, when all his hail and his mighty storm shall beat upon you, it shall have no power over you to drag you down to the gulf of misery and endless wo, because of the rock upon which ye are built, which is a sure foundation, a foundation whereon if men build they cannot fall.");
	S[2]  = new scripture("2 Nephi 25:26",
		"And we talk of Christ, we rejoice in Christ, we preach of Christ, we prophecy of Christ, and we write according to our prophecies, that our children may know to what source they may look for a remission of their sins.");
	S[3]  = new scripture("2 Nephi 32:3",
		"Angels speak by the power of the Holy Ghost; wherefore, they speak the words of Christ. Wherefore, I said unto you, feast upon the words of Christ; for behold, the words of Christ will tell you all things what ye should do.");
	S[4]  = new scripture("Mosiah 3:7-8",
		"And lo, he shall suffer temptations, and pain of body, hunger, thirst, and fatigue, even more than man can suffer, except it be unto death; for behold, blood cometh from every pore, so great shall be his anguish for the wickedness and the abominations of his people. And he shall be called Jesus Christ, the Son of God, the Father of heaven and earth, the Creator of all things from the beginning; and his mother shall be called Mary. And lo, he cometh unto his own, that salvation might come unto the children of men even through faith on his name...");
	S[5]  = new scripture("3 Nephi 9:14-15",
		"Yea, verily I say unto you, if ye will come unto me ye shall have eternal life. Behold, mine arm of mercy is extended towards you, and whosoever will come, him will I receive; and blessed are those who come unto me. Behold, I am Jesus Christ the Son of God. I created the heavens and the earth, and all things that in them are. I was with the Father from the beginning. I am in the Father, and the Father in me; and in me hath the Father glorified his name.");
	S[6] = new scripture("Moroni 10:32",
		"Yea, come unto Christ, and be perfected in him, and deny yourselves of all ungodliness; and if ye shall deny yourselves of all ungodliness, and love God with all your might, mind and strength, then is his grace sufficient for you, that by his grace ye may be perfect in Christ...");
	S[7] = new scripture("Alma 36:17-20",
		"And it came to pass that as I was thus racked with torment, while I was harrowed up by the memory of my many sins, behold, I remembered also to have heard my father prophesy unto the people concerning the coming of one Jesus Christ, a Son of God, to atone for the sins of the world. Now as my mind caught hold upon this thought, I cried within my heart: O Jesus, thou Son of God, have mercy on me, who am in the gall of bitterness, and am encircled about by everlasting chains of death. And now, behold when I thought this, I could remember my pains no more; yea, I was harrowed up by the memory of my sins no more. And oh, what joy, and what marvelous light I did behold; yea, my soul was filled with joy as exceeding as was my pain!");

	function showScripture()
	{
		scriptNum = Math.floor(Math.random() * numOfScripts);
		document.write("<font size='14pt'><i>" + S[scriptNum].text + "</i><br /><img SRC='img/spacer.gif' width='300' height='1' border='0' />-- " + S[scriptNum].ref) + "</font>";
	}
