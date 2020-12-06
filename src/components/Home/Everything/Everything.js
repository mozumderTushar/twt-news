import React, { useEffect, useState } from 'react';
import { Card } from 'antd';

const Everything = () => {

    const [everything, setEverything] = useState([])

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=35bd3533096246b29267e2407cfc578c')
            .then(response => response.json())
            .then(data => setEverything(data.articles))
    }, [])

    return (
        <div>
            <h1>Everything</h1>
            <div className='row'>

                {
                    everything.map(article => (

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
        </div>
    );
};

export default Everything;