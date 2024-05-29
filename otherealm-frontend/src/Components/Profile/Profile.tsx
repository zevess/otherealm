import { Box } from "@mui/material"
import { ProfileName } from "./ProfileName"
import { ListWindow } from "./ListWindow"
import { SectionToggleGroup } from "../Toggles/SectionToggleGroup"
import React from "react"
import {  itemTypes,  sections } from "../../utils/itemTypes"
import { handleChange } from "../../utils/handleChange"
import { useAppSelector } from "../../store"
import { useAppDispatch } from "../../store/hooks"
import { setCurrentFilterItem } from "../../store/reducers/stateReducer"
import { Navigate, useParams } from "react-router-dom"
import { PostList } from "../Posts/PostList"
import { clearUserState, fetchOneUser } from "../../store/users"
import { FollowsList } from "./FollowsList"


export const Profile = () => {
  const params = useParams();
  const dispatch = useAppDispatch();

  const nameSelector = String(useAppSelector((state) => state.usersData.currentUser.items?.name));

  const [type, setType] = React.useState(Object.keys(itemTypes)[0]);
  const [section, setSection] = React.useState('list')
  const [error, setError] = React.useState(false);

  
  React.useEffect(() => {
    dispatch(setCurrentFilterItem(type));
  }, [type])


  React.useEffect(() => {
    dispatch(clearUserState());
    dispatch(fetchOneUser(`${params.nick}`)).catch(_err => setError(true))
  
  }, [params.nick]);

  if (error) {
    return <Navigate to={'/error'} />
  }

  return (
    <div className="profileWrapper">
      <ProfileName name={nameSelector} />
      <div className="profileLists">

        <Box display={'flex'} flexDirection={'column'} marginRight={'20px'} position={'static'}>
          <SectionToggleGroup items={sections} handleChange={(event, newAlignment) => handleChange(event, newAlignment, setSection)} alignment={section}></SectionToggleGroup>
        </Box>
        {section == 'list' && <ListWindow type={type} setType={setType}/> }
        {section == 'posts' && <PostList />}
        {section == 'follows' && <FollowsList/>}

      </div>
    </div>
  )
}







