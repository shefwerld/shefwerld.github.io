/* FOR ANYONE PLAYING ALONG AT HOME */
/* JS number | Human number | Name | */
/* 0  |  1  | Shef Kerbi | */
/* 1  |  2  | Mr MemeoftheWeek | */
/* 2  |  3  | Tom Nook | */
/* 3  |  4  | Kawsaki | */
/* 4  |  5  | Blayyd Nite | */
/* 5  |  6  | Jerry Springer | */
/* 6  |  7  | Mexican Ghost Dad | */
/* 7  |  8  | Cynthia | */
/* 8  |  9  | TSM_Liquid_FaZe_Ninja | */
/* 9  |  10  | Snivy | */
/* 10 |  11  | Apple the Cat | */
/* 11 |  12  | Reali | */
/* 12 |  13  | Bon Starbuckle | */
/* 13 |  14  | John Gameman | */
/* 14 |  15  | Carmes | */
/* 15 |  16  | Bon's Cat | */
/* 16 |  17  | Gernfald | */
/* 17 |  18  | Keynsun DDDO | */
/* 18 |  19  | CrazeePi's Disembodied Voice | */
/* 19 |  20  | Zeke Teddy | */
/* 20 |  21  | Tom Nook Kids | */
/* 21 |  22  | Wingull | */
/* 22 |  23  | Ryk | */
/* 23 |  24  | Diet Water Retailer | */
/* 24 |  25  | Scratch Cat | */
/* 25 |  26  | Isabelle | */
/* 26 |  27  | Gardevoir | */
/* 27 |  28  | The SKA Hypebeast | */
/* 28 |  29  | Metar Nite | */

var characternames = ["Shef Kerbi", "Mr MemeoftheWeek", "Tom Nook", "Kawsaki", "Blayyd Nite", "Jerry Springer", "MGD Taco Head Guy", "Cynthia", "TSM_Liquid_FaZe_Ninja", "Snivy", "Apple the Cat", "Reali", "Bon Starbuckle", "John Gameman", "Carmes", "Bon's Cat", "Gernfald", "Keynsun DDDO", "CrazeePi's Disembodied Voice", "Zeke Teddy", "Tom Nook's Kids", "Wingull", "Ryk", "Diet Water Retailer", "Scratch Cat", "Isabelle", "Gardevoir", "The SKA Hypebeast", "Metar Nite", ""];
var characterexecutive = [];
var characterdescription = ["The CEO of Shef Werld and owner of the CatsUnited account since September 2018. Is doing very epicly and keeps Shef Werld running. The servers for this website actually live in Shef Kerbi's basement and definetly not from Github",
"CEO of Meme of the Week, as part of Shef Werld's Media Department. Meme of the Week was the first video series on the internet to review subreddits - any Reddit channel you see on Youtube copied from Meme of the Week.",
"Vice President of SKA and Executive Financial Manager of Shef Werld. His expert techniques of making bells is the only reason we aren't bankrupt.",
"The OG Enemy of Kerbi, now currently working with Shefmart. Originally worked at The Shef Chop before that shop was abandoned.",
"CEO of Shefmart. Shefmart is a nice humble establishment that sells regular goods for a low price, with Shef Kerbi's Apparel going on the contrary.",
"King of Trash TV. Currently trying to strike a deal with Dreem Lend TV to regularly broadcast new episodes of Springer, though apparently a bunch of people arguing about who cheated on who is 'distasteful'.",
"#BringBackMexicanGhostDad",
"Has connections to Shef Werld, mainly SKA and *insert secret organisation here*.",
"The best and only player on Shef Werld's E-Sports team: TSMLFZ. Is currently the best player of Fortnite because literally everyone else quit to play Minecraft lol",
"Makes sure Shef Werld servers aren't down 75% of the time I think or something. May have something to do with Shef Kerbi Game Studios as well. N is nice.",
"Former Website Maintainer and Host, News Reporter for Shef Kerbi News Network. Writes the highest rated comic in Dreem Lend, called Candy Sadness.",
"Reali was one of the first people to join SKNN as a news reporter and advertiser. Very nice",
"Went missing a little while ago, but is still one of the most loved indiviuals in Shef Werld because that was one nice green bowler hat.",
"this is john gameman porfessonal game and man man and john gamean is sport man and porfessonal sport game man and write good article about game and how good game is game man but no scarys pls ah or dreem lend game team will not play good man",
"Shef Kerbi News Network Reporter, Comic Writer and Advertiser. Creator of the famous Pig Soop™® (Patent Pending)",
"Bon Starbuckle's Cat. A very philoshopical figure in the Shef Werld community.",
"bon's cat if it was gray",
"One of the most (in)famous figures in the Shef Werld community, SKNN News Reporter, Comic Writer and *Advertiser* has brought to the world an incredible invention known as 'Dirty Clock Cleaning', which can be done for $19.99 plus $5 if you call right now. Also invented ghosts.",
"SKNN News Reporter. Most well known for bringing the unholy invention known as 'The New News Generation Machien' into the world",
"Weather man. Provides very good weather definetly doesn't say (0 < x < 15). Also we use signed integers.",
"Tom Nook's Kids - Help work for SKA. Are currently being subject to the Hypebeast culture that somehow grew within the SKA community between Collection 3 and now.",
"Brings the goods. Helped develop methods of delivering goods to SKA easier and worked with The Shef Chop before TSC was abandoned.",
"Joined Meme of the Week after a meeting in February 2019 which was leaked into the public and uploaded onto the official Meme of the Week channel.",
"ＢＵＹ ＤＩＥＴ ＷＡＴＥＲ",
"The mascot of MIT Media Lab's Scratch, who our team ~~ kidnapped ~~ borrowed for use in Meme of the Week.",
"Former employee of Shef Kerbi's Apparel, however retired after creating Collection 3 to work on other projects and to help on Shefmart",
"Currently working for Shefmart after leaving Shef Kerbi Apparel after Season 3. 'Quality Control'",
"Current President of Shef Kerbi's Apparel. It was created around August 2019 when some dude threw a Supreme brick into a DNA printer. Convinced Tom Nook that it would bring SKA into the right direction and honestly I don't know",
"Blayyd Nite's dad. He is proud of his son for creating Blayyd Nite and co Mart but is concerned about Shefmart under the hands of Shef Werld. It's fine though.",
"Hover over an employee to view information on them"];