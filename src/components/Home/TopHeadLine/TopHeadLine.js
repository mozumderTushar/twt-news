import React, { useEffect, useState } from 'react';
import { Card } from 'antd';

const TopHeadLine = () => {

    const [headLine, setHeadLine] = useState([])

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=35bd3533096246b29267e2407cfc578c')
            .then(response => response.json())
            .then(data => setHeadLine(data.articles))
    }, [])

    return (
        <div className='row'>

            {
                headLine.map(article => (

                    <div className="site-card-border-less-wrapper" key={article.index}>
                        <Card bordered={false} style={{ width: 500 }}>
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