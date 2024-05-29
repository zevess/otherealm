import { CardMedia, Paper, Typography } from "@mui/material"
import { ColorButtonBlue } from "../CustomButton"
import { Link } from "react-router-dom"
import { useAppSelector } from "../../store";

export const Welcome = () => {

    const selectIsAuth = useAppSelector((state) => state.authData.data);

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
                <CardMedia className="welcomeGif" component={'video'} muted autoPlay loop image={'../src/assets/video/preview.mp4'} />
                <div className="welcomeTextField-about">
                    <Typography sx={{ padding: '15px' }} variant="h6">
                        поиск по объектам медиа-франшиз
                    </Typography>
                </div>
            </div>

            <div className="welcomeOpportunitiesItem">

                <div className="welcomeTextField-about" >
                    <Typography sx={{ padding: '15px' }} variant="h6">
                        создание коллекций в профиле
                    </Typography>
                </div>

                <CardMedia className="welcomeGif" component={'video'} muted autoPlay loop image={'../src/assets/video/section.mp4'} />


            </div>

            <div className="welcomeOpportunitiesItem">
                <CardMedia className="welcomeGif" component={'video'} muted autoPlay loop image={'../src/assets/video/favourite.mp4'} />
                <div className="welcomeTextField-about"  >
                    <Typography sx={{ padding: '15px' }} variant="h6">
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

                <CardMedia className="welcomeGif" component={'video'} muted autoPlay loop image={'../src/assets/video/comment.mp4'} />


            </div>

            <div className="welcomeOpportunitiesItem">
                <CardMedia className="welcomeGif" component={'video'} muted autoPlay loop image={'../src/assets/video/discuss.mp4'} />
                <div className="welcomeTextField-about"  >
                    <Typography sx={{ padding: '15px' }} variant="h6">
                        создание обсуждений по объекту медиа-франшиз
                    </Typography>
                </div>
            </div>

            <div className="welcomeOpportunitiesItem">

                <div className="welcomeTextField-about"  >
                    <Typography sx={{ padding: '15px' }} variant="h6">
                        просмотр профиля других пользоватей и их коллекций
                    </Typography>
                </div>

                <CardMedia className="welcomeGif" component={'video'} muted autoPlay loop image={'../src/assets/video/favv.mp4'} />

            </div>

            <div className="welcomeTextField-about__end">
                <Typography variant="h6">
                    Присоединяйтесь к нашему сообществу и погрузитесь в увлекательный мир медиа-франшиз вместе с OTHEREALM!
                </Typography>
            </div>


            {!selectIsAuth &&
                <Link to={'/auth'}>
                    <ColorButtonBlue sx={{ width: '20%', height: '70px' }}>присоединиться</ColorButtonBlue>
                </Link>
            }


        </div>
    )
}