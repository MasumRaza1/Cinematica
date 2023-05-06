import React, {memo} from 'react'
import { TitleWrapper } from './Title.styled'

const Title = ({ subtitle, theme }) => {
    return (
        <TitleWrapper>
            <h1 className={theme}>Cinematica 🎬</h1>
            <p className={theme}>{subtitle}</p>
        </TitleWrapper>
    );
}

export default memo(Title)
