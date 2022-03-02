import {Input, Button} from 'antd';
import './styles.css'
import {useEffect, useState} from "react";

export const Search = ({onSearch, color= 'rgb(68,133,176)'}) => {
    const [value, setValue] = useState('');

    useEffect(()=>{
        if (value === ''){
            onSearch(value)
        }
    },[value])

    const onClickSearch = () =>{
        onSearch(value);
    }
    return<Input.Group style={{display: 'flex', flexDirection: 'row',marginTop: '10px'}} compact>
        <Input style={{borderTopLeftRadius: '10px', borderBottomLeftRadius:'10px', fontFamily: 'AvenirNext'}} placeholder={'Search Artists'} onChange={e => setValue(e.target.value)} value={value} />
        <Button style={{borderTopRightRadius: '10px', borderBottomRightRadius:'10px', background: color, fontFamily: 'AvenirNext'}} type="primary" onClick={onClickSearch}>Search</Button>
    </Input.Group>
}
