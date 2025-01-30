import React from "react";
import { useAppSelector } from "../../store";
import { useAppDispatch } from "../../store/hooks";
import axios from '../../axios'
import { PopupWithTrigger } from "../../utils/Popup";
import { Box, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { addFavourites, clearFavourite } from "../../store/favourite";


export const AddToSection = () => {

    const dispatch = useAppDispatch()
    const currentUrl = window.location.href;
    const parts = currentUrl.split('/');
    const itemType = (parts.slice(-2))[0];

    const itemTitle = useAppSelector((state) => {
        if (itemType == 'game') {
            return state.gameData.currentGameItem?.name
        }
        else if ((itemType == ('movie') || (itemType == ('tv-series')) || (itemType == ('cartoon')) || (itemType == ('animated-series')) || (itemType == ('anime')))) {
            return state.filmData.currentFilmItem?.name
        }
        else if (itemType == 'book') {
            return state.bookData.currentBookItem?.volumeInfo?.title
        }
    });

    const itemBackgroundImage = useAppSelector((state) => {
        if (itemType == 'game') {
            return state.gameData.currentGameItem?.background_image
        }
        else if ((itemType == ('movie') || (itemType == ('tv-series')) || (itemType == ('cartoon')) || (itemType == ('animated-series')) || (itemType == ('anime')))) {
            return state.filmData.currentFilmItem?.poster?.url
        }
        else if (itemType == 'book') {
            return state.bookData.currentBookItem?.volumeInfo?.imageLinks?.thumbnail
        }
    })

    const itemId = useAppSelector((state) => {
        if (itemType == 'game') {
            return state.gameData.currentGameItem?.id
        }
        else if ((itemType == ('movie') || (itemType == ('tv-series')) || (itemType == ('cartoon')) || (itemType == ('animated-series')) || (itemType == ('anime')))) {
            return state.filmData.currentFilmItem?.id
        }
        else if (itemType == 'book') {
            return state.bookData.currentBookItem?.id
        }
    });

    const userId = (useAppSelector((state) => state.authData.data?._id));
    const userNick = (useAppSelector((state) => state.authData.data?.nick));
    const isAuth = useAppSelector((state) => state.authData.data);
    

    const favourites = useAppSelector((state) => state.favouriteData.favourites.items);


    const [favouriteArr, setFavouriteArr] = React.useState<any>({});

    favourites.forEach((item: any) => {
        const foundItem = item.items.find((i: any) => i.itemId === String(itemId));
        favouriteArr[item.title] = { checked: foundItem ? true : false, _id: item._id };
    })

    const [arrFavourite, setArrFavourite] = React.useState<any>(favouriteArr);

    React.useEffect(() => {
        if (userId !== undefined) {
            axios.get(`/favourite/${userId}`).then(res => {
                dispatch(addFavourites(res.data));
            })
        }

        return () => {
            dispatch(clearFavourite());
        }
    }, [])

    const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const { checked, value, id } = event.target;
        setArrFavourite((prevState: any) => {
            return {
                ...prevState,
                [value]: { ...prevState[value], checked }
            }
        })
        try {
            const fields = {
                itemId, itemTitle, itemBackgroundImage, itemType
            }

            if (checked) {
                await axios.patch(`/favourite/add/${id}`, fields);
            }

            if (!checked) {
                await axios.patch(`/favourite/remove/${id}`, fields);
            }

        } catch (err) {
            console.warn(err);
            alert('ошибка при добавлении в раздел')
        }
    }


    if(isAuth) return (
        <PopupWithTrigger id="popup-with-portal" buttonLabel="ДОБАВИТЬ В РАЗДЕЛ">
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                {favourites.length == 0 && (
                    <>
                        <span>списки отсутствуют.</span>
                        <span>создайте списки в <a href={`/profile/${userNick}`}>профиле</a></span>
                    </>

                )}
                <FormGroup>
                    {(arrFavourite !== undefined) && favourites.map((items: any) => (
                        <FormControlLabel key={items._id} control={<Checkbox key={items._id} checked={arrFavourite[items.title].checked} id={items._id} value={items.title} onChange={onChange} />} label={items.title} />
                    ))}
                </FormGroup>
            </Box>
        </PopupWithTrigger>
    )
}