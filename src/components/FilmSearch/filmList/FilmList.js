import { useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


import FilmListItem from '../filmListItem/FilmListItem';
import Skeleton from '../../skeletonList/SkeletonList';
import './filmList.scss';


const FilmList = () => {

   const searchStatus = useSelector(state => state.search.searchStatus);
   const searchItems = useSelector(state => {
      if (!state.search.searchShowAll) {return state.search.searchItems.slice(0, 6)}
         return state.search.searchItems;
   });

   const renderFilms = (arr) => {
      return arr.map(({...props}) => {
         return (
            <CSSTransition
               key={props.id}
               timeout={500}
               classNames="my-node"
               >
               <FilmListItem {...props}/>
               {/* <FilmListItem {...props} onDelete={() => deleteHero(id)}/> */}
            </CSSTransition>
         )
      })
   }

   let elements = '';
       
   if (searchStatus === "loading") {
      return <Skeleton/>;
   } else if (searchStatus === "error") {
      return <h5 className="text-center mt-5">Ошибка загрузки</h5>
   } else if (searchStatus === "idle") {
      elements = renderFilms(searchItems);
   }

   return (
      <TransitionGroup component={null}>
            {elements}
      </TransitionGroup>
   )

}

export default FilmList;



