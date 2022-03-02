import {Button} from "antd";

export const CommonButton = ({children, color}) => {
    return<Button style={{background: color, borderRadius: 10, borderWidth: '0px' }} size={'large'} type="primary">{children}</Button>
}
