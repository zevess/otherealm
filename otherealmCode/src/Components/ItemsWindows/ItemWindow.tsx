import { Avatar, Box, IconButton, InputAdornment, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material"
import { FranchiseCard } from "../Cards/FranchiseCard"
import { ButtonUsage } from "../Button"
import React, { FC, useEffect } from "react";
import { deepOrange } from "@mui/material/colors";
import { InputText } from "../InputText";
import { Comment } from "./CommentWindow/Comment";
import { CommentSection } from "./CommentWindow/CommentSection";
import { DiscussSection, } from "./DiscussWindow/DiscussSection";
import { ItemTitle } from "./ItemComponents/ItemTitle";
import { handleChange } from "../../utils/handleChange";
import { ItemType } from "./ItemComponents/ItemType";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../store";
import { useAppDispatch } from "../../store/hooks";
import { filmItemFetch } from "../../store/filmFetch/filmFetch";
import { ItemDescription } from "./ItemComponents/ItemDescription";


export const ItemWindows = () => {

    const dispatch = useAppDispatch();
    const params = useParams();
    const paramsId = String(params.id);
    
    const [alignment, setAlignment] = React.useState('comments');

    const token = useAppSelector((state) => state.filmData.kpToken)
    const currentFilmItem = useAppSelector((state) => state.filmData.currentFilmItem)
    
    
    const title = `${currentFilmItem?.name}`;
    let fontSize;
    if (title.length > 100) fontSize = '20px';
    
    
    
    React.useEffect(()=>{
        dispatch(filmItemFetch({paramsId, token}));
    }, [])
    
    console.log(`${currentFilmItem?.type}`)
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '1500px', marginLeft: 'auto', marginRight: 'auto' }} >
            <Box maxWidth={'1500px'} width={'1500px'}>
                <Box component={'img'} src={`${currentFilmItem?.poster?.url}`} width={'100%'} height={'483px'} borderRadius={'16px'} sx={{ objectFit: 'cover', filter: 'blur(5px)' }}></Box>
                <Box bgcolor={'white'} border={'solid 2px black'} height={'auto'} paddingBottom={'20px'} >
                    <Box display={'flex'} justifyContent={'flex-end'}>
                        <Box marginTop={'-20%'} display={'flex'} alignItems={'flex-start'} >

                            <Box zIndex={1} height={'571px'} component={'img'} src={`${currentFilmItem?.poster?.url}`} sx={{
                                aspectRatio: '380/571'
                            }}></Box>


                            <ItemTitle title={`${title}`} originalTitle={`${currentFilmItem?.alternativeName}`} />
                            <ItemType itemType={`${currentFilmItem?.type}`} />
                        </Box>
                        <Box width={'64%'} display={'flex'} flexDirection={'column'} >
                            
                            <Box width={'100%'} bgcolor={'rgba(239, 239, 239, 1)'} display={'flex'} height={'70px'}>
                                <Box width={'100%'} border={'solid 1px black'} borderTop={'none'} borderLeft={'none'} height={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                    <Typography variant="h5">инфо</Typography>
                                </Box>
                                <ButtonUsage onClick={() => alert("W")} style={{ width: '30%', backgroundColor: 'rgba(239, 239, 239, 1)' }}>
                                    добавить в раздел
                                </ButtonUsage>
                            </Box>
                            <Box marginRight={'auto'} marginLeft={'40px'} marginTop={'20px'} display={'flex'} flexDirection={'column'}> 
                                <Box display={'flex'}>
                                    <Typography variant='h5' paddingRight={'10px'}>страны: </Typography>
                                {currentFilmItem?.countries?.map((country, index) =>(
                                    <Typography paddingRight={'10px'} variant="h5" key={index}>{country.name}{index !== currentFilmItem.countries?.length - 1 && ", "}</Typography>
                                ))}
                                </Box>
                            </Box>
                            
                        </Box>
                    </Box>
                    <Box display={"flex"}>
                        {/* <Box marginLeft={'50px'}>
                            <FranchiseCard title={"Wizarding World"} image={"../src/assets/img/Wizarding_World_logo.svg.png"}></FranchiseCard>
                        </Box> */}
                        {/* <Box display={'flex'} flexDirection={'column'} alignItems={'flex-start'} marginTop={'-180px'}>
                            <Box display={'flex'}>
                                <Typography variant='h5' paddingRight={'10px'}>страны: </Typography>
                            {currentFilmItem?.countries?.map((country, index) =>(
                                <Typography paddingRight={'10px'} variant="h5" key={index}>{country.name}{index !== currentFilmItem.countries?.length - 1 && ", "}</Typography>
                            ))}
                            </Box>
                            <Typography variant="h5">год: {currentFilmItem?.year}</Typography>
                            <Box display={'flex'}>
                                <Typography variant='h5' paddingRight={'10px'}>жанры: </Typography>
                            {currentFilmItem?.genres?.map((genres, index) =>(
                                <Typography paddingRight={'10px'} variant="h5" key={index}>{genres.name}{index !== currentFilmItem.genres?.length - 1 && ", "}</Typography>
                            ))}</Box>
                        </Box> */}
                    </Box>

                    <ItemDescription description={`${currentFilmItem?.description}`}/>

                </Box>

            </Box>

            <ToggleButtonGroup color="primary" exclusive onChange={(event, newAlignment) => handleChange(event, newAlignment, setAlignment)} value={alignment} sx={{ width: '90%', display: 'flex', justifyContent: 'space-between', marginTop: '60px', marginBottom: '40px' }}>
                <ToggleButton value={'comments'}>комментарии</ToggleButton>
                <ToggleButton value={'discuss'} style={{ borderLeft: '1px solid rgba(0, 0, 0, 0.12)' }}>обсуждения</ToggleButton>
            </ToggleButtonGroup>

            <Box width={'90%'}>
                {alignment == 'comments' ? <CommentSection /> : <DiscussSection />}
            </Box>
        </div>
    )
}


