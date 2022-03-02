import {Typography} from "antd";

export const CommonText = ({children, color = '#000', fontSize= 14, textAlign= 'left'}) => {
    return(<Typography.Text style={{ color: color, fontSize: fontSize, textAlign: textAlign, fontFamily: 'AvenirNext'}}>{children}</Typography.Text>)
}
