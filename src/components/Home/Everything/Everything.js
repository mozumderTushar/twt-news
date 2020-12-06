import { Card } from 'antd';

const Everything = ({everything}) => {
    
    return (
        <div>
      
            <div className='row'>

                {
                    everything.map(article => (

                        <div className="site-card-border-less-wrapper" key={article.content}>
                            <Card bordered={false} className='my-4'>
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