import React, { useState, useEffect } from 'react';
import { Post } from '../../shared/models/Post';
import { fetchPosts } from '../../shared/services/api/PostsApi';
import { Layout } from '../../shared/layout';
import { ListingTools } from '../../shared/components';


export const PostsPage: React.FC = () => {
    const [data, setData] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchPosts()
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error: Error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>Erro: {error}</div>;
    }

    return (
        <Layout
            title="Posts"
            toolbar={(
                <ListingTools

                />
            )}
        >
            <div>
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            </div>
        </Layout>

    );
};


