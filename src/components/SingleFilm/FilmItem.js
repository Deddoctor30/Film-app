import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filmFetching, filmFetched, filmDisFetched } from './FilmItemSlice';
import { useParams } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import ImdbService from '../../services/imdbService';
import Header from '../Header/Header';
import Spinner from '../skeleton/Spinner';

import './filmItem.scss';
import Slider from "react-slick";
import '../../libs/slick/slick.css';
import '../../libs/slick/slick-theme.css';
import { useRef } from 'react';


const item = {
   "id": "tt1375666",
   "title": "Inception",
   "originalTitle": "",
   "fullTitle": "Inception (2010)",
   "type": "Movie",
   "year": "2010",
   "image": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6762_AL_.jpg",
   "releaseDate": "2010-07-16",
   "runtimeMins": "148",
   "runtimeStr": "2h 28min",
   "plot": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
   "plotLocal": "",
   "plotLocalIsRtl": false,
   "awards": "Top rated movie #14 | Won 4 Oscars, 158 wins & 220 nominations total",
   "directors": "Christopher Nolan",
   "directorList": [
     {
       "id": "nm0634240",
       "name": "Christopher Nolan"
     }
   ],
   "writers": "Christopher Nolan",
   "writerList": [
     {
       "id": "nm0634240",
       "name": "Christopher Nolan"
     }
   ],
   "stars": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page",
   "starList": [
     {
       "id": "nm0000138",
       "name": "Leonardo DiCaprio"
     },
     {
       "id": "nm0330687",
       "name": "Joseph Gordon-Levitt"
     },
     {
       "id": "nm0680983",
       "name": "Elliot Page"
     }
   ],
   "actorList": [
     {
       "id": "nm0000138",
       "image": "https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_Ratio1.0000_AL_.jpg",
       "name": "Leonardo DiCaprio",
       "asCharacter": "Cobb"
     },
     {
       "id": "nm0330687",
       "image": "https://m.media-amazon.com/images/M/MV5BMTY3NTk0NDI3Ml5BMl5BanBnXkFtZTgwNDA3NjY0MjE@._V1_Ratio1.0000_AL_.jpg",
       "name": "Joseph Gordon-Levitt",
       "asCharacter": "Arthur"
     },
     {
       "id": "nm0680983",
       "image": "https://m.media-amazon.com/images/M/MV5BNmNhZmFjM2ItNTlkNi00ZTQ4LTk3NzYtYTgwNTJiMTg4OWQzXkEyXkFqcGdeQXVyMTM1MjAxMDc3._V1_Ratio1.0000_AL_.jpg",
       "name": "Elliot Page",
       "asCharacter": "Ariadne"
     },
     {
       "id": "nm0913822",
       "image": "https://m.media-amazon.com/images/M/MV5BMTQzMTUzNjc4Nl5BMl5BanBnXkFtZTcwMTUyODU2Mw@@._V1_Ratio1.0000_AL_.jpg",
       "name": "Ken Watanabe",
       "asCharacter": "Saito"
     },
     {
       "id": "nm0362766",
       "image": "https://m.media-amazon.com/images/M/MV5BMTQ3ODEyNjA4Nl5BMl5BanBnXkFtZTgwMTE4ODMyMjE@._V1_Ratio1.0000_AL_.jpg",
       "name": "Tom Hardy",
       "asCharacter": "Eames"
     },
     {
       "id": "nm2438307",
       "image": "https://m.media-amazon.com/images/M/MV5BMTI5Nzc2NTc2MF5BMl5BanBnXkFtZTcwMDM2MTc1Mg@@._V1_Ratio1.5000_AL_.jpg",
       "name": "Dileep Rao",
       "asCharacter": "Yusuf"
     },
     {
       "id": "nm0614165",
       "image": "https://m.media-amazon.com/images/M/MV5BMTUzMjg1NzIyOV5BMl5BanBnXkFtZTYwMzg2Mjgy._V1_Ratio1.0000_AL_.jpg",
       "name": "Cillian Murphy",
       "asCharacter": "Robert Fischer"
     },
     {
       "id": "nm0000297",
       "image": "https://m.media-amazon.com/images/M/MV5BMTk1OTQ5MzUzM15BMl5BanBnXkFtZTgwMDUxMTY1NDE@._V1_Ratio1.0000_AL_.jpg",
       "name": "Tom Berenger",
       "asCharacter": "Browning"
     },
     {
       "id": "nm0182839",
       "image": "https://m.media-amazon.com/images/M/MV5BMTQxNTEzNTkwNF5BMl5BanBnXkFtZTcwNzQ2NDIwOQ@@._V1_Ratio1.0000_AL_.jpg",
       "name": "Marion Cotillard",
       "asCharacter": "Mal"
     },
     {
       "id": "nm0000592",
       "image": "https://m.media-amazon.com/images/M/MV5BMTMyMjIxMTQ2NV5BMl5BanBnXkFtZTYwNDQ0NTE1._V1_Ratio1.0000_AL_.jpg",
       "name": "Pete Postlethwaite",
       "asCharacter": "Maurice Fischer"
     },
     {
       "id": "nm0000323",
       "image": "https://m.media-amazon.com/images/M/MV5BMjAwNzIwNTQ4Ml5BMl5BanBnXkFtZTYwMzE1MTUz._V1_Ratio1.0000_AL_.jpg",
       "name": "Michael Caine",
       "asCharacter": "Miles"
     },
     {
       "id": "nm0001305",
       "image": "https://m.media-amazon.com/images/M/MV5BMTQ3MjU1MDMxM15BMl5BanBnXkFtZTgwODk5ODE4MDE@._V1_Ratio1.0000_AL_.jpg",
       "name": "Lukas Haas",
       "asCharacter": "Nash"
     },
     {
       "id": "nm2581730",
       "image": "https://imdb-api.com/images/original/nopicture.jpg",
       "name": "Tai-Li Lee",
       "asCharacter": "Tadashi"
     },
     {
       "id": "nm3637500",
       "image": "https://m.media-amazon.com/images/M/MV5BNGY5NWFkMTItNGFkNi00NzNiLWEyMDctZmM0NWNjMmVkNjg2XkEyXkFqcGdeQXVyMTAwMzUyMzUy._V1_Ratio1.0000_AL_.jpg",
       "name": "Claire Geare",
       "asCharacter": "Phillipa (3 Years Old)"
     },
     {
       "id": "nm3960408",
       "image": "https://m.media-amazon.com/images/M/MV5BN2ZjZTA4MGUtNGFiOS00MmExLTljMTQtNmVlODJmYTU2ZDU4L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNDAxOTExNTM@._V1_Ratio2.4000_AL_.jpg",
       "name": "Magnus Nolan",
       "asCharacter": "James (20 Months Old)"
     },
     {
       "id": "nm2855622",
       "image": "https://m.media-amazon.com/images/M/MV5BZTlkM2U2YWQtMjFmZS00ODVjLTg1ODMtYmRkMWUxMWZmYTE0XkEyXkFqcGdeQXVyMTI0NjI2Mzg5._V1_Ratio1.0000_AL_.jpg",
       "name": "Taylor Geare",
       "asCharacter": "Phillipa (5 Years Old)"
     },
     {
       "id": "nm3638213",
       "image": "https://imdb-api.com/images/original/nopicture.jpg",
       "name": "Johnathan Geare",
       "asCharacter": "James (3 Years Old)"
     },
     {
       "id": "nm0556070",
       "image": "https://m.media-amazon.com/images/M/MV5BNmVlMWVhYzktODE1Ny00YWYzLTlhOGYtNTZlZmNkMTJiMDAyXkEyXkFqcGdeQXVyNDAxMDUxOA@@._V1_Ratio1.0000_AL_.jpg",
       "name": "Tohoru Masamune",
       "asCharacter": "Japanese Security Guard"
     }
   ],
   "fullCast": null,
   "genres": "Action, Adventure, Sci-Fi",
   "genreList": [
     {
       "key": "Action",
       "value": "Action"
     },
     {
       "key": "Adventure",
       "value": "Adventure"
     },
     {
       "key": "Sci-Fi",
       "value": "Sci-Fi"
     }
   ],
   "companies": "Warner Bros., Legendary Entertainment, Syncopy",
   "companyList": [
     {
       "id": "co0002663",
       "name": "Warner Bros."
     },
     {
       "id": "co0159111",
       "name": "Legendary Entertainment"
     },
     {
       "id": "co0147954",
       "name": "Syncopy"
     }
   ],
   "countries": "USA, UK",
   "countryList": [
     {
       "key": "USA",
       "value": "USA"
     },
     {
       "key": "UK",
       "value": "UK"
     }
   ],
   "languages": "English, Japanese, French",
   "languageList": [
     {
       "key": "English",
       "value": "English"
     },
     {
       "key": "Japanese",
       "value": "Japanese"
     },
     {
       "key": "French",
       "value": "French"
     }
   ],
   "contentRating": "PG-13",
   "imDbRating": "8.8",
   "imDbRatingVotes": "2343947",
   "metacriticRating": "74",
   "ratings": null,
   "wikipedia": null,
   "posters": null,
   "images": null,
   "trailer": null,
   "boxOffice": {
     "budget": "$160,000,000 (estimated)",
     "openingWeekendUSA": "$62,785,337",
     "grossUSA": "$292,587,330",
     "cumulativeWorldwideGross": "$836,848,102"
   },
   "tagline": null,
   "keywords": "dream,ambiguous ending,subconscious,mindbender,surprise ending",
   "keywordList": [
     "dream",
     "ambiguous ending",
     "subconscious",
     "mindbender",
     "surprise ending"
   ],
   "similars": [
     {
       "id": "tt0816692",
       "title": "Interstellar",
       "image": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6763_AL_.jpg",
       "imDbRating": "8.6"
     },
     {
       "id": "tt0468569",
       "title": "The Dark Knight",
       "image": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_Ratio0.6763_AL_.jpg",
       "imDbRating": "9.0"
     },
     {
       "id": "tt0109830",
       "title": "Forrest Gump",
       "image": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio0.6957_AL_.jpg",
       "imDbRating": "8.8"
     },
     {
       "id": "tt0137523",
       "title": "Fight Club",
       "image": "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_Ratio0.6763_AL_.jpg",
       "imDbRating": "8.8"
     },
     {
       "id": "tt0111161",
       "title": "The Shawshank Redemption",
       "image": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6763_AL_.jpg",
       "imDbRating": "9.3"
     },
     {
       "id": "tt7286456",
       "title": "Joker",
       "image": "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6763_AL_.jpg",
       "imDbRating": "8.4"
     },
     {
       "id": "tt0114369",
       "title": "Se7en",
       "image": "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6763_AL_.jpg",
       "imDbRating": "8.6"
     },
     {
       "id": "tt0110912",
       "title": "Pulp Fiction",
       "image": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6860_AL_.jpg",
       "imDbRating": "8.9"
     },
     {
       "id": "tt0993846",
       "title": "The Wolf of Wall Street",
       "image": "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_Ratio0.6763_AL_.jpg",
       "imDbRating": "8.2"
     },
     {
       "id": "tt0133093",
       "title": "The Matrix",
       "image": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6763_AL_.jpg",
       "imDbRating": "8.7"
     },
     {
       "id": "tt1130884",
       "title": "Shutter Island",
       "image": "https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6763_AL_.jpg",
       "imDbRating": "8.2"
     },
     {
       "id": "tt0482571",
       "title": "The Prestige",
       "image": "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_Ratio0.6763_AL_.jpg",
       "imDbRating": "8.5"
     }
   ],
   "tvSeriesInfo": null,
   "tvEpisodeInfo": null,
   "errorMessage": null
}


