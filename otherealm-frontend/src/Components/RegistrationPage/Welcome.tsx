import { CardMedia, Paper, Typography } from "@mui/material"
import { ColorButtonBlue } from "../../utils/CustomButton"
import { Link, useNavigate } from "react-router-dom"
import { useAppSelector } from "../../store";

export const Welcome = () => {

    const selectIsAuth = useAppSelector((state) => state.authData.data);
    const navigate = useNavigate()
    return (
        <div className="welcomeWrapper">

            <div className="welcomeInfo">
                <Paper elevation={3} className="welcomePaper" sx={{ borderRadius: '40px' }}>
                    <p className="welcomeTextField">
                        добро пожаловать на OTHEREALM
                    </p>
                    <Typography variant="h6"> - ваш уникальный портал в мир медиа-франшиз! Здесь вы сможете найти все, что связано с вашими любимыми фильмами, играми, книгами и многим другим.</Typography>
                </Paper>
            </div>


            <div className="welcomeAbout">
                <Paper style={{ borderRadius: '30px', border: 'solid 3px', borderColor: 'black' }} className="welcomePaper" elevation={3}>
                    <Typography sx={{ padding: '15px' }} variant="h6">
                        OTHEREALM предлагает уникальную возможность ознакомиться с информацией о различных объектах медиа-франшиз, оставлять свои комментарии, создавать обсуждения, а также добавлять их в свой профиль для создания персональных коллекций.
                    </Typography>
                </Paper>
            </div>

            <p className="welcomeOpportunities__title">Среди возможностей есть:</p>

            <div className="welcomeOpportunitiesItem">
                <img src="https://i.ibb.co/5cjKRty/1.png" alt="" className="welcomeGif" />
                <div className="welcomeTextField-about">
                    <Typography sx={{ padding: '15px' }} variant="h6">
                        создание персональных разделов
                    </Typography>
                </div>
            </div>

            <div className="welcomeOpportunitiesItem">

                <div className="welcomeTextField-about" >
                    <Typography sx={{ padding: '15px' }} variant="h6">
                        поиск объектов медиа-франшиз
                    </Typography>
                </div>

                <img src="https://i.ibb.co/7QPSGJb/2.png" alt="" className="welcomeGif" />


            </div>

            <div className="welcomeOpportunitiesItem">
                <img src="https://i.ibb.co/Bj760QF/3.png" alt="" className="welcomeGif" />
                <div className="welcomeTextField-about"  >
                    <Typography sx={{ padding: '15px' }} variant="h6">
                        просмотр информации и
                        добавление объекта медиа-франшизы в коллекции
                    </Typography>
                </div>
            </div>

            <div className="welcomeOpportunitiesItem">

                <div className="welcomeTextField-about"  >
                    <Typography sx={{ padding: '15px' }} variant="h6">
                        оставление комментариев под страницами объектов медиа-франшиз
                    </Typography>
                </div>

                <img src="https://i.ibb.co/SBm7rbT/4.png" alt="" className="welcomeGif" />


            </div>

            <div className="welcomeOpportunitiesItem">
                <img src="https://i.ibb.co/0tGQcVt/5.png" alt="" className="welcomeGif" />
                <div className="welcomeTextField-about"  >
                    <Typography sx={{ padding: '15px' }} variant="h6">
                        обсуждения с другими пользователи объектов медиа-франшиз
                    </Typography>
                </div>
            </div>

            <div className="welcomeOpportunitiesItem">

                <div className="welcomeTextField-about"  >
                    <Typography sx={{ padding: '15px' }} variant="h6">
                        просмотр профиля других пользоватей и их коллекций
                    </Typography>
                </div>

                <img src="https://i.ibb.co/5jLbS9X/6.png" alt="" className="welcomeGif" />

            </div>

            <div className="welcomeOpportunitiesItem">
                <img src="https://i.ibb.co/Th8mGPP/7.png" alt="" className="welcomeGif" />
                <div className="welcomeTextField-about"  >
                    <Typography sx={{ padding: '15px' }} variant="h6">
                        просмотр постов других пользоватей и подписка на них, для отображения постов в ленте
                    </Typography>
                </div>
            </div>

            <div className="welcomeOpportunitiesItem">

                <div className="welcomeTextField-about"  >
                    <Typography sx={{ padding: '15px' }} variant="h6">
                        создание своих постов
                    </Typography>
                </div>

                <img src="https://i.ibb.co/9vCBBWc/8.png" alt="" className="welcomeGif" />

            </div>


            <div className="welcomeTextField-about__end">
                <Typography variant="h6">
                    Присоединяйтесь к нашему сообществу и погрузитесь в увлекательный мир медиа-франшиз вместе с OTHEREALM!
                </Typography>
            </div>


            {!selectIsAuth &&
                <ColorButtonBlue sx={{ height: '70px', maxWidth: '280px', margin: '0 auto' }} onClick={() => navigate('/auth')}>присоединиться</ColorButtonBlue>
            }


        </div>
    )
}