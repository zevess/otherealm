import { Box, Button, Divider, IconButton, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material"
import { ItemCard } from "../Cards/ItemCard"
import React, { FC } from "react"
import { ItemTypeToggleGroup } from "../Toggles/ItemTypeToggleGroup"
import { itemTypes } from "../../utils/itemTypes"
import { handleChange } from "../../utils/handleChange"
import { CreateSection } from "../SectionsPopup/CreateSection.tsx"
import axios from '../../axios.ts'
import { useAppSelector } from "../../store"
import { useAppDispatch } from "../../store/hooks.tsx"
import { clearFavourite, fetchUserFavourites } from "../../store/favourite.ts"
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { ModalWindow } from "../ModalWindow.tsx"
import { ColorButton } from "../CustomButton.ts"


interface ListWindowProps {
    type: string,
    divide?: string,
    setType: React.Dispatch<React.SetStateAction<string>>,
    setDivide?: React.Dispatch<React.SetStateAction<string>>,
}

export const ListWindow: FC<ListWindowProps> = ({ type, setType }) => {

    const dispatch = useAppDispatch();
    const userId = (useAppSelector((state) => state.authData.data?._id));
    const selectedUserId = (useAppSelector((state) => state.usersData.currentUser.items?._id));
    const favourites = useAppSelector((state) => state.favouriteData.favourites.items);
    const currentFilterItem = (useAppSelector((state) => state.state.currentFilterItem));

    const isNotSameUser = (userId == selectedUserId)

    const [alignment, setAlignment] = React.useState();
    const [editTitle, setEditTitle] = React.useState('');
    const [toggleSetting, setToggleSetting] = React.useState(Boolean);

    let currentItems: any[] = [];
    let currentFavId: any;


    const updateFavourites = () => {
        if (selectedUserId !== undefined) {
            dispatch(fetchUserFavourites(selectedUserId)).then(res => {
                setAlignment((res.payload)?.[0]?.title)
            }).catch(err => {
                console.warn(err);
            })
        }
    }

    React.useEffect(() => {
        if (selectedUserId !== undefined) {
            dispatch(fetchUserFavourites(selectedUserId)).then(res => {
                setAlignment((res.payload)?.[0]?.title)
            }).catch(err => {
                console.warn(err);
            })
        }
        return () => {
            dispatch(clearFavourite());
        }
    }, [selectedUserId])

    interface favouriteType {
        _id: string,
        title: string,
    }

    favourites.map((item: any) => {
        if (alignment == item?.title) {
            currentItems = item?.items;
            currentFavId = item?._id
        }
    })

    let filteredItems;
    const movieItems = currentItems.filter(item => item.itemType === 'movie');
    const gameItems = currentItems.filter(item => item.itemType === 'game');
    const cartoonItems = currentItems.filter(item => item.itemType === 'cartoon' || item.itemType === 'animated-series');
    const tvSeriesItems = currentItems.filter(item => item.itemType === 'tv-series');
    const animeItems = currentItems.filter(item => item.itemType === 'anime');
    const bookItems = currentItems.filter(item => item.itemType === 'book');

    if (currentFilterItem === 'all') {
        filteredItems = currentItems
    }
    if (currentFilterItem === 'movie') {
        filteredItems = movieItems
    }
    if (currentFilterItem === 'game') {
        filteredItems = gameItems
    }
    if (currentFilterItem === 'cartoon') {
        filteredItems = cartoonItems
    }
    if (currentFilterItem === 'tv-series') {
        filteredItems = tvSeriesItems
    }
    if (currentFilterItem === 'anime') {
        filteredItems = animeItems
    }
    if (currentFilterItem === 'book') {
        filteredItems = bookItems
    }


    const favId = String(currentFavId);

    const editFields = {
        editTitle,
        favId
    }



    return (
        <div className="listWindowWrapper">

            <div className="listWindowWrapper-types">
                <ItemTypeToggleGroup items={itemTypes} handleChange={(event, newAlignment) => handleChange(event, newAlignment, setType)} alignment={type} />
            </div>
            <Divider sx={{ width: '90%', margin: '0 auto' }} />
            <div className="listWindow">
                <div className="listWindowCards">
                    {(filteredItems !== undefined) && filteredItems.map((item: any) => (
                        <ItemCard key={item._id} id={item.itemId} itemTitle={item.itemTitle} itemType={item.itemType} itemPoster={item.itemBackgroundImage} />
                    ))}
                </div>
                <div className="listWindowTogglesSection">
                    <ToggleButtonGroup className="listWindowToggleGroup" value={alignment} exclusive onChange={
                        (event, newAlignment) => {
                            handleChange(event, newAlignment, setAlignment);

                        }}>
                        {favourites.map((item: favouriteType) => (
                            <ToggleButton className="listWindowToggleGroup__button" id={item?._id} key={item?._id} value={item?.title}>
                                {item?.title}
                                {isNotSameUser && <IconButton onClick={() => {
                                    setToggleSetting(true)
                                }}>
                                    <SettingsOutlinedIcon />
                                </IconButton>}
                            </ToggleButton>
                        ))}
                    </ToggleButtonGroup>
                    {isNotSameUser && <CreateSection updateFavourites={updateFavourites} />}
                </div>

                {toggleSetting && <ModalWindow open={toggleSetting} handleClose={() => setToggleSetting(false)}>
                    <div className="sectionToggleSettings">
                        <Box width={'100%'}>
                            <Typography textAlign={'center'} variant="h4">{alignment}</Typography>

                            <div className="sectionToggleSettings-inputs">
                                <TextField onChange={(event) => setEditTitle(event.target.value)} size="medium" placeholder="изменить название раздела" className="sectionToggleSettings-inputs__textfield"></TextField>

                                <div className="sectionToggleSettings-inputs__buttons">
                                    <ColorButton onClick={() => {
                                        axios.delete(`/favourite/remove/${favId}`).then(() => {
                                            setToggleSetting(false)
                                            if (favourites.length == 1) {
                                                dispatch(clearFavourite());
                                            }
                                        }).catch(err => {
                                            console.warn(err);
                                        }).finally(() => updateFavourites())
                                    }} >удалить</ColorButton>
                                    <Button variant="contained" onClick={() => {
                                        axios.post(`/favourite/edit/${selectedUserId}`, editFields).then(() => {
                                            updateFavourites()
                                            setToggleSetting(false)

                                        }).catch(err => {
                                            console.warn(err);
                                            alert('раздел с таким названием уже есть');
                                        })
                                    }}>сохранить</Button>
                                </div>
                            </div>
                        </Box>


                    </div>
                </ModalWindow>}

            </div>



        </div>
    )
}


