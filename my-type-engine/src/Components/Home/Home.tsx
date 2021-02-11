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
    Card
} from "react-bootstrap";
import "./Home.css";
/*
 * For the main search use https://deezerdevs-deezer.p.rapidapi.com/search?q=whatever to get some results
    Use the id property of any resulting track to fetch detail information with https://deezerdevs-deezer.p.rapidapi.com/track/:id
 */

/*
 
 fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=${eminem}", {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "072ce4fe12mshfaac4b953a12006p1fbad8jsn60c87d42c08b",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
    }
})
.then(response => {
    console.log(response);
})
.catch(err => {
    console.error(err);
});

 */



function Home() {
    // type data = Array<any>;
    // type setData= React.Dispatch<React.SetStateAction<never[]>>
    // type search = Array<any>;
    // type setSearch= React.Dispatch<React.SetStateAction<string>>

    const [data, setData] = useState([1]);
    const [search, setSearch] = useState("");

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
                setData(data);
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

                {data.map((song) =>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                )
                }



            </div>
        </div>
    );
}

export default Home;
