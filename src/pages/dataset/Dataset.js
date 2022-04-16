import React from 'react'
import "../../pages/dataset/Dataset.scss";
import "../../pages/Variables.scss"

import { useState, useEffect } from "react";

function Application() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://finnhub.io/api/v1/news?category=forex&minId=10&token=c98ml9iad3ibrc52qf20`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then((actualData) => {
                setData(actualData);
                setError(null);
                console.log(actualData)
            })
            .catch((err) => {
                setError(err.message);
                setData(null);
            })
            .finally(() => {
                setLoading(false);
            });

    }, []);

    return <div className="data">
        <h1>Forex news around the world</h1>
        {loading && <div>A moment please...</div>}
        {error && (
            <div className="error">{`There is a problem fetching the post data - ${error}`}</div>
        )}
        <ul>
            {data &&
                data.map(({ id, headline, source, image, summary, url, datetime }) => (
                    <li key={id}>
                        <div className="detail-view">
                            <h3>{headline}</h3>
                            <div className="forex-info">
                                <div className="left-box">
                                    <h2>{source}</h2>
                                    <p>{summary}</p>
                                    <h3 id="datetime">{datetime = new Date(datetime * 1000).toLocaleDateString('en-US')}</h3>
                                </div>
                                <div className="right-box"><img src={image} alt="" className="headImage" /></div>
                            </div>
                            <button className="learn-more"><a href={url} className="click-more" target="_blank" rel="noreferrer">Click to learn more</a></button>
                        </div>
                    </li>
                ))}
        </ul>
    </div>;
}

function Dataset() {

    return (
        <div className="box">
            <Application></Application>
        </div>
    )
}

export default Dataset