import { FC, useState, useRef } from 'react'
import Link from 'next/link'
import { Overlay } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faClone } from '@fortawesome/free-regular-svg-icons'
import styled from 'styled-components'

import { Navbar } from '../components'

const StyledBody = styled.div`
    margin: 26px;
    & > div:first-of-type {
        margin: 24px 0 32px;
    }
    & > :nth-of-type(2) {
        font-size: 11px;
        font-weight: 500;
    }
    & p {
        margin-bottom: 32px;
    }
`

const StyledContractAddress = styled.div`
    border: 1px solid #ffffff33;
    background-color: #252525;
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 5px 0 11px;
    font-size: 11px;
    position: relative;
    max-width: 322px;
    & button {
        border: none;
        background-color: #8146ff;
        margin: 5px;
        width: 30px;
        height: 30px;
        position: absolute;
        right: 0;
        & svg {
            color: #fff;
            width: 17px;
        }
    }
    & span {
        opacity: 0.5;
    }
`
const StyledOverlayContent = styled.div`
    && {
        background-color: #fff;
        color: #000;
        padding: 5px 8px;
        border-radius: 3px;
        position: relative;
        margin-bottom: 8px;
        &::before {
            position: absolute;
            display: block;
            content: '';
            border-color: transparent;
            border-style: solid;
            bottom: -6px;
            left: 22px;
            border-width: 0.5rem 0.5rem 0;
            border-top-color: #fff;
        }
    }
`

const About: FC = () => {
    const text = '0x2a01cC3ed670e67EB386D55365FD9eFa893B51EB'
    const [copied, setCopied] = useState(false)
    const copyBtnRef = useRef(null)

    const copyToClipboardHandler = () => {
        if (!copied) {
            setCopied(true)
            navigator.clipboard.writeText(text)
            setTimeout(() => {
                setCopied(false)
            }, 2500)
        }
    }

    return (
        <>
            <Navbar />
            <StyledBody>
                <h1>What is EVE?</h1>
                <div>
                    <p>
                        EVE is a private gentleman club caring for our lovely
                        cute and genuine <Link href="#">EVE Crypto Cats</Link>
                    </p>
                    <p>
                        You can adopt any by using the{' '}
                        <Link href="#">EVE token</Link>
                    </p>
                    <div>Want to help develop EVE Club App?</div>
                    <div>
                        <Link href="#">Open source on Github</Link>
                    </div>
                </div>
                <div>Contract Address</div>
                <StyledContractAddress>
                    <span>{text}</span>
                    <button ref={copyBtnRef} onClick={copyToClipboardHandler}>
                        <FontAwesomeIcon icon={copied ? faCheck : faClone} />
                    </button>
                    <Overlay
                        target={copyBtnRef.current}
                        show={copied}
                        placement="top"
                    >
                        {({
                            placement,
                            arrowProps,
                            show: _show,
                            popper,
                            ...props
                        }) => (
                            <StyledOverlayContent
                                {...props}
                                style={{ ...props.style }}
                            >
                                copied
                            </StyledOverlayContent>
                        )}
                    </Overlay>
                </StyledContractAddress>
            </StyledBody>
        </>
    )
}

export default About
