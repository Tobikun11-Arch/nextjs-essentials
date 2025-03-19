import React from 'react'
import { Post } from '../types/user'

export default function ClientPage({ post }: { post: Post }) {

    return (
        <div>
            <h1>{post.body}</h1>
        </div>
    )
}