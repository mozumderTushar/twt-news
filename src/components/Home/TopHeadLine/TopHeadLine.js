import React, { useEffect, useState } from 'react';
import { Card } from 'antd';

const TopHeadLine = ({headLine}) => {

    
    return (
        <div className='row'>
            {
                headLine.map(article => (

                    <div className="site-card-border-less-wrapper" key={article.author}>
                        <Card bordered={false} className="my-4">
                            <h3>{article.description}</h3>
                            <h6>{article.author}</h6>
                            <p>{article.content}</p>
                        </Card>
                    </div>
                ))
            }
        </div>
    );
};

export default TopHeadLine;