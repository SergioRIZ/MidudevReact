import { useState } from "react"
export function TwitterFollowCard ({username ='unknown', children, initialisFollowing}){
    const [isFollowing, setIsFollowing] = useState(initialisFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassnName = isFollowing 
    ? 'tw-followCard-button is-following' 
    : 'tw-followCard-button'
    const imageSrc = `https://unavatar.io/${username}`

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return(
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
        <img 
        className='tw-followCard-avatar'
        src= {imageSrc} 
        alt="Avatar midu" />
        <div className='tw-followCard-info'> 
            <strong>{children}</strong>
            <span className='tw-followCard-infoUserName'>@{username}</span>
        </div>
        </header>

        <aside>
            <button className={buttonClassnName} onClick={handleClick}>
                <span className="tw-followCard-text">{text}</span>
                <span className="tw-followCard-stopFollow">Dejar de seguir</span>
            </button>
        </aside>
    </article>
    )
}