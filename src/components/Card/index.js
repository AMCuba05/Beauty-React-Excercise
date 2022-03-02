import React, { useState } from 'react';
import { Card, Avatar } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import './styles.css'

const { Meta } = Card;

export const UserCard = ({data}) => {

    const [ fav, setFav ] = useState(false)

    const onClickFav = () => {
        setFav(!fav)
    }
    return (
        <Card
            style={{ width: 350, marginLeft: '25px', marginRight: '25px', marginBottom: '40px', fontFamily: 'AvenirNext' }}
            cover={
                <img
                    alt="example"
                    src="https://img2.fonwall.ru/o/li/art-artistic-artwork-dvdq.jpg"
                />
            }
        >
            <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={data ? data.name : ''}
                description={`${data ? data.address.city : ''}, ${data ? data.address.street : ''}`}
            />
            <div className={'like-container'} onClick={onClickFav}>
                { fav ?
                    <HeartFilled style={{color: 'rgb(224, 84, 112)'}} /> : <HeartOutlined />
                }
            </div>
        </Card>
    );
};
