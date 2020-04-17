import React from 'react';
import M from './Message.module.css';
import {NavLink} from "react-router-dom";


const Person = (props) => {
    return (
        <div className={M.person}>
            <NavLink to={'/Message/' + props.id} activeClassName={M.person_link}
                     id={M.person_link}>{props.name}</NavLink>
        </div>
    );
}

const Mes = (props) => {
    return (
        <div className={M.mes_m}>
            <p>{props.text}</p>
        </div>
    );
}

let MassPerson = [
    {id: 1, name: "Semyon"},
    {id: 2, name: "Kiodla"},
    {id: 3, name: "CCvffd"},
    {id: 4, name: "bfbdbf"},
    {id: 5, name: "Semfdg"}
]

let Person_mas = MassPerson.map(p =>  <Person id={p.id} name={p.name}/> );

let MasMessage = [
    {id: 1, text: "fds dvfdfv sdvsdvsdv sdvsd svsdfsd sdfsgsdsdf fdhergsr sertxcv"},
    {id: 2, text: "vxcvzxvsdfsaczxfvzdvzxbs"},
    {id: 3, text: "strhsdfgsdfgsdfg"},
    {id: 4, text: "dfsgshjysdgwertewgsre"},
    {id: 5, text: "werghdfgsdhfjrtjdrth"}
]

let Message_Mas = MasMessage.map (M => (  <Mes text={M.text}/>))

const Message = (props) => {
    return (
        <div className={M.message_intro}>
            <div>
                {Person_mas}
            </div>
            <div>
                {Message_Mas}
            </div>
        </div>);
}
export default Message;