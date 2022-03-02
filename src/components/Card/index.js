import React, { useState } from 'react';
import { Card, Avatar } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import './styles.css'

const { Meta } = Card;

export const UserCard = ({data}) => {

    return (
        <Card
            style={{ width: 300, marginLeft: '40px', marginRight: '40px', marginBottom: '40px' }}
            cover={
                <img
                    alt="example"
                    src="https://img2.fonwall.ru/o/li/art-artistic-artwork-dvdq.jpg"
                />
            }
        >
            <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={data ? data.username : ''}
                description={`${data ? data.address.city : ''}, ${data ? data.address.street : ''}`}
            />
            <div className={'like-container'}>
                { true ?
                    <HeartFilled style={{color: 'rgb(224, 84, 112)'}} /> : <HeartOutlined />
                }
            </div>
        </Card>
    );
};
