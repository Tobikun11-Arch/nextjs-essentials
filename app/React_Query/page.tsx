'use client'

import React from 'react'
import { useQuery } from '@tanstack/react-query';
import { Post } from '../types/user'

const fetchTodoList = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const data: Post = await response.json()
    return data
}

export default function page() {
    const { status, data, error } = useQuery({
        queryKey: ['todos'],
        queryFn: fetchTodoList
    });
    
    if (status === 'pending') {
        return <span>Loading...</span>;
    }
    
    if (status === 'error') {
        return <span>Error: {error.message}</span>;
    }
        
    return (
        <ul>
            <h1>{data.title}</h1>
        </ul>
    );
}
