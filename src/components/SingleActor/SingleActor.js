import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { singleActorDisFetched, fetchActor } from './SingleActorSlice';
import { useParams } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import Header from '../Header/Header';

import './singleActor.scss';
import { useState } from 'react';
import SkeletonItem from '../skeletonItem/SkeletonItem';

const SingleActor = () => {
  
  const params = useParams();                         // Просто получаем id страницы
  const dispatch = useDispatch();
  const singleActorStatus = useSelector(state => state.singleActor.singleActorStatus);
  const navigate = useNavigate();
  const [castType, setCastType] = useState('Producer');
  const [castShowAll, setCastShowAll] = useState(false);

  const count = 6;
  const singleActorItem = useSelector(state => {
    if (singleActorStatus === 'idle') {
      if (state.singleActor.singleActorItem.castMovies.length > count) {
        let newCastList = null;
        if (!castShowAll) {
          newCastList = state.singleActor.singleActorItem.castMovies.filter(item => item.role === castType).slice(0, count);
        } else {
          newCastList = state.singleActor.singleActorItem.castMovies.filter(item => item.role === castType);
        }
        return { ...state.singleActor.singleActorItem, castMovies: newCastList }
      } else {
        return state.singleActor.singleActorItem
      }
    }
  });

  const actor = {
    "id": "nm0634240",
    "name": "Christopher Nolan",
    "role": "Producer, Writer, Director",
    "image": "https://m.media-amazon.com/images/M/MV5BNjE3NDQyOTYyMV5BMl5BanBnXkFtZTcwODcyODU2Mw@@._V1_Ratio0.7192_AL_.jpg",
    "summary": "Best known for his cerebral, often nonlinear, storytelling, acclaimed writer-director Christopher Nolan was born on July 30, 1970, in London, England. Over the course of 15 years of filmmaking, Nolan has gone from low-budget independent films to working on some of the biggest blockbusters ever made. At 7 years old, Nolan began making short movies ...",
    "birthDate": "1970-07-30",
    "deathDate": null,
    "awards": "Nominated for 5 Oscars. | Another 142 wins & 231 nominations.",
    "height": "5' 11¼\" (1.81 m)",
    "knownFor": [
      {
        "id": "tt6723592",
        "title": "Tenet",
        "fullTitle": "Tenet (2020)",
        "year": "2020",
        "role": "Producer",
        "image": "https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_Ratio0.6852_AL_.jpg"
      },
      {
        "id": "tt1375666",
        "title": "Inception",
        "fullTitle": "Inception (2010)",
        "year": "2010",
        "role": "Producer",
        "image": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6852_AL_.jpg"
      },
      {
        "id": "tt0482571",
        "title": "The Prestige",
        "fullTitle": "The Prestige (2006)",
        "year": "2006",
        "role": "Producer",
        "image": "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_Ratio0.6852_AL_.jpg"
      },
      {
        "id": "tt0816692",
        "title": "Interstellar",
        "fullTitle": "Interstellar (2014)",
        "year": "2014",
        "role": "Producer",
        "image": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6852_AL_.jpg"
      }
    ],
    "castMovies": [
      {
        "id": "tt15398776",
        "role": "Producer",
        "title": "Oppenheimer",
        "year": "2023",
        "description": "(producer) (post-production)"
      },
      {
        "id": "tt12361974",
        "role": "Producer",
        "title": "Zack Snyder's Justice League",
        "year": "2021",
        "description": "(executive producer)"
      },
      {
        "id": "tt6723592",
        "role": "Producer",
        "title": "Tenet",
        "year": "2020",
        "description": "(producer - produced by, p.g.a.)"
      },
      {
        "id": "tt10883760",
        "role": "Producer",
        "title": "The Doll's Breath",
        "year": "2019",
        "description": "(Short) (executive producer)"
      },
      {
        "id": "tt8000432",
        "role": "Producer",
        "title": "The Dunkirk Spirit: Behind the Making of the Movie",
        "year": "2018",
        "description": "(Documentary short) (producer)"
      },
      {
        "id": "tt0974015",
        "role": "Producer",
        "title": "Justice League",
        "year": "2017",
        "description": "(executive producer)"
      },
      {
        "id": "tt5013056",
        "role": "Producer",
        "title": "Dunkirk",
        "year": "2017",
        "description": "(producer - produced by, p.g.a.)"
      },
      {
        "id": "tt18689424",
        "role": "Producer",
        "title": "Batman v Superman: Dawn of Justice - Ultimate Edition",
        "year": "2016",
        "description": "(executive producer)"
      },
      {
        "id": "tt2975590",
        "role": "Producer",
        "title": "Batman v Superman: Dawn of Justice",
        "year": "2016",
        "description": "(executive producer)"
      },
      {
        "id": "tt4907572",
        "role": "Producer",
        "title": "Quay",
        "year": "2015",
        "description": "(Documentary short) (producer)"
      },
      {
        "id": "tt0816692",
        "role": "Producer",
        "title": "Interstellar",
        "year": "2014",
        "description": "(producer)"
      },
      {
        "id": "tt2209764",
        "role": "Producer",
        "title": "Transcendence",
        "year": "2014/I",
        "description": "(executive producer)"
      },
      {
        "id": "tt0770828",
        "role": "Producer",
        "title": "Man of Steel",
        "year": "2013",
        "description": "(producer)"
      },
      {
        "id": "tt1345836",
        "role": "Producer",
        "title": "The Dark Knight Rises",
        "year": "2012",
        "description": "(producer)"
      },
      {
        "id": "tt1375666",
        "role": "Producer",
        "title": "Inception",
        "year": "2010",
        "description": "(producer)"
      },
      {
        "id": "tt0468569",
        "role": "Producer",
        "title": "The Dark Knight",
        "year": "2008",
        "description": "(producer)"
      },
      {
        "id": "tt0482571",
        "role": "Producer",
        "title": "The Prestige",
        "year": "2006",
        "description": "(producer)"
      },
      {
        "id": "tt0154506",
        "role": "Producer",
        "title": "Following",
        "year": "1998",
        "description": "(producer)"
      },
      {
        "id": "tt6386412",
        "role": "Producer",
        "title": "Larceny",
        "year": "1996",
        "description": "(Short) (producer)"
      },
      {
        "id": "tt6386408",
        "role": "Producer",
        "title": "Tarantella",
        "year": "1989",
        "description": "(Short) (producer)"
      },
      {
        "id": "tt5207922",
        "role": "Writer",
        "title": "Memento",
        "year": "",
        "description": "(based on the screenplay by) (announced)"
      },
      {
        "id": "tt15398776",
        "role": "Writer",
        "title": "Oppenheimer",
        "year": "2023",
        "description": "(written for the screen by) (post-production)"
      },
      {
        "id": "tt6723592",
        "role": "Writer",
        "title": "Tenet",
        "year": "2020",
        "description": "(written by)"
      },
      {
        "id": "tt5013056",
        "role": "Writer",
        "title": "Dunkirk",
        "year": "2017",
        "description": "(written by)"
      },
      {
        "id": "tt0816692",
        "role": "Writer",
        "title": "Interstellar",
        "year": "2014",
        "description": "(written by)"
      },
      {
        "id": "tt0770828",
        "role": "Writer",
        "title": "Man of Steel",
        "year": "2013",
        "description": "(story)"
      },
      {
        "id": "tt1345836",
        "role": "Writer",
        "title": "The Dark Knight Rises",
        "year": "2012",
        "description": "(screenplay) / (story)"
      },
      {
        "id": "tt1790736",
        "role": "Writer",
        "title": "Inception: The Cobol Job",
        "year": "2010",
        "description": "(Video short) (based on characters by)"
      },
      {
        "id": "tt1375666",
        "role": "Writer",
        "title": "Inception",
        "year": "2010",
        "description": "(written by)"
      },
      {
        "id": "tt0468569",
        "role": "Writer",
        "title": "The Dark Knight",
        "year": "2008",
        "description": "(screenplay) / (story)"
      },
      {
        "id": "tt0482571",
        "role": "Writer",
        "title": "The Prestige",
        "year": "2006",
        "description": "(screenplay)"
      },
      {
        "id": "tt0450392",
        "role": "Writer",
        "title": "Batman Begins",
        "year": "2005",
        "description": "(Video Game) (based on the movie written by - uncredited)"
      },
      {
        "id": "tt0372784",
        "role": "Writer",
        "title": "Batman Begins",
        "year": "2005",
        "description": "(screenplay)"
      },
      {
        "id": "tt0209144",
        "role": "Writer",
        "title": "Memento",
        "year": "2000",
        "description": "(screenplay)"
      },
      {
        "id": "tt0154506",
        "role": "Writer",
        "title": "Following",
        "year": "1998",
        "description": "(written by)"
      },
      {
        "id": "tt0411302",
        "role": "Writer",
        "title": "Doodlebug",
        "year": "1997",
        "description": "(Short) (written by - as Chris Nolan)"
      },
      {
        "id": "tt6386412",
        "role": "Writer",
        "title": "Larceny",
        "year": "1996",
        "description": "(Short)"
      },
      {
        "id": "tt6386408",
        "role": "Writer",
        "title": "Tarantella",
        "year": "1989",
        "description": "(Short)"
      },
      {
        "id": "tt15398776",
        "role": "Director",
        "title": "Oppenheimer",
        "year": "2023",
        "description": "(directed by) (post-production)"
      },
      {
        "id": "tt6723592",
        "role": "Director",
        "title": "Tenet",
        "year": "2020",
        "description": "(directed by)"
      },
      {
        "id": "tt5013056",
        "role": "Director",
        "title": "Dunkirk",
        "year": "2017",
        "description": "(directed by)"
      },
      {
        "id": "tt4907572",
        "role": "Director",
        "title": "Quay",
        "year": "2015",
        "description": "(Documentary short)"
      },
      {
        "id": "tt0816692",
        "role": "Director",
        "title": "Interstellar",
        "year": "2014",
        "description": "(directed by)"
      },
      {
        "id": "tt1345836",
        "role": "Director",
        "title": "The Dark Knight Rises",
        "year": "2012",
        "description": "(directed by)"
      },
      {
        "id": "tt1375666",
        "role": "Director",
        "title": "Inception",
        "year": "2010",
        "description": "(directed by)"
      },
      {
        "id": "tt0468569",
        "role": "Director",
        "title": "The Dark Knight",
        "year": "2008",
        "description": ""
      },
      {
        "id": "tt0482571",
        "role": "Director",
        "title": "The Prestige",
        "year": "2006",
        "description": ""
      },
      {
        "id": "tt0372784",
        "role": "Director",
        "title": "Batman Begins",
        "year": "2005",
        "description": "(directed by)"
      },
      {
        "id": "tt0368644",
        "role": "Director",
        "title": "Cinema16: British Short Films",
        "year": "2003",
        "description": "(Video)"
      },
      {
        "id": "tt0278504",
        "role": "Director",
        "title": "Insomnia",
        "year": "2002",
        "description": ""
      },
      {
        "id": "tt0209144",
        "role": "Director",
        "title": "Memento",
        "year": "2000",
        "description": ""
      },
      {
        "id": "tt0154506",
        "role": "Director",
        "title": "Following",
        "year": "1998",
        "description": ""
      },
      {
        "id": "tt0411302",
        "role": "Director",
        "title": "Doodlebug",
        "year": "1997",
        "description": "(Short) (as Chris Nolan)"
      },
      {
        "id": "tt6386412",
        "role": "Director",
        "title": "Larceny",
        "year": "1996",
        "description": "(Short)"
      },
      {
        "id": "tt6386408",
        "role": "Director",
        "title": "Tarantella",
        "year": "1989",
        "description": "(Short)"
      },
      {
        "id": "tt4907572",
        "role": "Cinematographer",
        "title": "Quay",
        "year": "2015",
        "description": "(Documentary short)"
      },
      {
        "id": "tt0154506",
        "role": "Cinematographer",
        "title": "Following",
        "year": "1998",
        "description": "(shot by)"
      },
      {
        "id": "tt0411302",
        "role": "Cinematographer",
        "title": "Doodlebug",
        "year": "1997",
        "description": "(Short) (as Chris Nolan)"
      },
      {
        "id": "tt6386412",
        "role": "Cinematographer",
        "title": "Larceny",
        "year": "1996",
        "description": "(Short)"
      },
      {
        "id": "tt6386408",
        "role": "Cinematographer",
        "title": "Tarantella",
        "year": "1989",
        "description": "(Short)"
      },
      {
        "id": "tt0154506",
        "role": "Editor",
        "title": "Following",
        "year": "1998",
        "description": ""
      },
      {
        "id": "tt0411302",
        "role": "Editor",
        "title": "Doodlebug",
        "year": "1997",
        "description": "(Short) (as Chris Nolan)"
      },
      {
        "id": "tt6386412",
        "role": "Editor",
        "title": "Larceny",
        "year": "1996",
        "description": "(Short)"
      },
      {
        "id": "tt6386408",
        "role": "Editor",
        "title": "Tarantella",
        "year": "1989",
        "description": "(Short)"
      },
      {
        "id": "tt0411302",
        "role": "Art department",
        "title": "Doodlebug",
        "year": "1997",
        "description": "(Short) (set designer - as Chris Nolan)"
      },
      {
        "id": "tt4907572",
        "role": "Composer",
        "title": "Quay",
        "year": "2015",
        "description": "(Documentary short) (music by)"
      },
      {
        "id": "tt12230756",
        "role": "Thanks",
        "title": "Detective Inspector",
        "year": "2022",
        "description": "(the producers wish to thank) (completed)"
      },
      {
        "id": "tt7196882",
        "role": "Thanks",
        "title": "R248",
        "year": "2017",
        "description": "(Short) (thanks) (completed)"
      },
      {
        "id": "tt16191198",
        "role": "Thanks",
        "title": "DC Villains - Catwoman: The Feline Femme Fatale",
        "year": "2021",
        "description": "(Video documentary short) (special thanks)"
      },
      {
        "id": "tt10436798",
        "role": "Thanks",
        "title": "The Arsonist",
        "year": "2020",
        "description": "(special thanks: inspiration)"
      },
      {
        "id": "tt13920556",
        "role": "Thanks",
        "title": "Looking at the World in a New Way: The Making of Tenet",
        "year": "2020",
        "description": "(Video documentary) (special thanks)"
      },
      {
        "id": "tt12879116",
        "role": "Thanks",
        "title": "Restart",
        "year": "2020/I",
        "description": "(Short) (the producers wish to thank)"
      },
      {
        "id": "tt10396518",
        "role": "Thanks",
        "title": "Looks Like Pennies",
        "year": "2019",
        "description": "(Short) (thanks)"
      },
      {
        "id": "tt2939114",
        "role": "Thanks",
        "title": "Dark Harvest",
        "year": "2016",
        "description": "(thanks: for showing me the Dark Light - as Chris Nolan)"
      },
      {
        "id": "tt1861445",
        "role": "Thanks",
        "title": "An Act of War",
        "year": "2015",
        "description": "(very special thanks)"
      },
      {
        "id": "tt5297406",
        "role": "Thanks",
        "title": "Inside 'Interstellar'",
        "year": "2015",
        "description": "(Video documentary) (special thanks)"
      },
      {
        "id": "tt3328882",
        "role": "Thanks",
        "title": "Planet Krypton",
        "year": "2013",
        "description": "(Video documentary short) (special thanks)"
      },
      {
        "id": "tt3329128",
        "role": "Thanks",
        "title": "Strong Characters, Legendary Roles",
        "year": "2013",
        "description": "(Video short) (special thanks)"
      },
      {
        "id": "tt2392846",
        "role": "Thanks",
        "title": "Paranormal Movie",
        "year": "2013",
        "description": "(very special thanks)"
      },
      {
        "id": "tt1737680",
        "role": "Thanks",
        "title": "Pulp",
        "year": "2013",
        "description": "(thanks)"
      },
      {
        "id": "tt2229499",
        "role": "Thanks",
        "title": "Don Jon",
        "year": "2013",
        "description": "(the producers would like to thank)"
      },
      {
        "id": "tt2359347",
        "role": "Thanks",
        "title": "The Black Dahlia Haunting",
        "year": "2012",
        "description": "(special thanks)"
      },
      {
        "id": "tt2317393",
        "role": "Thanks",
        "title": "Atomism",
        "year": "2011",
        "description": "(Short) (very special thanks)"
      },
      {
        "id": "tt2126285",
        "role": "Thanks",
        "title": "Exploring 'the Tree of Life'",
        "year": "2011",
        "description": "(Video documentary short) (special thanks)"
      },
      {
        "id": "tt4507222",
        "role": "Thanks",
        "title": "The Wronged One",
        "year": "2011",
        "description": "(TV Series) (special thanks - 3 episodes) - The Lad with the Rammstein Tattoo (2011) ... (special thanks) - Game Over Mate (2011) ... (special thanks) - Sully You Scumbag! (2011) ... (special thanks)"
      },
      {
        "id": "tt2007377",
        "role": "Thanks",
        "title": "El defensor",
        "year": "2011",
        "description": "(Short) (the director wishes to thank)"
      },
      {
        "id": "tt1754231",
        "role": "Thanks",
        "title": "Mr. J",
        "year": "2010",
        "description": "(Short) (special thanks)"
      },
      {
        "id": "tt1843886",
        "role": "Thanks",
        "title": "Dreams: Cinema of the Subconscious",
        "year": "2010",
        "description": "(Video documentary short) (special thanks)"
      },
      {
        "id": "tt1732568",
        "role": "Thanks",
        "title": "Before Breakfast",
        "year": "2010/I",
        "description": "(Short) (very special thanks)"
      },
      {
        "id": "tt0318220",
        "role": "Thanks",
        "title": "HBO First Look",
        "year": "2008-2010",
        "description": "(TV Series documentary short) (special thanks - 2 episodes) - Inception (2010) ... (special thanks) - The Dark Knight: Escalation (2008) ... (special thanks)"
      },
      {
        "id": "tt1692926",
        "role": "Thanks",
        "title": "The Dark Knight Tribute",
        "year": "2009",
        "description": "(Video documentary short) (special thanks)"
      },
      {
        "id": "tt1084724",
        "role": "Thanks",
        "title": "Our Lost Translation",
        "year": "2007",
        "description": "(Short) (special thanks)"
      },
      {
        "id": "tt0485593",
        "role": "Thanks",
        "title": "Batman: The Journey Begins",
        "year": "2005",
        "description": "(Video documentary short) (special thanks)"
      },
      {
        "id": "tt0450392",
        "role": "Thanks",
        "title": "Batman Begins",
        "year": "2005",
        "description": "(Video Game) (special thanks - as Chris Nolan)"
      },
      {
        "id": "tt0337675",
        "role": "Thanks",
        "title": "Mementos",
        "year": "2004",
        "description": "(Short) (special thanks: inspiration)"
      },
      {
        "id": "tt22487634",
        "role": "Self",
        "title": "Hans Zimmer: Hollywood Rebel",
        "year": "2022",
        "description": "(Documentary) Self"
      },
      {
        "id": "tt22814656",
        "role": "Self",
        "title": "Heath Ledger: A Tragic Tale",
        "year": "2022",
        "description": "(Documentary short) Self"
      },
      {
        "id": "tt16191198",
        "role": "Self",
        "title": "DC Villains - Catwoman: The Feline Femme Fatale",
        "year": "2021",
        "description": "(Video documentary short) Self"
      },
      {
        "id": "tt8638066",
        "role": "Self",
        "title": "Hollywood Insider",
        "year": "2020-2021",
        "description": "(TV Series) Self - Worst Oscar Snubs: The Academy Awards Failed By Ignoring These Great Movies and Performances (2021) ... Self - 'The Mandalorian' and StageCraft VFX: How LEDs are the New Green Screens (2021) ... Self - Manga, Graphic Novel, and Comic in Film and Television: DC and Marvel Take the Backseat (2021) ... Self - 10 Best Movie Sequels: Outstanding Second Films Are Rare. But They Certainly Exist! (2021) ... Self - War Movies Not From USA: A Perspective Outside of Hollywood (2021) ... Self Show all 8 episodes"
      },
      {
        "id": "tt12920708",
        "role": "Self",
        "title": "Joker: Put on A Happy Face",
        "year": "2020",
        "description": "(Documentary short) Self"
      },
      {
        "id": "tt13920556",
        "role": "Self",
        "title": "Looking at the World in a New Way: The Making of Tenet",
        "year": "2020",
        "description": "(Video documentary) Self - Director / Writer / Producer"
      },
      {
        "id": "tt12690356",
        "role": "Self",
        "title": "GMA3: What You Need to Know",
        "year": "2020",
        "description": "(TV Series) Self - Iyanla Vanzant/Kenya Moore (2020) ... Self"
      },
      {
        "id": "tt13687276",
        "role": "Self",
        "title": "The Game Awards 2020",
        "year": "2020",
        "description": "(TV Special) Self - Presenter"
      },
      {
        "id": "tt0072506",
        "role": "Self",
        "title": "Good Morning America",
        "year": "2014-2020",
        "description": "(TV Series) Self - Guest - Episode dated 8 December 2020 (2020) ... Self - Guest - Episode dated 6 November 2014 (2014) ... Self - Guest"
      },
      {
        "id": "tt0081857",
        "role": "Self",
        "title": "Entertainment Tonight",
        "year": "2010-2020",
        "description": "(TV Series) Self - Episode #39.310 (2020) ... Self - Episode #36.259 (2017) ... Self - Episode #36.250 (2017) ... Self - Episode dated 14 July 2010 (2010) ... Self - Episode dated 5 July 2010 (2010) ... Self Show all 6 episodes"
      },
      {
        "id": "tt0380100",
        "role": "Self",
        "title": "Dagsrevyen",
        "year": "2020",
        "description": "(TV Series) Self - (segment \"Tenet\") - Episode dated 22 August 2020 (2020) ... Self - (segment \"Tenet\")"
      },
      {
        "id": "tt11427372",
        "role": "Self",
        "title": "Hollywood's Stories",
        "year": "2020",
        "description": "(TV Series documentary) Self - Heath Ledger Dark Fate for a Young Star (2020) ... Self"
      },
      {
        "id": "tt3856408",
        "role": "Self",
        "title": "Making Waves: The Art of Cinematic Sound",
        "year": "2019",
        "description": "(Documentary) Self"
      },
      {
        "id": "tt8344332",
        "role": "Self",
        "title": "James Cameron's Story of Science Fiction",
        "year": "2018",
        "description": "(TV Mini Series documentary) Self - Time Travel (2018) ... Self - Dark Futures (2018) ... Self"
      },
      {
        "id": "tt5735602",
        "role": "Self",
        "title": "Le journal du Festival",
        "year": "2018",
        "description": "(TV Series) Self - Episode dated 18 May 2018 (2018) ... Self"
      },
      {
        "id": "tt7235270",
        "role": "Self",
        "title": "The Oscars",
        "year": "2018",
        "description": "(TV Special) Self - Nominee"
      },
      {
        "id": "tt7866928",
        "role": "Self",
        "title": "The EE British Academy Film Awards",
        "year": "2018",
        "description": "(TV Special) Self - Nominee"
      },
      {
        "id": "tt6635044",
        "role": "Self",
        "title": "75th Golden Globe Awards",
        "year": "2018",
        "description": "(TV Special) Self - Nominee"
      },
      {
        "id": "tt7730784",
        "role": "Self",
        "title": "The Making of Dunkirk",
        "year": "2017",
        "description": "(Video documentary) Self"
      },
      {
        "id": "tt7595752",
        "role": "Self",
        "title": "The British Academy Britannia Awards",
        "year": "2017",
        "description": "(TV Special) Self - presenter"
      },
      {
        "id": "tt0911896",
        "role": "Self",
        "title": "Made in Hollywood",
        "year": "2017",
        "description": "(TV Series) Self - Dunkirk/Girls Trip/Valerian and the City of a Thousand Planets/Landline (2017) ... Self"
      },
      {
        "id": "tt5326328",
        "role": "Self",
        "title": "Popcorn with Peter Travers",
        "year": "2017",
        "description": "(TV Series) Self - Guest - Inside the Making of 'Dunkirk' with Director Christopher Nolan (2017) ... Self - Guest"
      },
      {
        "id": "tt0044298",
        "role": "Self",
        "title": "Today",
        "year": "2017",
        "description": "(TV Series) Self - Episode dated 20 July 2017 (2017) ... Self"
      },
      {
        "id": "tt11559876",
        "role": "Self",
        "title": "Dunkirk IMAX® Behind the Frame",
        "year": "2017",
        "description": "(Documentary short) Self"
      },
      {
        "id": "tt7080824",
        "role": "Self",
        "title": "Heat: Academy of Motion Picture Arts and Sciences Filmmaker Panel",
        "year": "2017",
        "description": "(Video documentary) Self"
      },
      {
        "id": "tt6348726",
        "role": "Self",
        "title": "Academy Event: Heat",
        "year": "2016",
        "description": "(Video short) Self - Moderator"
      },
      {
        "id": "tt6002238",
        "role": "Self",
        "title": "Cinema Futures",
        "year": "2016",
        "description": "(Documentary) Self"
      },
      {
        "id": "tt0123338",
        "role": "Self",
        "title": "60 Minutes",
        "year": "2015",
        "description": "(TV Series documentary) Self - Director (segment \"Michael Caine\") - Inside Apple/Michael Caine (2015) ... Self - Director (segment \"Michael Caine\")"
      },
      {
        "id": "tt5070048",
        "role": "Self",
        "title": "IMDb Asks",
        "year": "2015",
        "description": "(TV Series) Self - What's Your First Movie in a Movie Theater? (2015) ... Self"
      },
      {
        "id": "tt4634294",
        "role": "Self",
        "title": "StarTalk",
        "year": "2015",
        "description": "(TV Series) Self - Christopher Nolan (2015) ... Self"
      },
      {
        "id": "tt5297444",
        "role": "Self",
        "title": "Creating Interstellar: A Discussion with Christopher Nolan, Anne Hathaway, Mathew McConaughey, and Jessica Chastain",
        "year": "2015",
        "description": "(Video short) Self"
      },
      {
        "id": "tt5297406",
        "role": "Self",
        "title": "Inside 'Interstellar'",
        "year": "2015",
        "description": "(Video documentary) Self - Director / Co-Writer"
      },
      {
        "id": "tt4415360",
        "role": "Self",
        "title": "The Science of Interstellar",
        "year": "2015",
        "description": "(Documentary) Self"
      },
      {
        "id": "tt2163227",
        "role": "Self",
        "title": "CBS This Morning",
        "year": "2014",
        "description": "(TV Series) Self - Director, Interstellar - Episode #3.300 (2014) ... Self - Director, Interstellar"
      },
      {
        "id": "tt0458254",
        "role": "Self",
        "title": "The Colbert Report",
        "year": "2014",
        "description": "(TV Series) Self - Guest - Episode dated 3 December 2014 (2014) ... Self - Guest"
      },
      {
        "id": "tt3412000",
        "role": "Self",
        "title": "IMDb: What to Watch",
        "year": "2014",
        "description": "(TV Series documentary) Self - Interstellar (2014) ... Self"
      },
      {
        "id": "tt4172224",
        "role": "Self",
        "title": "Interstellar: Nolan's Odyssey",
        "year": "2014",
        "description": "(TV Movie documentary) Self"
      },
      {
        "id": "tt5123584",
        "role": "Self",
        "title": "Rencontres de cinéma",
        "year": "2014",
        "description": "(TV Series) Self - Episode dated 2 November 2014 (2014) ... Self"
      },
      {
        "id": "tt3391950",
        "role": "Self",
        "title": "The Hollywood Reporter in Focus",
        "year": "2014",
        "description": "(TV Series) Self - Interstellar (2014) ... Self"
      },
      {
        "id": "tt3529900",
        "role": "Self",
        "title": "D.I.Y.",
        "year": "2014",
        "description": "(Documentary short) Self"
      },
      {
        "id": "tt3138288",
        "role": "Self",
        "title": "Christopher Nolan & Richard Donner: A Conversation",
        "year": "2013",
        "description": "(Video documentary short) Self"
      },
      {
        "id": "tt3138282",
        "role": "Self",
        "title": "The Fire Rises: The Creation and Impact of the Dark Knight Trilogy",
        "year": "2013",
        "description": "(Video documentary) Self"
      },
      {
        "id": "tt2547622",
        "role": "Self",
        "title": "Tales from the Warner Bros. Lot",
        "year": "2013",
        "description": "(Documentary) Self"
      },
      {
        "id": "tt5239504",
        "role": "Self",
        "title": "Ending the Knight",
        "year": "2012",
        "description": "(Video documentary) Self"
      },
      {
        "id": "tt2552826",
        "role": "Self",
        "title": "Stanley Kubrick in Focus",
        "year": "2012",
        "description": "(Short) Self"
      },
      {
        "id": "tt2274760",
        "role": "Self",
        "title": "The Batmobile",
        "year": "2012",
        "description": "(TV Movie documentary) Self"
      },
      {
        "id": "tt0381753",
        "role": "Self",
        "title": "Fantastic",
        "year": "2012",
        "description": "(TV Series) Self - Episode dated 15 July 2012 (2012) ... Self"
      },
      {
        "id": "tt2202980",
        "role": "Self",
        "title": "Guys Choice Awards 2012",
        "year": "2012",
        "description": "(TV Special) Self"
      },
      {
        "id": "tt2402919",
        "role": "Self",
        "title": "2012 MTV Movie Awards",
        "year": "2012",
        "description": "(TV Special) Self - Presenter"
      },
      {
        "id": "tt2014338",
        "role": "Self",
        "title": "Side by Side",
        "year": "2012",
        "description": "(Documentary) Self"
      },
      {
        "id": "tt2126285",
        "role": "Self",
        "title": "Exploring 'the Tree of Life'",
        "year": "2011",
        "description": "(Video documentary short) Self"
      },
      {
        "id": "tt1642102",
        "role": "Self",
        "title": "In the House with Peter Bart & Peter Guber",
        "year": "2011",
        "description": "(TV Series) - Christina Applegate/Anthony Mackie/Chris Nolan/Alan Horn (2011)"
      },
      {
        "id": "tt5328954",
        "role": "Self",
        "title": "Remembering 'Memento'",
        "year": "2011",
        "description": "(Video short) Self"
      },
      {
        "id": "tt3121134",
        "role": "Self",
        "title": "9th Annual Visual Effects Society Awards",
        "year": "2011",
        "description": "(TV Special) Self"
      },
      {
        "id": "tt1273222",
        "role": "Self",
        "title": "These Amazing Shadows",
        "year": "2011",
        "description": "(Documentary) Self"
      },
      {
        "id": "tt1810776",
        "role": "Self",
        "title": "The 68th Annual Golden Globe Awards",
        "year": "2011",
        "description": "(TV Special) Self - Nominee"
      },
      {
        "id": "tt5295990",
        "role": "Self",
        "title": "Inception: Jump Right Into the Action",
        "year": "2010",
        "description": "(Video documentary short) Self"
      },
      {
        "id": "tt1843886",
        "role": "Self",
        "title": "Dreams: Cinema of the Subconscious",
        "year": "2010",
        "description": "(Video documentary short) Self"
      },
      {
        "id": "tt1754468",
        "role": "Self",
        "title": "Scream Awards 2010",
        "year": "2010",
        "description": "(TV Special) Self"
      },
      {
        "id": "tt1612376",
        "role": "Self",
        "title": "Janela Indiscreta",
        "year": "2010",
        "description": "(TV Series) Self - Episode #1.21 (2010) ... Self"
      },
      {
        "id": "tt1480165",
        "role": "Self",
        "title": "The Project",
        "year": "2010",
        "description": "(TV Series) Self - Episode #1.255 (2010) ... Self"
      },
      {
        "id": "tt1434322",
        "role": "Self",
        "title": "Up Close with Carrie Keagan",
        "year": "2008-2010",
        "description": "(TV Series) Self - Episode dated 14 July 2010 (2010) ... Self - Episode dated 15 July 2008 (2008) ... Self"
      },
      {
        "id": "tt0318220",
        "role": "Self",
        "title": "HBO First Look",
        "year": "2005-2010",
        "description": "(TV Series documentary short) Self - Inception (2010) ... Self - The Dark Knight: Escalation (2008) ... Self - The Dark Knight (2008) ... Self - Batman Begins: An Origin Story (2005) ... Self"
      },
      {
        "id": "tt1672620",
        "role": "Self",
        "title": "Guys Choice",
        "year": "2010",
        "description": "(TV Special) Self"
      },
      {
        "id": "tt1219288",
        "role": "Self",
        "title": "The 81st Annual Academy Awards",
        "year": "2009",
        "description": "(TV Special) Self - Audience Member"
      },
      {
        "id": "tt1222814",
        "role": "Self",
        "title": "Golden Globe Awards",
        "year": "2009",
        "description": "(TV Special) Self - Accepting Award on Behalf of Heath Ledger (as Chris Nolan)"
      },
      {
        "id": "tt1264979",
        "role": "Self",
        "title": "The 14th Annual Critics' Choice Awards",
        "year": "2009",
        "description": "(TV Special) Self - Winner Best Action Movie"
      },
      {
        "id": "tt1349447",
        "role": "Self",
        "title": "The 35th Annual People's Choice Awards",
        "year": "2009",
        "description": "(TV Special) Self"
      },
      {
        "id": "tt5237190",
        "role": "Self",
        "title": "Gotham Uncovered: Creation of a Scene",
        "year": "2008",
        "description": "(Video documentary) Self"
      },
      {
        "id": "tt0460659",
        "role": "Self",
        "title": "Els matins a TV3",
        "year": "2008",
        "description": "(TV Series) Self - Episode #4.218 (2008) ... Self"
      },
      {
        "id": "tt1265588",
        "role": "Self",
        "title": "Batman Tech",
        "year": "2008",
        "description": "(TV Movie documentary) Self"
      },
      {
        "id": "tt1265589",
        "role": "Self",
        "title": "Batman Unmasked",
        "year": "2008",
        "description": "(TV Movie documentary) Self"
      },
      {
        "id": "tt1035445",
        "role": "Self",
        "title": "The Director's Notebook: The Cinematic Sleight of Hand of Christopher Nolan",
        "year": "2007",
        "description": "(Video documentary short) Self"
      },
      {
        "id": "tt0192897",
        "role": "Self",
        "title": "Film 2018",
        "year": "2006",
        "description": "(TV Series) Self - Episode dated 6 November 2006 (2006) ... Self - Episode dated 30 October 2006 (2006) ... Self - Episode dated 23 October 2006 (2006) ... Self"
      },
      {
        "id": "tt0876257",
        "role": "Self",
        "title": "Film Noir: Bringing Darkness to Light",
        "year": "2006",
        "description": "(Video documentary) Self"
      },
      {
        "id": "tt0485593",
        "role": "Self",
        "title": "Batman: The Journey Begins",
        "year": "2005",
        "description": "(Video documentary short) Self - Director / Co-Writer"
      },
      {
        "id": "tt0485594",
        "role": "Self",
        "title": "Batman: The Tumbler",
        "year": "2005",
        "description": "(Video documentary short) Self - Director / Co-Writer"
      },
      {
        "id": "tt0485689",
        "role": "Self",
        "title": "Batman Begins: Path to Discovery",
        "year": "2005",
        "description": "(Video documentary short) Self - Director / Co-Writer"
      },
      {
        "id": "tt0485604",
        "role": "Self",
        "title": "Cape and Cowl",
        "year": "2005",
        "description": "(Video documentary short) Self - Director / Co-Writer"
      },
      {
        "id": "tt0485650",
        "role": "Self",
        "title": "Genesis of the Bat",
        "year": "2005",
        "description": "(Video documentary short) Self - Director / Co-Writer"
      },
      {
        "id": "tt0485653",
        "role": "Self",
        "title": "Gotham City Rises",
        "year": "2005",
        "description": "(Video documentary short) Self - Director / Co-Writer"
      },
      {
        "id": "tt0485717",
        "role": "Self",
        "title": "Saving Gotham City",
        "year": "2005",
        "description": "(Video documentary short) Self - Director / Co-Writer"
      },
      {
        "id": "tt0485718",
        "role": "Self",
        "title": "Shaping Mind and Body",
        "year": "2005",
        "description": "(Video documentary short) Self - Director / Co-Writer"
      },
      {
        "id": "tt0270116",
        "role": "Self",
        "title": "Charlie Rose",
        "year": "2005",
        "description": "(TV Series) Self - Episode dated 15 June 2005 (2005) ... Self"
      },
      {
        "id": "tt5328982",
        "role": "Self",
        "title": "Memento: Interview with Christopher Nolan",
        "year": "2004",
        "description": "(Video documentary short) Self"
      },
      {
        "id": "tt0368644",
        "role": "Self",
        "title": "Cinema16: British Short Films",
        "year": "2003",
        "description": "(Video) Self - Commentary, Doodlebug (voice)"
      },
      {
        "id": "tt0372743",
        "role": "Self",
        "title": "The 100 Greatest Movie Stars",
        "year": "2003",
        "description": "(TV Movie documentary) Self"
      },
      {
        "id": "tt0362540",
        "role": "Self",
        "title": "Day for Night: The Making of 'Insomnia'",
        "year": "2002",
        "description": "(Video documentary short) Self"
      },
      {
        "id": "tt0357402",
        "role": "Self",
        "title": "180°: Christopher Nolan Interviews Al Pacino",
        "year": "2002",
        "description": "(Video documentary short) Self"
      },
      {
        "id": "tt3511912",
        "role": "Self",
        "title": "Making of Insomnia",
        "year": "2002",
        "description": "(TV Movie documentary)"
      },
      {
        "id": "tt0324947",
        "role": "Self",
        "title": "2002 MTV Movie Awards",
        "year": "2002",
        "description": "(TV Special) Self - Winner"
      },
      {
        "id": "tt0312304",
        "role": "Self",
        "title": "The 2002 IFP/West Independent Spirit Awards",
        "year": "2002",
        "description": "(TV Special documentary) Self - Winner"
      },
      {
        "id": "tt0306276",
        "role": "Self",
        "title": "Anatomy of a Scene",
        "year": "2001",
        "description": "(TV Series documentary) Self - Memento (2001) ... Self"
      },
      {
        "id": "tt0090523",
        "role": "Self",
        "title": "At the Movies",
        "year": "2001",
        "description": "(TV Series) Self - The Million Dollar Hotel/The Invisible Circus/Head Over Heels (2001) ... Self"
      },
      {
        "id": "tt15481624",
        "role": "Archive footage",
        "title": "Minty Comedic Arts",
        "year": "2022",
        "description": "(TV Series) Self - 10 Things You Didn't Know About Batman Begins (2022) ... Self"
      },
      {
        "id": "tt20721772",
        "role": "Archive footage",
        "title": "How Batman Movies Pulled Off 6 Batmobile & Batwing Stunts",
        "year": "2022",
        "description": "(Video documentary short) Self - Director"
      },
      {
        "id": "tt9099726",
        "role": "Archive footage",
        "title": "Nota Bonus",
        "year": "2021",
        "description": "(TV Series) Self - Une citadelle maudite en Chine? (2021) ... Self"
      },
      {
        "id": "tt7252086",
        "role": "Archive footage",
        "title": "Patrick Willems Video Essays",
        "year": "2020",
        "description": "(TV Series documentary) Self - How IMAX Improved Nolan's Style (2020) ... Self"
      },
      {
        "id": "tt9496010",
        "role": "Archive footage",
        "title": "Patrick Explains",
        "year": "2018",
        "description": "(TV Series documentary) Self - Star Wars: The Last Jedi (2018) ... Self"
      },
      {
        "id": "tt2610260",
        "role": "Archive footage",
        "title": "Honest Trailers",
        "year": "2018",
        "description": "(TV Series) Self - Every Christopher Nolan Movie (2018) ... Self"
      },
      {
        "id": "tt0167515",
        "role": "Archive footage",
        "title": "Access Hollywood",
        "year": "2017",
        "description": "(TV Series) Self - Episode #21.276 (2017) ... Self"
      },
      {
        "id": "tt0247094",
        "role": "Archive footage",
        "title": "Extra",
        "year": "2017",
        "description": "(TV Series) Self - Episode #23.276 (2017) ... Self - Episode #23.274 (2017) ... Self"
      },
      {
        "id": "tt0081857",
        "role": "Archive footage",
        "title": "Entertainment Tonight",
        "year": "2017",
        "description": "(TV Series) Self - Episode #36.269 (2017) ... Self - Episode #36.264 (2017) ... Self - Episode #36.258 (2017) ... Self"
      },
      {
        "id": "tt7229822",
        "role": "Archive footage",
        "title": "History Buffs",
        "year": "2017",
        "description": "(TV Series documentary) Self - Dunkirk Trailer Impressions (2017) ... Self"
      },
      {
        "id": "tt15292952",
        "role": "Archive footage",
        "title": "Behind the Scenes",
        "year": "2017/V",
        "description": "(Documentary) Self"
      },
      {
        "id": "tt0123338",
        "role": "Archive footage",
        "title": "60 Minutes",
        "year": "2016",
        "description": "(TV Series documentary) Self - Director (segment \"Michael Caine\") - The New Force Behind Star Wars/Michael Caine/And the Nominees Are (2016) ... Self - Director (segment \"Michael Caine\")"
      },
      {
        "id": "tt2796782",
        "role": "Archive footage",
        "title": "The Oscars",
        "year": "2014",
        "description": "(TV Special) Self - Accepting on Behalf of Academy Award of Merit"
      },
      {
        "id": "tt2241422",
        "role": "Archive footage",
        "title": "Too Young to Die",
        "year": "2012",
        "description": "(TV Series documentary) Self - Heath Ledger: Liebling der Götter (2012) ... Self (uncredited)"
      },
      {
        "id": "tt1599373",
        "role": "Archive footage",
        "title": "Secret Origin: The Story of DC Comics",
        "year": "2010",
        "description": "(Video documentary) Self - Director 'Batman Begins' and 'The Dark Knight'"
      },
      {
        "id": "tt0318251",
        "role": "Archive footage",
        "title": "Troldspejlet",
        "year": "2005",
        "description": "(TV Series) Self - Director / Co-Writer - Episode #34.13 (2005) ... Self - Director / Co-Writer"
      }
    ],
    "errorMessage": ""
  }

  useEffect(() => {
    // dispatch(singleActorFetched(actor))
    // getSearchActorInfo(params.id)
    // .then(data => dispatch(singleActorFetched(data)));

    dispatch(fetchActor(params.id))
    return () => {
      dispatch(singleActorDisFetched())
    }
  }, [])

  return (
    <>
      <Header />
      {singleActorStatus === 'loading'
        ?
        <SkeletonItem />
        :
        <div className="actor">
          <img src={singleActorItem.image} alt={singleActorItem.name} />
          <div className="actor__info info">
            <h1 className="info__title">{singleActorItem.name}</h1>
            <div>
              <div>Роль:</div>
              <div>{singleActorItem.role}</div>
            </div>
            <div>
              <div>Дата рождения:</div>
              <div>{singleActorItem.birthDate}</div>
            </div>
            {singleActorItem.deathDate
              ?
              <div>
                <div>Дата смерти:</div>
                <div>{singleActorItem.deathDate}</div>
              </div>
              :
              null
            }
            <div>
              <div>Награды:</div>
              <div>{singleActorItem.awards}</div>
            </div>
            <div>
              <div>Рост:</div>
              <div>{singleActorItem.height}</div>
            </div>
            <div>
              <div>Описание:</div>
              <div>{singleActorItem.summary}</div>
            </div>
          </div>
          <div className="actor__right-bar">
            <div className="actor__known-for">
              <div>Лучшие фильмы:</div>
              <div>{singleActorItem.knownFor.map(item => {
                return (
                  <div className='link' onClick={() => navigate(`/film/${item.id}`)} key={item.id}>
                    {item.title}
                  </div>
                )
              })}</div>
            </div>
          </div>
          <div className="actor__cast cast">
            <label className='cast__title' htmlFor="role">Каст:</label>
            <select onChange={e => setCastType(e.target.value)} name="role" id="role">
              <option value="Producer">Продюсер</option>
              <option value="Writer">Сценарист</option>
              <option value="Director">Режесер</option>
              <option value="Cinematographer">Оператор</option>
              <option value="Editor">Монтажер</option>
              <option value="Art department">Художник постановщик</option>
              <option value="Composer">Композитор</option>
              <option value="Thanks">Благодарность</option>
              <option value="Thanks">Актер: играет самого себя</option>
              <option value="Archive footage">Архивные кадры</option>
            </select>

            <div className='cast__items'>{singleActorItem.castMovies.map((item, i) => {
              return (
                <div className='cast__item' key={i}>
                  <div>{item.title} {item.year}</div>
                  <div>{item.description}</div>
                  <div>{item.role}</div>
                </div>
              )
            })}</div>
            {!castShowAll &&
              <button
                className='cast__btn'
                onClick={() => setCastShowAll(true)}
              >
                Показать все
              </button>
            }

          </div>
        </div>
      }

    </>

  )
}

export default SingleActor