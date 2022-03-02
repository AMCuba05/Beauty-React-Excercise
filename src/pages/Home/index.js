import {TitleText} from "../../components/Text/Title";
import {CommonText} from "../../components/Text/Common";
import {UserCard} from "../../components/Card";
import {useSelector} from "react-redux";
import {getUsers} from "../../redux/reducers/users";
import './styles.css'
import {CommonButton} from "../../components/Button/Common";
import {useEffect, useState} from "react";
import {Search} from "../../components/Search";

export const Home = () => {
    const users = useSelector(getUsers)
    const [filtered, setFiltered] = useState([])

    useEffect(()=> {
        setFiltered(users)
    }, [users])

    const onSearch = (filter) => {
        setFiltered(users.filter( user => user.name.includes(filter)));
    }

    return(
        <div className={'main'}>
            <div className={'img-background'}>
                <TitleText color={'#fff'} fontSize={60} textAlign={'center'}>Browse Our Artists</TitleText>
                <TitleText  color={'#fff'} fontSize={24} textAlign={'center'}>Or Add Your Portfolio to Be Discovered</TitleText>
                <CommonButton color={'rgb(224, 84, 112)'}>Build Your Portfolio</CommonButton>
            </div>
            <div className={'search-container'}>
                <CommonText  fontSize={24} textAlign={'center'}>Explore Our Top Rated Artists Below</CommonText>
                <Search onSearch={onSearch}/>
            </div>
            <div className={'container'}>
                {filtered ? filtered.map( user => {
                    return<UserCard data={user} />
                }) : null}
            </div>
        </div>
    )
}
