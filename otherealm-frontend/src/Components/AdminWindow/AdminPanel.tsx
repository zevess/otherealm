import { Box, Typography } from "@mui/material"
import { ProfileName } from "../Profile/ProfileName"
import { ListWindow } from "../Profile/ListWindow"
import { SectionToggleGroup } from "../Toggles/SectionToggleGroup"
import React from "react"
import { adminSections, itemTypes, sections } from "../../utils/itemTypes"
import { handleChange } from "../../utils/handleChange"
import { useAppSelector } from "../../store/hooks"
import { useAppDispatch } from "../../store/hooks"
import { setCurrentFilterItem } from "../../store/reducers/stateReducer"
import { Navigate, useParams } from "react-router-dom"
import { PostList } from "../Posts/PostList"
import { clearUserState, fetchOneUser } from "../../store/users"
import { FollowsList } from "../Profile/FollowsList"
import { ErrorBoundary } from "../ErrorPage"
import { AllComents } from "./AllComments"
import { AllPosts } from "./AllPosts"
import { AllDiscusses } from "./AllDiscusses"


export const AdminPanel = () => {
  const params = useParams();
  const dispatch = useAppDispatch();

  const userSelector = useAppSelector((state) => state.authData.data);
  const adminId = useAppSelector((state) => state.state.adminId)

  const [section, setSection] = React.useState('posts')
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    dispatch(clearUserState());
    dispatch(fetchOneUser(`${params.nick}`)).catch(_err => setError(true))
  }, [params.nick]);

  if (error) {
    return <Navigate to={'/error'} />
  }

  return (
    <>
      {userSelector?._id == adminId ?
        <div className="profileWrapper">
          {/* <ProfileName name={nameSelector} /> */}
          <Typography variant="h5">Панель администратора</Typography>
          <div className="profileLists">
            <Box display={'flex'} flexDirection={'column'} marginRight={'20px'} position={'static'}>
              <SectionToggleGroup items={adminSections} handleChange={(event, newAlignment) => handleChange(event, newAlignment, setSection)} alignment={section}></SectionToggleGroup>
            </Box>
            {section == 'comments' && <AllComents />}
            {section == 'posts' && <AllPosts />}
            {section == 'discusses' && <AllDiscusses />}

          </div>
        </div>
        : <ErrorBoundary />
      }
    </>
  )
}







