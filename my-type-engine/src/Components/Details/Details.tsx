import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from "react-router-dom"
import { AlbumGeneral } from "../../interface"
import { Card } from "react-bootstrap"
import "./Details.css"

type TParams = { id: string };

function Details(props: RouteComponentProps<TParams>) {
    // console.log(props)
    const [singleDetail, setSingleDetail] = useState<AlbumGeneral>()
    const [loading, setLoading] = useState<boolean>(true)


    //  Use the id property of any resulting track to fetch detail information with https://deezerdevs-deezer.p.rapidapi.com/track/:id

    const getSignleArtist = async () => {
        try {
            const resp = await fetch(
                `https://deezerdevs-deezer.p.rapidapi.com/track/${props.match.params.id}`,
                {
                    method: "GET",
                    headers: {
                        "x-rapidapi-key":
                            "072ce4fe12mshfaac4b953a12006p1fbad8jsn60c87d42c08b",
                        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                    },
                }
            );

            if (resp.ok) {
                console.log(resp)
                const theSong = await resp.json()
                console.log(JSON.stringify(theSong))
                setSingleDetail(theSong)
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {

        getSignleArtist()


    }, [])


    return (
        <div className="details_container">
            <Card className="img_det">
            <h1 style={{ color: "black" }}>{props.match.params.id}</h1>
                <Card.Img variant="top" src={singleDetail?.artist.picture} />
                <Card.Body>
                    <Card.Text>
                        {singleDetail?.title}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Details
