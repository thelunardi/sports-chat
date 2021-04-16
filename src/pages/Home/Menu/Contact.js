import { AiFillStar, BsFillCircleFill } from 'react-icons/all'
import { useCallback, useEffect, useState } from 'react'

import http from '../../../utils/axios'
// import { useCallback, useEffect, useState } from "react"
// import http from "../../../utils/axios"

const COLORS = {
    on: 'green',
    off: 'gray',
    occuped: 'red',
    out: 'orange',
}

function Contact() {
    const [contacts, setContacts] = useState([])

    const getContacts = useCallback(async () => {
        const response = await http.get('api/user/contacts')
        setContacts(response.data.contacts)
    }, [setContacts])

    useEffect(() => {
        getContacts()
    }, [getContacts])

    return (
        <div className="mt-10">
            <div className="flex">
                <h1 className="mx-1 mt-1 text-gray-400"><AiFillStar /></h1>
                <h1 className="text-gray-400">DIRECT MESSAGES</h1>
                <h1 className="mx-1 text-gray-400">({ contacts.length })</h1>
            </div>
            <div className="flex flex-col pl-1">
                {
                    contacts.map(user => (
                        <a href={ `/direct/${ user.username }` } key={ user.id } className="mt-1 flex justify-between">
                            <h1 className="text-gray-300 p-1">@ { user.username }</h1>
                            <h1 className="text-gray-300 p-1" style={ { color: COLORS[user.status] } }>
                                <BsFillCircleFill /></h1>
                        </a>
                    ))
                }
            </div>
        </div>
    )
}

export default Contact