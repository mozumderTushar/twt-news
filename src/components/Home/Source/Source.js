import React, { useEffect, useState } from 'react';
import { Card } from 'antd';

const Source = () => {

    const [source, setSource] = useState([]);

    useEffect(() => {
        fetch('https://newsapi.org/v2/sources?apiKey=35bd3533096246b29267e2407cfc578c')
            .then(response => response.json())
            .then(data => setSource(data.sources))
    }, [])

    console.log(source);
    return (
        <div>
            <h1>Source</h1>
            {
                source.map(article => (

                    <div className="site-card-border-less-wrapper" key={article.index}>
                        <Card bordered={false} style={{ width: 500 }}>
                            <h3>{article.description}</h3>
                            <h6>{article.name}</h6>
                            <a target="_blank" href={`${article.url}`}>{article.url}</a>
                        </Card>
                    </div>
                ))
            }
        </div>
    );
};

export default Source;