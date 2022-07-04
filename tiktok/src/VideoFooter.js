import React from 'react'
import "./VideoFooter.css"
import MusicNoteIcon from '@material-ui/icons/MusicNote';


function VideoFooter({channel, description, song}) {

    return (
        <div className='VideoFooter'>
            <div className="videoFooter_text">
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div className="videoFooter_ticker">
                    <MusicNoteIcon className='videoFooter_icon' />
                    <p>{song}</p>


                </div>
            </div>
            <div className="videoFooter_record">
                <img src="https://cdn.pixabay.com/photo/2014/04/02/14/04/vinyl-306070_1280.png" alt="" width={50}/>
            </div>
            {/* <Ticker>
                {({ index }) => (
                    <>
                        <h1>
                            This is the Headline of element!
                        </h1>
                    </>
                )}
            </Ticker> */}

            {/* <Ticker speed="10">{() => <h2>xyzzzzzzz</h2>}</Ticker> */}

        </div>
    )
}

export default VideoFooter