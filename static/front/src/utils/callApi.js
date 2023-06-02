import React, { useState, useEffect } from 'react';
import styles from '../css/moviesGrid.module.css'

const GetAPI = ({ apiUrl }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData();
    }, [apiUrl]);

    const fetchData = async () => {
        try {
            const response = await fetch(apiUrl);
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <>
            <div className='comments'>
                {data ? (
                    data.map((currentItem) => (
                        <div className='comment'>
                        <h3>
                            By: {currentItem.author}
                        </h3>
                        <p>
                            comment: {currentItem.body}
                        </p>
                        </div>
                    ))
                ) : (
                    <p>Loading data...</p>
                )}
            </div>
        </>
    );
};

export default GetAPI;