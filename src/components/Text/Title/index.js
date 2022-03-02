import {Typography} from "antd";

export const TitleText = ({children, color = '#000', fontSize= 48}) => {
    return(<Typography.Title style={{ color: color, fontSize: fontSize}}>{children}</Typography.Title>)
}
