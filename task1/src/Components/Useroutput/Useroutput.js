import React, { Component } from 'react';

    const Useroutput=(props)=>{
        return (
            <div>
                <p>
                Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, search engine, cloud computing, software, and hardware. It is considered one of the Big Four technology companies, alongside Amazon, Apple, and Facebook
                </p>
                <p>
                Google was founded in September 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University in California. Together they own about 14 percent of its shares and control 56 percent of the stockholder voting power through supervoting stock. They incorporated Google as a California privately held company on September 4, 1998
                </p>
                <p>My age{props.age}</p>
            </div>
        )
    }

export default Useroutput;