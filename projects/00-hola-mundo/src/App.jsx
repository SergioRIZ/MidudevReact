import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
const users = [
    {
        username: 'SergioR07390664',
        name: 'Sergio Roldan Ibañez',
        isFollowing: true
    },
    {
        username: 'pacolapuerta',
        name: 'Cristian Roldan Ibañez',
        isFollowing: false
    },
    {
        username: 'Quackity',
        name: 'Quackity',
        isFollowing: true
    },
    {
        username: 'midudev',
        name: 'Midudev',
        isFollowing: false
    }
]
export function App () {
    return(
        <section className='App'>
            {
                users.map(({ username, name ,isFollowing }) => {
                    return(
                        <TwitterFollowCard 
                        key={username}
                        username={username}
                        initialisFollowing={isFollowing}
                        >
                        {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}