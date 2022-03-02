import {Button} from "antd";

export const CommonButton = ({children, color}) => {
    return<Button style={{background: 'rgb(224, 84, 112)', borderRadius: 10, outline: 'none' }} size={'large'} type="primary">{children}</Button>
}
