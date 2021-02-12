import { type } from "os";
import React, { useState, useEffect } from "react";
import {
    NavDropdown,
    Form,
    FormControl,
    Button,
    Nav,
    Navbar,
    Container,
    Card,
    Row,
    Col
} from "react-bootstrap";
import "./Home.css";
import {AlbumGeneral} from "../../interface"
import {RouteComponentProps} from "react-router-dom"
/*
 * For the main search use https://deezerdevs-deezer.p.rapidapi.com/search?q=whatever to get some results
    Use the id property of any resulting track to fetch detail information with https://deezerdevs-deezer.p.rapidapi.com/track/:id
 */


function Home(props:RouteComponentProps) {

    // type setData= React.Dispatch<React.SetStateAction<never[]>>
    // type search = Array<any>;
    // type setSearch= React.Dispatch<React.SetStateAction<string>>
    
    const [data, setData] = useState<AlbumGeneral[]>([]);
    const [search, setSearch] = useState<string>("");
    
    const getData = async () => {
        try {
            const resp = await fetch(
                `https://deezerdevs-deezer.p.rapidapi.com/search?q=${search}`,
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
                    console.log(resp);
                    const data = await resp.json();
                    
                    const myData= data.data
                    setData(myData);
                    
                    console.log(props)
                    console.log(JSON.stringify(myData[0]))
                }
            } catch (error) {
                console.log(error);
        }
    };

    const handleSumbit = (e: any) => {
        e.preventDefault();
        getData();
        console.log("fuck");
    };



    return (
        <div className="home_container">
            <div className="home_header">
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">
                        <b>"AnyType"</b> music engine
          </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="hey">
                        <Form inline onSubmit={(e) => handleSumbit(e)}>
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="mr-sm-2"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <Button type="submit" variant="outline-success">
                                Search
              </Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <div className="home_main">
                
<Container className="mt-5">
    <Row >

{data.slice(0,5).map((song) =>
<Col>
<Card style={{ width: '12rem' }}>

                        <Card.Img variant="top" src={song.album.cover} />
                        <Card.Body className="the_card">
                            <Card.Title>{song.artist.name}</Card.Title>
                            <Card.Text>
                            {song.title}
                            {song.album.id}
                               
                </Card.Text>
                            <Button variant="primary" onClick={()=>props.history.push(`/details/${song.album.id}`)}>Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                )
                
            } 

       
            </Row>
</Container>
              



            </div>
        </div>
    );
}

export default Home;
