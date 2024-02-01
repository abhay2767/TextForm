import React from 'react'
// import { useState } from 'react'

const About = (props) => {
    // const [btnText, setbtnText] = useState("Dark mode")

    /* const [cssStyle, setcssStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    }) */

    let myStyles = {
        color: props.mode === 'dark'?'white':'black',
        backgroundColor: props.mode === 'dark'?'black':'white',
    }

    /* const toggleStyle = () =>{
        if(cssStyle.color === 'black'){
            setcssStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white'
            })
            setbtnText("Light mode")
        }
        else{
            setcssStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setbtnText("Dark mode")
        }
    } */
    return (
        <div className="container my-5" style={myStyles}>
            <h1>About us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={myStyles}>
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={myStyles} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum doloribus, deserunt labore ab dolore, aliquid hic, beatae dolores animi iste a rem ratione fuga est nostrum magnam. Repellendus, omnis voluptatum. It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyles}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyles} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyles}>
                    <h2 className="accordion-header" >
                        <button className="accordion-button collapsed"  style={myStyles} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container my-1">
                <button type="button" onClick={toggleStyle} className="btn btn-primary">{btnText}</button>
            </div> */}
        </div>
    )
}

export default About