const FilmItem = () => {
  const params = useParams();                         // Просто получаем id страницы
  const dispatch = useDispatch();
  const {getSearchMovieInfo, getSearchTestMovieInfo} = ImdbService();
  const filmStatus = useSelector(state => state.film.filmStatus);
  const filmItem = useSelector(state => {
  if (filmStatus === 'idle') {
    if (state.film.filmItem.actorList.length > 16) {
      const newActorsList = state.film.filmItem.actorList.slice(0, 16)
      return {...state.film.filmItem, actorList: newActorsList}
    } else {
      return state.filmItem
    }
  }
  });
  const navigate = useNavigate();


  // if (filmStatus === 'idle') {
  //   console.log(filmItem.image);
  // }


  // Проблема с tt0331811

  console.log('film_node');


  const howToShow = 7;
  const howToScroll = 7;

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 800,
    slidesToShow: howToShow,
    slidesToScroll: howToScroll,
    variableWidth: true,
    // centerMode: true,
    // adaptiveHeight: true,
    centerPadding: '100px',
  }

  useEffect(() => {
      dispatch(filmFetched(item))
      console.log('film_Effect');
      // getSearchMovieInfo(params.id)
      // .then(data => dispatch(filmFetched(data)));
      return () => {
        dispatch(filmDisFetched())
      }

  }, [params])

  return (
    <>
        <Header/>
        {filmStatus === 'loading' 
        ? 
        // <button style={{backgroundColor: 'gray'}} onClick={() => dispatch(filmFetched(item))}>Нажми на меня</button>
        <Spinner/>
        :
        <>
        {/* <Spinner/> */}
        <div className='film'>
          <img className='film__img' src={filmItem.image} alt={filmItem.fullTitle} />
          <div className="film__info info">
              <h1 className='info__title'>{filmItem.fullTitle}</h1>
              <div>
                <div>Жанр:</div>
                <div>{filmItem.genres}</div>
              </div>
              <div>
                <div>Продолжительность:</div> 
                <div>{filmItem.runtimeStr}</div>
              </div>
              <div> 
                <div>Режесер:</div>
                <div className='link'>{filmItem.directorList.map(item => {
                  return (
                    <div onClick={() => navigate(`/actor/${item.id}`)} key={item.id}>{item.name}</div>
                  )
                })}</div>
              </div>
              <div>
                <div>Сценаристы:</div>
                <div className='link'>{filmItem.writerList.map(item => {
                    return (
                      <div onClick={() => navigate(`/actor/${item.id}`)} key={item.id}>{item.name}</div>
                      )
                    })}</div>
              </div>
              <div> 
                <div>Производство:</div>
                <div>{filmItem.companies}</div>
              </div>
              <div>
                <div>Страна:</div>
                <div>{filmItem.countries}</div>
              </div>
              <div> 
                <div>Бюджет:</div>
                <div>{filmItem.boxOffice.budget}</div>
              </div>
              <div>
                <div>Сборы в первый уикенд: </div>
                <div>{filmItem.boxOffice.openingWeekendUSA}</div>
              </div>
              <div> 
                <div>Сборы в США:</div>
                <div>{filmItem.boxOffice.grossUSA}</div>
              </div>
              <div>
                <div>Сборы в мире: </div>
                <div>{filmItem.boxOffice.cumulativeWorldwideGross}</div>
              </div>
              <div>
                <div className='info__descr'>Описание:</div>
                <div>{filmItem.plot}</div>
              </div>
          </div>
          <div className="film__right-bar">
              <div className='film__ratio'>
                <div> 
                    <div>Возрастной рейтинг:</div>
                    <div>{filmItem.contentRating}</div>
                </div>
                <div>
                    <div>IMDB рейтинг:</div>
                    <div style={Number(filmItem.imDbRating) >= 7.0 ? {color: 'teal'} : null}>{filmItem.imDbRating}</div>
                </div>
                <div>
                    <div>Metacritic рейтинг:</div>
                    <div style={Number(filmItem.metacriticRating) >= 70 ? {color: 'teal'} : null}>{filmItem.metacriticRating}</div>
                </div>
              </div>
              <div className='film__actors'>
                <div>B главных ролях:</div>
                <div>{filmItem.actorList.map(item => {
                    return (
                      <div className='link' onClick={() => navigate(`/actor/${item.id}`)} key={item.id}>{item.name}</div>
                    )
                  })}</div>
              </div>
          </div>
          <div className="film__similars similars">
              <Slider {...sliderSettings}>{filmItem.similars.map(item => {
                return (
                    <div onClick={() => navigate(`/film/${item.id}`)} className='similars__item link' key={item.id}>
                      <img src={item.image} alt={item.title}/>
                      <h3>{item.title}</h3>
                      <span>IMDB рейтинг{item.imDbRating}</span>
                    </div>
                )
              })}
              </Slider>
          </div>
        </div>
        </>

    }
    </>

  )
}

export default FilmItem;