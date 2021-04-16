import { useEffect, useState, useCallback } from 'react'
import { AiOutlinePlus, CgArrowsExchange } from 'react-icons/all'

import http from '../../../utils/axios'

function Channels() {
    const [channels, setChannels] = useState([])

    const getChannels = useCallback(async () => {
        const response = await http.get('api/user/channels')
        setChannels(response.data.channels)
    }, [setChannels])

    useEffect(() => {
        getChannels()
    }, [getChannels])

    return (
        <div className="mt-10">
            <div className="flex justify-between">
                <div className="flex">
                    <h1 className="mx-1 mt-1 text-gray-400"><CgArrowsExchange /></h1>
                    <h1 className="text-gray-400">CHANNELS</h1>
                </div>
                <a href="/">
                    <h1 className="mx-1 mt-1 text-gray-400"><AiOutlinePlus /></h1>
                </a>
            </div>
            <div className="flex flex-col pl-1">
                {
                    channels.map(_channel => (
                        _channel.selected ?
                            <a
                                key={ _channel.id }
                                href="/"
                                className="mt-1 p-1 text-gray-300 bg-brand-topicselect"
                            >
                                # { _channel.name }
                            </a>
                            :
                            <a
                                key={ _channel.id }
                                href="/"
                                className="mt-1 p-1 text-gray-300 bg-brand-topic"
                            >
                                # { _channel.name }
                            </a>
                    ))
                }
            </div>
        </div>
    )
}

export default Channels