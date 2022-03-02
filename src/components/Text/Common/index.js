import {Typography} from "antd";

export const CommonText = ({children, color = '#000', fontSize= 14}) => {
    return(<Typography.Text style={{ color: color, fontSize: fontSize}}>{children}</Typography.Text>)
}
