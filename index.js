//Assignment 1
function InstagramPost(authorHandle, content, imageUrl, views, likes) {
    this.authorHandle = authorHandle;
    this.content = content;
    this.imageUrl = imageUrl;
    this.views = views;
    this.likes = likes;
  }
  console.log(InstagramPost);

  // OUTPUT: [Function: InstagramPost]

  // Assignment 2
const post1 = new InstagramPost('TobiSamuel', 'Check out this picture of mine!', 'https://Thobbie.com/newlook.jpg', 1000, 680);
const post2 = new InstagramPost('Psalmuel_tizzy', 'Throwback to my trip to Canada', 'https://Thobbie.com/canada.jpg', 5000, 3743);

console.log(post1);
console.log(post2);

/** OUTPUT: InstagramPost{
    content: 'Check out this picture of mine',
    imageURL: https://Thobbie.com/newlook.jpg',
    views: 1000,
    likes: 680,
}
InstagramPost{
    content: 'Throwback to my trip to Canada',
    imageURL: https://Thobbie.com/canada.jpg',
    views: 5000,
    likes: 3743,
}*/

// Assignment 3
const student = {
    firstName: 'Musa',
    lastName: 'Dawodu',
    age: 19,
    location: 'Lekki',
    jambScores: {
        ENG: 70,
        GOV: 85,
        LIT: 82,
        CRK: 94,
    }
}

function createPerson(name, age, location) {
    return{
        name: name,
        age: age,
        location: location,
    }
}

const musa = createPerson("Musa Dawodu", 19, "Lekki");
console.log(musa);
                       
// OUTPUT: { name: 'Musa Dawodu', age: 19, location: 'Lekki' }

function createJambScores(ENG, GOV, LIT, CRK) {
    return {
        ENG: ENG,
        GOV: GOV,
        LIT: LIT,
        CRK: CRK,
    }
}

const musaJambScores = createJambScores(70, 85, 82, 94);
console.log(musaJambScores);

// Output: { ENG: 70, GOV: 85, LIT: 82, CRK: 94 }

musa.jambScores = musaJambScores;
console.log(musa);

/** OUTPUT: { name: 'Musa Dawodu', age: 19, location: 'Lekki,
jambScores: { ENG: 70, GOV: 85, LIT: 82, CRK: 94 } 
}*/

// Assignment 4
// A - Using Object.assign()
const firstLove = {
    name: "Oluchi",
    religion: "Christian",
    state: "Imo",
    yearStarted: 2013,
    yearEnded: 2013,
  };

  console.log(firstLove);
  // OUTPUT: 
  /**name: "Oluchi",
    religion: "Christian",
    state: "Imo",
    yearStarted: 2013,
    yearEnded: 2013,*/

const secondLove = Object.assign({}, firstLove);
secondLove.name = "Francisca";
secondLove.religion = "Christian";
secondLove.state = "Delta"
secondLove.yearStarted = 2013;
secondLove.yearEnded = 2014;

console.log(secondLove);
// OUTPUT: 
  /**name: "Francisca",
    religion: "Christian",
    state: "Delta",
    yearStarted: 2013,
    yearEnded: 2014,*/

// B - Using spread syntax i.e, ...
const thirdLove = { ...firstLove };
thirdLove.name = "Opeyemi";
thirdLove.religion = "Muslim";
thirdLove.state = "Oyo";
thirdLove.yearStarted = 2017;
thirdLove.yearEnded = 2018;

console.log({ thirdLove });
// OUTPUT: 
  /** thirdlove: { 
    name: "Opeyemi",
    religion: "Muslim",
    state: "Oyo",
    yearStarted: 2017,
    yearEnded: 2018,*/

// C - Using the method JSON.parse(JSON.stringify())
const fourthLove = JSON.parse;
fourthLove.name = "Olamide";
fourthLove.religion = "Christian";
fourthLove.state = "Osun";
fourthLove.yearStarted = 2022;
fourthLove.yearEnded = 'present';

console.log({ fourthLove });
/** OUTPUT
    fourthLove: [Function: parse]{ 
    name: "Olamide",
    religion: "Christian",
    state: "Osun",
    yearStarted: 2022,
    yearEnded: "present",*/

    // Assignment 5
const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
  };
  
  for (const party in presidentialCandidates) {
    const candidate = presidentialCandidates[party];
    console.log(`${candidate} is the presidential candidate of ${party}`);
  }
  // OUTPUT
/** Omoyele Sowore is the presidential candidate of AAC
Christopher Imumolen is the presidential candidate of ACCORD
Bola Ahmed Tinubu is the presidential candidate of APC
Peter Obi is the presidential candidate of LP
Rabiu Kwankwaso is the presidential candidate of NNPP
Atiku Abubakar is the presidential candidate of PDP*/ 