// const FilmInfo = (token: string, paramsId: string, setFilmData: React.Dispatch<React.SetStateAction<string>>) => {
//     React.useEffect(() => {
//         const options = {
//             method: 'GET',
//             headers: {accept: 'application/json', 'X-API-KEY': token}
//           };
          
//           fetch(`https://api.kinopoisk.dev/v1.4/movie/${paramsId}`, options)
//             .then(response => response.json())
//             .then(response => setFilmData(response))
//             .catch(err => console.error(err));
//     }, []);
// }

// ageRating
// : 
// 16
// alternativeName
// : 
// "Avengers: Infinity War"
// backdrop
// : 
// {url: 'https://imagetmdb.com/t/p/original/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg', previewUrl: 'https://imagetmdb.com/t/p/w500/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg'}
// budget
// : 
// {value: 321000000, currency: '$'}
// countries
// : 
// [{…}]
// deletedAt
// : 
// null
// description
// : 
// "Пока Мстители и их союзники продолжают защищать мир от различных опасностей, с которыми не смог бы справиться один супергерой, новая угроза возникает из космоса: Танос. Межгалактический тиран преследует цель собрать все шесть Камней Бесконечности - артефакты невероятной силы, с помощью которых можно менять реальность по своему желанию. Всё, с чем Мстители сталкивались ранее, вело к этому моменту – судьба Земли никогда ещё не была столь неопределённой."
// distributors
// : 
// {distributor: 'WDSSPR', distributorRelease: null}
// enName
// : 
// "Avengers: Infinity War Part I"
// externalId
// : 
// {tmdb: 299536, imdb: 'tt4154756'}
// facts
// : 
// (8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// fees
// : 
// {world: {…}, russia: {…}, usa: {…}}
// genres
// : 
// (3) [{…}, {…}, {…}]
// id
// : 
// 843649
// images
// : 
// {framesCount: 73}
// imagesInfo
// : 
// {framesCount: 73}
// isSeries
// : 
// false
// lists
// : 
// (15) ['hd-blockbusters', 'marvel_universe', 'box-usa-all-time', 'box-usa-first-weekend', 'box-russia-dollar', 'box-world-not-usa', 'box-usa-first-day', 'box-russia-first-weekend-dollar', 'box-total', 'box-usa-inflation', 'most-expensive', 'honourable_mentions_XXI', 'top500', 'top250', 'popular-films']
// logo
// : 
// {url: 'https://avatars.mds.yandex.net/get-ott/2439731/2a00000178c586374cd541732e2109769c2d/orig'}
// movieLength
// : 
// 149
// name
// : 
// "Мстители: Война бесконечности"
// names
// : 
// (58) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// networks
// : 
// null
// persons
// : 
// (42) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// poster
// : 
// {url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/af92d310-4ae5-4daa-b42c-5bcc380c2e6e/orig', previewUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image…773646/af92d310-4ae5-4daa-b42c-5bcc380c2e6e/x1000'}
// premiere
// : 
// {world: '2018-04-23T00:00:00.000Z', russia: '2018-05-03T00:00:00.000Z', digital: '2018-08-03T00:00:00.000Z'}
// productionCompanies
// : 
// [{…}]
// rating
// : 
// {kp: 8.073, imdb: 8.4, filmCritics: 7.6, russianFilmCritics: 86.3636, await: null}
// ratingMpaa
// : 
// "pg13"
// seasonsInfo
// : 
// []
// sequelsAndPrequels
// : 
// (5) [{…}, {…}, {…}, {…}, {…}]
// seriesLength
// : 
// null
// shortDescription
// : 
// "Титан Танос вынашивает страшный план — угрозу всей Вселенной. Предпоследний фильм о суперкоманде Marvel"
// similarMovies
// : 
// (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// slogan
// : 
// "An entire universe. Once and for all."
// spokenLanguages
// : 
// (2) [{…}, {…}]
// status
// : 
// null
// technology
// : 
// {hasImax: true, has3D: true}
// ticketsOnSale
// : 
// false
// top10
// : 
// null
// top250
// : 
// 138
// totalSeriesLength
// : 
// null
// type
// : 
// "movie"
// typeNumber
// : 
// 1
// updatedAt
// : 
// "2024-02-04T22:21:18.224Z"
// videos
// : 
// {trailers: Array(4)}
// votes
// : 
// {kp: 827786, imdb: 1177548, filmCritics: 492, russianFilmCritics: 22, await: 77943}
// watchability
// : 
// {items: Array(0)}
// year
// : 
// 2018
// [[Prototype]]
// : 
// Object
