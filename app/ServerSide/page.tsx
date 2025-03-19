import React from 'react'
import ClientComponent from './ClientPage'
import { Post } from '../types/user'

export default async function Page() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        const post: Post = await response.json()

        return <ClientComponent post={post} />
    } catch (error) {
        console.error('Error fetching post:', error)
    }
}