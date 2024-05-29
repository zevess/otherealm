import React from "react"
import { InputText } from "../InputText"
import { useAppDispatch } from "../../store/hooks"
import { fetchUsers } from "../../store/users"
import { useAppSelector } from "../../store"
import { ProfileCard } from "../Cards/ProfileCard"

export const UserSearch = () => {

    const dispatch = useAppDispatch()
    const foundUsers = useAppSelector(state => state.usersData.users.items)

    const [searchUsername, setSearchUsername] = React.useState('')



    return (
        <div className="userSearch">
            <InputText forComments={false} placeholder={"введите имя пользователя"} text={searchUsername} setText={setSearchUsername} onClick={()=>dispatch(fetchUsers(`${searchUsername}`))} /> 
            <div className="userSearchItems">
                {foundUsers.map((item: any) =>(
                    <ProfileCard name={item.name} nick={item.nick} avatarUrl={item.avatarUrl}/>
                ))}
            </div>
        </div>

    )
}