import React from 'react';
import P from './Posts.module.css';


const PostsContent = (props) => {
    return (
        <div className={P.content}>
            <h1>{props.fullname}</h1>
            {props.title}
            <img src={props.img_src}/>
            <p>{props.text}</p>
            <div className={P.assessement}>
                <button>{props.like} Like</button>
                <button>{props.Dislike} DisLike</button>
            </div>
        </div>
    );
}

let MasPosts =
[
    {
        fullname: "Semyon Sazanov",
        img_src: "https://images.wallpaperscraft.ru/image/krolik_milyj_zaiats_166717_1920x1080.jpg",
        like: 123, Dislike: 12, text: "hdfjkdfjkvndfkvndfvkjndvknjnvdf"
    },
    {
        fullname: "Mark Sazanov",
        img_src: "https://images.wallpaperscraft.ru/image/mashina_sportkar_krasnyj_166713_1920x1080.jpg",
        like: 324, Dislike: 23, text: "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"
    },
    {
        fullname: "Dana Sazanov",
        img_src: "https://images.wallpaperscraft.ru/image/zakat_more_skaly_pejzazh_94498_1920x1080.jpg",
        like: 523, Dislike: 0, text: "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr"
    },
    {
        fullname: "Arina Sazanov",
        img_src: "https://images.wallpaperscraft.ru/image/zakat_skaly_glyby_166708_1920x1080.jpg",
        like: 657, Dislike: 3, text: "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"
    },
    {
        fullname: "Liya Sazanova",
        img_src: "https://images.wallpaperscraft.ru/image/zakat_skaly_voda_149948_1920x1080.jpg",
        like: 1253, Dislike: 58, text: "fffffffffffffffffffffffffffffff"
    }
]

let Posts_Mas = MasPosts.map ( P => (   <PostsContent fullname={P.fullname}
                                                      img_src={P.img_src}
                                                      like={P.like} Dislike={P.Dislike}
                                                      text={P.text}/>) )


const Posts = (props) => {
    return (
        <div className={P.intro}>
            <div className={P.intro_inner}>
                {Posts_Mas}
            </div>
        </div>);
}
export default Posts;