import styled from 'styled-components'

import {
    Card
} from '@aws-amplify/ui-react'

const Background = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2)
`

const ModalContainer = styled(Card)`
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: 100%;
    max-height: 90%;
    overflow: auto;
    transform: translate(-50%,-50%);
`

export default function Modal({children}){
    return(
        <Background>
            <ModalContainer variation="outlined">
                {children}
            </ModalContainer>
        </Background>
    )
}
