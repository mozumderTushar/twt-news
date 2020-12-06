import { Card } from 'antd';

const Source = ({source}) => {

    return (
        <div className='row'>
            {
                source.map(article => (

                    <div className="site-card-border-less-wrapper" key={article.name}>
                        <Card bordered={false} className='my-4'>
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