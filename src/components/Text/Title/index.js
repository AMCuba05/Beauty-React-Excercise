import {Typography} from "antd";

export const TitleText = ({children, color = '#000', fontSize= 48,  textAlign= 'left'}) => {
    return(<Typography.Title style={{ color: color, fontSize: fontSize, textAlign: textAlign, fontFamily: 'AvenirNext' }}>{children}</Typography.Title>)
}
