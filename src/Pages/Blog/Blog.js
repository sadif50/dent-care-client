import React from 'react';
import { Accordion } from 'react-bootstrap';
import useTitle from '../../utilities/useTitle';

const Blog = () => {
    // Dynamic Title
    useTitle('Blogs || Dent Care');

    return (
        <div className='container my-5'>
            <div className='text-center'>
                <h2 className='fw-bold fs-1'>Some Question And Answer</h2>
            </div>
            <hr className='my-5' />
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header className='primary_bg'>01. What are the Differences between SQL and NoSQL?</Accordion.Header>
                    <Accordion.Body className='bg-dark'>
                        <table className='table table-bordered text-white'>
                            <thead>
                                <tr>
                                    <th>SQL</th>
                                    <th>NoSQL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Relational database management system.</td>
                                    <td>Non-relational database management system.</td>
                                </tr>
                                <tr>
                                    <td>It is not suited for hierarchical data storage.</td>
                                    <td>It is the best suited for hierarchical data storage.</td>
                                </tr>
                                <tr>
                                    <td>It has static schema.</td>
                                    <td>It has flexible schema.</td>
                                </tr>
                                <tr>
                                    <td>It is good for complex queries.</td>
                                    <td>It is not so good for complex queries.</td>
                                </tr>
                                <tr>
                                    <td>Vertically Scalable</td>
                                    <td>Horizontally scalable</td>
                                </tr>
                            </tbody>
                        </table>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header className='primary_bg'>02. What is JWT, and how does it works?</Accordion.Header>
                    <Accordion.Body className='bg-dark text-white'>
                        <strong>Answer: </strong>JWT is a good way of securely transmitting information between parties because they can be signed, which means I can be sure that the senders are who they say they are. Additionally, the structure of a JWT allows me to verify that the content hasn't been tampered with.
                        <br/>
                        <br/>
                        <strong>How it works: </strong> First, the user or client app sends a sign-in request. In this step, essentially, a username, password, or any other type of sign-in credentials the user provides will travel to the API. Once verified, the API will create a JSON Web Token and sign it using a secret key. Then, the API will return that token back to the client application.
                        Finally, the client app will receive the token, verify it on its own side to ensure it’s authentic, and then use it on every subsequent request. Therefore, it can authenticate the user without them having to send their credentials anymore.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header className='primary_bg'>03. What is the difference between JavaScript and Node Js?</Accordion.Header>
                    <Accordion.Body className='bg-dark text-white'>
                    <table className='table table-bordered text-white'>
                        <thead>
                            <tr>
                                <th>JavaScript</th>
                                <th>NodeJs</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>JavaScript is a proper high-level programming language used to create web scripts.</td>
                                <td>Node.js is a run time environment built on google’s v8 engine</td>
                            </tr>
                            <tr>
                                <td>JavaScript is executed in the browser.</td>
                                <td>Node.js gives us the ability to execute JavaScript outside the browser.</td>
                            </tr>
                            <tr>
                                <td>It is basically used on the client-side.</td>
                                <td>It is mostly used on the server-side.</td>
                            </tr>
                            <tr>
                                <td>Javascript is capable enough to add HTML and play with the DOM. </td>
                                <td>Nodejs does not have capability to add HTML tags.</td>
                            </tr>
                            <tr>
                                <td>JavaScript follows the standard of JavaScript when writing programs.</td>
                                <td>Node.js is written in C++ while using the v8 engine.</td>
                            </tr>
                        </tbody>
                    </table>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header className='primary_bg'>04. How does NodeJs handle multiple requests at the same time?</Accordion.Header>
                    <Accordion.Body className='bg-dark text-white'>
                        <strong>Answer: </strong> The event loop is what allows Node.js to handle multiple requests at the same time, despite the fact that JavaScript is single-threaded.
                        <br></br>
                        <br></br>
                        NodeJS receives multiple client requests and places them into EventQueue. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them without needing any blocking IO operations. If the current request uses blocking IO operations, the event loop sees whether there are threads available in the thread pool, picks up one thread from the thread pool and assigns the particular request to the picked thread. That thread does the blocking IO operations and sends the response back to the event loop and once the response gets to the event loop, the event loop sends the response back to the client.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;