import { Typography } from "@mui/material"
import { useAppSelector } from "../../store"
import { ProfileCard } from "../Cards/ProfileCard"


export const FollowsList = () => {

    
    const userId = useAppSelector((state) => state.authData.data?._id);
    const currentUser = useAppSelector((state) => state.usersData.currentUser.items);

    const isSameUser = (userId == currentUser?._id)

    const userFollows = isSameUser ? useAppSelector((state) => state.authData.data?.follows): useAppSelector((state) => state.usersData.currentUser.items?.follows)

    return (
        <div className="listWindowWrapper">
            {userFollows?.length == 0 ? (
                <Typography variant="h3">подписки не найдены</Typography>
            ) : (
                <div className="listWindow profiles">
                    {userFollows !== undefined && userFollows?.map((item: any) => (
                        <ProfileCard name={item.name} nick={item.nick} avatarUrl={item.avatarUrl} />
                    ))}
                </div>
            )}


        </div>
    )
}