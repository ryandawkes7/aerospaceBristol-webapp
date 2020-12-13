// import React, {Component} from 'react';
// import WheelComponent from "react-wheel-of-prizes";
// import 'react-wheel-of-prizes/dist/index.css';
//
// class WheelSpin extends Component {
//
//     constructor (props) {
//         super(props);
//
//         this.segments = ['30', '60', '100', '150', '200', '250']
//         this.segmentColors = [ "rgba(0,0,0,0.6)", "#F0CF50", "#815CD1", "#3DA5E0", "#34A24F", "#F9AA1F", "#EC3F3F", "#FF9000", ]
//
//     }
//
//
//     render () {
//         const onFinish = (winner) => {
//             console.log(winner)
//         }
//         return (
//             <div>
//                 <WheelComponent
//                     segments={this.segments}
//                     segColors={this.segmentColors}
//                     winningSegment={30}
//                     onFinished={(winner) => onFinish(winner)}
//                     primaryColor='black'
//                     contrastColor='white'
//                     buttonText='Spin'
//                     className="wheel-spin"
//                 />
//             </div>
//         );
//     }
// }
//
// export default WheelSpin;

import React, {Component} from "react";
import './wheelSpin.css';

export default class WheelSpin extends Component {
    render () {
        return(
            <>
                <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet" />

                <div id="wrapper">

                    <div id="wheel">

                        <div id={this.props.style ? this.props.style : this.props.class}>
                            <div className="sec"/>
                            <div className="sec"/>
                            <div className="sec"/>
                            <div className="sec"/>
                            <div className="sec"/>
                        </div>

                        <div id="spin" onClick={this.props.handleSubmit}>
                            <div id={this.props.style ? "" : 'inner-spin'} className={this.props.style ? this.props.style : ""}/>
                        </div>

                        <div id="shine" />

                    </div>

                    <div id="text"/>

                </div>

            </>
        )
    }
}
