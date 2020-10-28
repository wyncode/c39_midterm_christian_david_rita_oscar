import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './CharacterFile.css';

function CharacterFile(props) {
  const [dataFiles, setDataFiles] = useState({
    name: '',

    img: ''
  });
  const [dataQuote, setDataQuote] = useState({});

  const [aboutMessage, setAboutMessage] = useState({});

  let characterAboutArray = [
    {
      charID: 1,
      about:
        "Walter White is an American drug kingpin. A former chemist and high school chemistry teacher who started manufacturing crystal methamphetamine after being diagnosed with terminal lung cancer, in order to pay for his treatments and secure his family's financial future."
    },
    {
      charID: 2,
      about:
        "Jesse Pinkman was a small-time methamphetamine user, manufacturer, and dealer. He was also an inattentive student in Walter White's chemistry class. In his mid-20s, Jesse became Walt's business partner in the meth trade."
    },
    {
      charID: 3,
      about:
        'Skyler White is the widow of Walter White and the sister of Marie Schrader. Skyler cares for Walter very much, but their marriage becomes increasingly strained due to his unexplained absences and bizarre behavior, ultimately leading to their separation.'
    },
    {
      charID: 5,
      about:
        "Walter Hartwell 'Flynn' White Jr. is Walter and Skyler's seventeen year-old son, and the older brother of Holly. He attends J. P. Wynne High School, where his father used to work as a high school chemistry teacher."
    },
    {
      charID: 6,
      about:
        "Marie Schrader is Skyler White's sister, the widow of DEA agent Hank Schrader, and the sister-in-law of Walter White. Marie is close with her sister, though her tendency to pry invariably irritates Skyler."
    },
    {
      charID: 7,
      about:
        "Michael 'Mike' Ehrmantraut was a former corrupt police officer who, after being forced to leave the police department, used his connections in the criminal underworld to eventually become Gustavo Fring's right-hand man."
    },
    {
      charID: 8,
      about:
        "James Morgan 'Jimmy' McGill, better known by his professional alias Saul Goodman, ('Magic Man') is the former principal attorney of Saul Goodman & Associates and the husband of Kim Wexler. He operated out of a cheap strip mall office and ran over-the-top late night TV commercials advising potential clients that they'd 'Better Call Saul' when in trouble with the law."
    },
    {
      charID: 9,
      about:
        "Gustavo 'Gus' Fring was a Chilean-born Albuquerque restaurateur, drug boss, business magnate, and philanthropist. He was the respected proprietor of Los Pollos Hermanos. Gus secretly used his restaurant as a legitimate front for methamphetamine distribution throughout the American southwest."
    },
    {
      charID: 10,
      about:
        'Hector Salamanca was a drug runner and the former right hand man and enforcer of Don Eladio. Hector was a high-ranking member of the Juárez Cartel, the patriarch of the Salamanca family, and was feared among most in the South.'
    },
    {
      charID: 11,
      about:
        'Domingo Gallardo Molina, commonly known by his nickname, Krazy-8, was a meth distributor formerly associated with Jesse Pinkman and Tuco Salamanca. He is also the cousin of Emilio Koyama.'
    },
    {
      charID: 12,
      about:
        "Alberto 'Tuco' Salamanca was a psychotic, high-ranking Mexican drug dealer, who ran the Cartel's meth operation in Albuquerque. He briefly became Walter White and Jesse Pinkman's meth distributor."
    },
    {
      charID: 13,
      about:
        "'The Cousins' were twin brothers and hitmen for the Juárez Cartel, a Mexican drug cartel."
    },
    {
      charID: 14,
      about:
        "Lydia Rodarte-Quayle was the Head of Logistics at Madrigal Electromotive GmbH, and was based at their office in Houston, Texas. She supplied methylamine to Gustavo Fring prior to the collapse of Gus' Drug Empire, and later aligned herself with Walt's Drug Empire and eventually with Jack Welker's Gang."
    },
    {
      charID: 15,
      about:
        "Todd Alquist was a methamphetamine cook and former exterminator for Vamonos Pest, and the nephew of Jack Welker. He worked for Walter White, Mike Ehrmantraut, and Jesse Pinkman in their meth manufacturing business. Todd also operated for his uncle Jack's gang and their ally Lydia Rodarte-Quayle until their deaths at the hands of Walt."
    },
    {
      charID: 16,
      about:
        "Jane Margolis was a tattoo artist and Jesse Pinkman's neighbor, landlord and girlfriend. She was also a recovering drug addict and the daughter of Donald Margolis, an air-traffic controller."
    },
    {
      charID: 17,
      about: "'Skinny' Pete is one of Jesse Pinkman's longtime friends."
    },
    {
      charID: 18,
      about:
        "Brandon Mayhew, commonly referred to as Badger, is one of Jesse Pinkman's longtime friends."
    },
    {
      charID: 19,
      about:
        "Huell Babineaux is Saul Goodman's former personal bodyguard. He provides a variety of services to Saul, including personal protection, intimidation and pick-pocketing."
    },
    {
      charID: 20,
      about:
        "Steven 'Steve' Gomez was Hank Schrader's partner at the Albuquerque DEA office, as well as his close friend. He had a wife named Blanca Gomez. A mellow, by-the-book foil to Hank's over the top, strikeforce flair, Gomez reluctantly developed leads with Hank on the investigations into Heisenberg, Gustavo Fring's empire, and the notorious 'blue sky' meth."
    },
    {
      charID: 21,
      about:
        "Theodore 'Ted' Beneke is the former president and owner of Beneke Fabricators, a company he inherited from his father. He was the former boss and affair partner of Skyler White."
    },
    {
      charID: 22,
      about:
        'Gale Boetticher, B.S., M.S., was a German-American chemist hired by Gustavo Fring to help set up the superlab and manufacture methamphetamine.'
    },
    {
      charID: 23,
      about:
        'Andrea Cantillo was the mother of Brock Cantillo and a recovering addict who entered into a relationship with Jesse Pinkman.'
    },
    {
      charID: 24,
      about:
        "Brock Cantillo is Andrea Cantillo's six-year old son and Tomás Cantillo's nephew."
    },
    {
      charID: 25,
      about:
        'Carmen Molina is the Assistant Principal, and then later Principal, at J. P. Wynne High School.'
    },
    {
      charID: 26,
      about:
        "Gretchen Schwartz is Walter White's old college chemistry lab partner and now co-owner of Gray Matter Technologies, a successful pharmaceutical company. A former romantic interest of Walt's, she is currently married to Elliott Schwartz, with whom she also manages Gray Matter."
    },
    {
      charID: 27,
      about:
        "Elliott Schwartz is Walter White's old college science partner and co-owner of Gray Matter Technologies, a successful scientific research company co-founded by Walter. Gretchen Schwartz, a former romantic interest of Walt, is Elliott's partner in the business and is his wife."
    },
    {
      charID: 28,
      about:
        "'Gonzo' Gonzalez was Tuco Salamanca's brother-in-law and one of his lieutenants."
    },
    {
      charID: 29,
      about:
        "Christian Ortega, commonly referred to as Combo, was one of Jesse Pinkman's longtime friends who also doubled as a dealer for his meth."
    },
    {
      charID: 30,
      about:
        'Diane Pinkman is the wife of Adam Pinkman and mother of Jesse and Jake Pinkman.'
    },
    {
      charID: 31,
      about:
        'Adam Pinkman is the father of Jesse Pinkman and Jake Pinkman and also the husband of Diane Pinkman. Unlike his wife who initially still shows care for Jesse, it is evident that Adam severely despises his son for his involvement with drugs and wants little-to-no involvement with him.'
    },
    {
      charID: 32,
      about:
        "Jacob 'Jake' Pinkman is Jesse Pinkman's younger brother, and the son of Adam & Diane Pinkman."
    },
    {
      charID: 33,
      about:
        "No-Doze was one of Tuco Salamanca's head lieutenants in his drug organization."
    },
    {
      charID: 34,
      about:
        "Emilio Koyama was Jesse Pinkman's former partner in the meth business and the cousin and right-hand man of Krazy-8."
    },
    {
      charID: 35,
      about:
        "Dr. Delcavoli was Walter White's physician and one of the top ten oncologists in the United States. He successfully oversaw Walt's initial treatment for lung cancer."
    },
    {
      charID: 36,
      about:
        'Wendy S. is a meth-addicted street prostitute who provides sexual services in the parking lot of the Crossroads Motel, which also serves as her home. She has a son named Patrick, whose age is unknown. At certain points, she has associated with Jesse Pinkman.'
    },
    {
      charID: 37,
      about:
        'Bogdan Wolynetz was the Romanian proprietor of the A1A Car Wash in Albuquerque where Walter White previously worked part-time.'
    },
    {
      charID: 38,
      about: 'Ken is a loud and obnoxious stock broker.'
    },
    {
      charID: 39,
      about:
        'Holly White is the infant daughter of Walter and Skyler White. Walter White Jr. is her older brother.'
    },
    {
      charID: 40,
      about:
        'George Merkert was the Assistant Special Agent in Charge (ASAC) of the Albuquerque DEA Field Office, serving as the boss for Agents Hank Schrader and Steven Gomez.'
    },
    {
      charID: 41,
      about:
        "Donald Margolis is the father of Jane Margolis. He originally worked as an air traffic controller and rented out the house beside Jane's."
    },
    {
      charID: 42,
      about:
        "Clovis is Badger's cousin who operates a vehicle towing and repair service."
    },
    {
      charID: 43,
      about:
        'SAC Ramey is the Special Agent in Charge of the El Paso division of the Drug Enforcement Administration.'
    },
    {
      charID: 44,
      about:
        "Victor was a loyal henchman of Gustavo Fring and prominent enforcer in Gus' Drug Empire alongside Mike Ehrmantraut. He was ultimately murdered by his boss after being seen at the scene of Gale Boetticher's murder."
    },
    {
      charID: 45,
      about:
        'Tomás Cantillo was an 11 year-old boy who worked for a local gang of drug dealers in his neighborhood. He was the younger brother of Andrea Cantillo.'
    },
    {
      charID: 46,
      about:
        'Francesca Liddy is the secretary for Saul Goodman & Associates, working as a personal receptionist for Saul Goodman, Attorney at Law.'
    },
    {
      charID: 47,
      about: 'Cynthia is the manager of Los Pollos Hermanos, Albuquerque.'
    },
    {
      charID: 48,
      about:
        "'Tortuga' was a Cartel drug runner who worked for Juan Bolsa. He was also secretly a criminal informant to the DEA in El Paso about the inner workings of the Cartel."
    },
    {
      charID: 49,
      about:
        "APD Detective Tim Roberts is a homicide investigator for the Albuquerque police department and a colleague of Hank Schrader's."
    },
    {
      charID: 50,
      about:
        "Juan Bolsa was a high-ranking member of the cartel which the Salamanca family belongs to. It is Bolsa who is the one that orders Tortuga's execution by Marco and Leonel Salamanca, and later places his head on a explosive rigged tortoise for the DEA to find."
    },
    {
      charID: 51,
      about:
        "The 'Group Leader' was Jesse Pinkman's primary counselor at the rehabilitation clinic where he was previously a patient."
    },
    {
      charID: 52,
      about:
        "Kaylee Ehrmantraut is Mike Ehrmantraut's granddaughter, and the daughter of Matt Ehrmantraut and Stacey Ehrmantraut."
    },
    {
      charID: 53,
      about: "Pamela Orbic was Skyler White's divorce attorney."
    },
    {
      charID: 54,
      about:
        "Duane Chow, always referred to as Chow, was the owner of Golden Moth Chemical, an industrial chemical manufacturing company that supplies chemicals to Gus Fring's drug manufacturing organization."
    },
    {
      charID: 55,
      about:
        "Stacey Ehrmantraut is Matt Ehrmantraut's widow and the mother of their only child, Kaylee Ehrmantraut."
    },
    {
      charID: 56,
      about: 'Officer Saxton is a member of the Albuquerque Police Department.'
    },
    {
      charID: 57,
      about:
        'Jack Welker was the leader of a criminal group with white supremacist or neo-Nazi ideologies. His nephew Todd Alquist was an associate of drug distributor Walter White.'
    },
    {
      charId: 112,
      about:
        "Kimberly 'Kim' McGill (née) Wexler is an Albuquerque attorney who was a former litigator for Hamlin, Hamlin & McGill (HHM), and a former member of Schweikart & Cokely and Mesa Verde Bank and Trust. She is the wife of Jimmy McGill."
    },
    {
      charID: 113,
      about:
        'Howard Hamlin is a senior partner at Hamlin, Hamlin & McGill, a renowned Albuquerque-based law firm. Howard was the long time friend and college of fellow partner Chuck McGill as well as former boss of Jimmy McGill and Kim Wexler.'
    },
    {
      charID: 114,
      about:
        "Charles Lindbergh 'Chuck' McGill, Jr. was the older brother of Jimmy McGill. He was the co-founder and named partner of Hamlin, Hamlin & McGill (HHM), one of Albuquerque's most prestigious law firms. "
    },
    {
      charID: 115,
      about:
        'Ignacio Varga, better known as Nacho, is a calculating, intelligent career criminal. He is the former right hand man to Tuco Salamanca and later to Hector then Lalo.'
    },
    {
      charID: 116,
      about:
        "Eduardo 'Lalo' Salamanca is a member of the Juárez Cartel and is the grandson of Abuelita, the nephew of Don Hector Salamanca and the cousin of Tuco, Marco, Leonel and Joaquin."
    },
    {
      charID: 117,
      about:
        "Stacey Ehrmantraut is Matt Ehrmantraut's widow and the mother of their only child, Kaylee Ehrmantraut."
    }
  ];

  let characterID = Number(useLocation().pathname.slice(16));



  console.log(characterID);

  let characterValue = characterAboutArray.filter((character) => {
    return character.charID === characterID;
  })[0];

  console.log(characterValue);

  // id = Number(id);
  // let id = location.pathname.splice(0, 16);

  // let { char_id } = useParams;

  // console.log(char_id); // wy print ing three timnes? does it matter? why undefined?

  useEffect(() => {
    // const dataPull = () => {
    fetch('https://breakingbadapi.com/api/characters')
      .then((response) => response.json())
      .then((data) => {
        let characterObject = data[characterID - 1];

        setDataFiles(characterObject);
      });
    // setDataFiles();
    // console.log(data[Math.floor(Math.random() * data.length)]);
    // fetch('https://breakingbadapi.com/api/quote/random?author')
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setDataQuote(data);
    //     console.log(data);
  }, []);
  // }, []);
  // };
  // , [];

  // fetch("https://breakingbadapi.com/api/quote/random?author=Skyler+White")
  //         .then((response) => response.json())
  //         .then((data) => {
  //             randomQuote = data[0].quote;
  //             randomAuthor = data[0].author;
  //             let stringArray = randomAuthor.split(" ")
  //             author = stringArray[0]+"+"+stringArray[1]
  //             console.log(author);
  //             console.log(data[0].quote);
  //             setQuote(data[0].quote);
  //             fetch(`https://breakingbadapi.com/api/characters?name=${author}`)
  //             .then((response) => response.json())
  //             .then((data) => {
  //               console.log(data[0].img);
  //               setImage(data[0].img);
  //               setName(data[0].name);
  //             })

  return (
    <div className="filecontainer">
      <div>
        <h1>{dataFiles.name}</h1>
      </div>
      <div className="filecard">
        <div className="cardImage">
          <img src={dataFiles.img} alt="character"></img>
        </div>
        <div className="carddata">
          <div className="leftfilecard">
            <div id="characterdata">
              <h1>About</h1>
              <p id="name">Nickname: {dataFiles.nickname}</p>
              <p id="age">Status: {dataFiles.status}</p>
              <p id="deaths">Occupation: {dataFiles.occupation}</p>
              <p id="description">Description: {characterValue.about}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="quotecontainer">
        {/* <div className="quotebox">
          <h1>Quote</h1>
          <p>dkdkdkdkd</p>
        </div>
        <div>
          <button className="quotebutton">New Quote</button>
        </div> */}
      </div>
    </div>
  );
}
export default CharacterFile;
