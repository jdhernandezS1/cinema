import React, { useState, useEffect } from 'react';
import styles from '../css/movies/movies.module.css'

const GetAPI = ({ apiUrl, movie }) => {
    const [data, setData] = useState(null);
    const comment = styles.comment
    useEffect(() => {
        fetchData();
    }, [apiUrl]);

    const fetchData = async () => {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    return (
        <>
            <div className={styles.comments}>
                {data ? (
                    data.map((currentItem) => (
                        <div className='comment'>
                            <span className={styles.comments_title}>
                                {currentItem.author}: 
                            </span>
                            <span className={styles.comments_content}>
                                {currentItem.content}.
                            </span>
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