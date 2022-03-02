import {TitleText} from "../../components/Text/Title";
import {CommonText} from "../../components/Text/Common";
import {UserCard} from "../../components/Card";
import {useSelector} from "react-redux";
import {getUsers} from "../../redux/reducers/users";
import './styles.css'
import {CommonButton} from "../../components/Button/Common";

export const Home = () => {
    const users = useSelector(getUsers)

    return(
        <div>
            <div className={'img-background'}>
                <TitleText color={'#fff'} fontSize={60}>Browse Our Artists</TitleText>
                <TitleText  color={'#fff'} fontSize={24}>Or Add Your Portfolio to Be Discovered</TitleText>
                <CommonButton color={'rgb(224, 84, 112)'}>Build Your Portfolio</CommonButton>
            </div>
            <div className={'container'}>
                {users.map( user => {
                    return<UserCard data={user} />
                })}

            </div>
        </div>
    )
}
