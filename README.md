# Requirements
- go is installed ("go version" should display the version)
- node js is installed
# Convert tabs from Ultimate Guitar into ChordPro format and import the resulting tabs into Bandhelper (inspired by Bing using GPT4 ;-)) 
1. Open https://www.ultimate-guitar.com/user/mytabs or any other website on Ultimate Guitar containing your favorites tabs
2. Mouse Rightclick -> Inspect -> Console -> Enter the following code:
// Create a variable for the links 
let links = document.querySelectorAll("a[href^='https://tabs.ultimate-guitar.com/tab/']");

// A loop that iterates over the links 
for (let link of links) {
  // Get the URL of the link as a string 
  let url = link.href;
  // Find the number at the end of the URL with a regular expression 
  let nummer = url.match(/\d+$/)[0];
  // Output the number in the console 
  console.log(nummer);
}
3. Copy the resulting numbers like "VM108:11 1689257" into ASCII File
4. Extract the interesting numbers in second column with 
awk '{print $2 }' all.txt > numbers.txt
5. Run ./Ultimate2Chord.sh script 
(this script does the following: 
- scraping tab from Ultimate Guitar into ASCII File
- convert tab format into ChrodPro format
- deleting unneccessary characters like "-----" 
- create zip of all tabs
6. Import the zip file into Bandhelper:
- Log into the website and go to the Repertoire > Documents or Repertoire > Recordings page.
- Click the Batch Import form at the top of the page, select your zip file and check the Add New Songs option.
- Click Submit. This will upload all the files, which could take several minutes depending on your Internet connection.  

7. Done!
#### Technology Used

- https://github.com/Pilfer/ultimate-guitar-scraper (A Scraper for Ultimate Guitar tabs written in Go)
- https://github.com/martijnversluis/ChordSheetJS (A JavaScript library for parsing and formatting chord sheets)


## Disclaimer / Legal  

This software's purpose is purely educational. I am not responsible for how you use this package. This repository and all others associated with it are not affiliated with, authorized, or endorsed by Ultimate-Guitar.com. 

