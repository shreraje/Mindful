import React from 'react';
import Navbar from '../components/Navbars/Navbar';
import 'materialize-css';
import { Tab, Tabs, Slider, Slide, Caption } from 'react-materialize';
import ReactPlayer from "react-player"
import Footer from '../components/Footer/Footer';

function Video() {
    return(
        <div style={{justifyContent:'center'}}>
            <Navbar/>
            <Tabs className="tab-demo z-depth-1 tabs-fixed-width">


            {/* First tab */}
            <Tab
                options={{
                // duration: 300,
                onShow: null,
                responsiveThreshold: Infinity,
                swipeable: false
                }}
                title="Yoga"
            >
                <Slider
                    fullscreen={false}
                    options={{
                        duration: 500,
                        height: 600,
                        indicators: true,
                        interval: 2000000
                    }}
                    >
                    <Slide image={<img alt="" src="http://lorempixel.com/780/580/nature/1"/>}>
                        <Caption placement="center">
                        <h3>
                            25 Min Total Body Yoga & Tension Release | Yoga Healing From The Inside Out
                        
                        </h3>
                        <h5 className="light grey-text text-lighten-3">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=GjMSgK5H4ho"
                        />
                        </h5>
                        </Caption>
                    </Slide>
                    <Slide image={<img alt="" src="http://lorempixel.com/780/580/nature/2"/>}>
                        <Caption placement="center">
                        <h3>
                            25 Minute Yoga for Strength | Breathe and Flow Yoga
                        </h3>
                        <h5 className="light grey-text text-lighten-3">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=52GAcwujm0k"
                        />
                        </h5>
                        </Caption>
                    </Slide>
                    <Slide image={<img alt="" src="https://lorempixel.com/780/580/nature/3"/>}>
                        <Caption placement="center">
                        <h3>
                            Full Body Stretch Yoga - 30 Minute Flexibility & Deep Stretch Workout
                        </h3>
                        <h5 className="light grey-text text-lighten-3">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=3SZ2xVnbcxY"
                        />
                        </h5>
                        </Caption>
                    </Slide>
                    <Slide image={<img alt="" src="https://lorempixel.com/580/250/nature/4"/>}>
                        <Caption placement="center">
                        <h3>
                            Yoga For Anxiety and Stress
                        </h3>
                        <h5 className="light grey-text text-lighten-3">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=hJbRpHZr_d0"
                        />
                        </h5>
                        </Caption>
                    </Slide>
                </Slider>
            </Tab>





            {/* Second tab */}
            <Tab
                active
                options={{
                // duration: 300,
                onShow: null,
                responsiveThreshold: Infinity,
                swipeable: false
                }}
                title="Peaceful Sounds"
            >
                <Slider
                    fullscreen={false}
                    options={{
                        duration: 500,
                        height: 600,
                        indicators: true,
                        interval: 2000000
                    }}
                    >
                    <Slide image={<img alt="" src="http://lorempixel.com/780/580/nature/1"/>}>
                        <Caption placement="center">
                        <h3>
                            Relaxing Sleep Music • Deep Sleeping Music, Relaxing Music, Stress Relief, Meditation Music (Flying)  
                        </h3>
                        <h5 className="light grey-text text-lighten-3">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=1ZYbU82GVz4"
                        />
                        </h5>
                        </Caption>
                    </Slide>
                    <Slide image={<img alt="" src="http://lorempixel.com/780/580/nature/2"/>}>
                        <Caption placement="center">
                        <h3>
                        Gentle Night Rain 12 HOURS - Sleep, Insomnia, Meditation, Relaxing, Study
                        </h3>
                        <h5 className="light grey-text text-lighten-3">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=7JyE47-Ykjo"
                        />
                        </h5>
                        </Caption>
                    </Slide>
                    <Slide image={<img alt="" src="https://lorempixel.com/780/580/nature/3"/>}>
                        <Caption placement="center">
                        <h3>
                            Peaceful Piano & Soft Rain - Relaxing Sleep Music, A Bitter Rain
                        </h3>
                        <h5 className="light grey-text text-lighten-3">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=hj83cwfOF3Y"
                        />
                        </h5>
                        </Caption>
                    </Slide>
                    <Slide image={<img alt="" src="https://lorempixel.com/580/250/nature/4"/>}>
                        <Caption placement="center">
                        <h3>
                        Ocean Sounds and Forest Nature Sound: Meditation, Sleep
                        </h3>
                        <h5 className="light grey-text text-lighten-3">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=ySL3NllIhfA"
                        />
                        </h5>
                        </Caption>
                    </Slide>
                </Slider>
            </Tab>












            {/* Third Tab */}
            <Tab
                options={{
                // duration: 300,
                onShow: null,
                responsiveThreshold: Infinity,
                swipeable: false
                }}
                title="Meditation"
            >
                <Slider
                    fullscreen={false}
                    options={{
                        duration: 500,
                        height: 600,
                        indicators: true,
                        interval: 2000000
                    }}
                    >
                    <Slide image={<img alt="" src="http://lorempixel.com/780/580/nature/1"/>}>
                        <Caption placement="center">
                        <h3>
                            10-Minute Meditation For Beginners
                        </h3>
                        <h5 className="light grey-text text-lighten-3">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=U9YKY7fdwyg"
                        />
                        </h5>
                        </Caption>
                    </Slide>
                    <Slide image={<img alt="" src="http://lorempixel.com/780/580/nature/2"/>}>
                        <Caption placement="center">
                        <h3>
                        5-Minute Meditation You Can Do Anywhere
                        </h3>
                        <h5 className="light grey-text text-lighten-3">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=inpok4MKVLM"
                        />
                        </h5>
                        </Caption>
                    </Slide>
                    <Slide image={<img alt="" src="https://lorempixel.com/780/580/nature/3"/>}>
                        <Caption placement="center">
                        <h3>
                            Guided Meditation - Blissful Deep Relaxation
                        </h3>
                        <h5 className="light grey-text text-lighten-3">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=Jyy0ra2WcQQ"
                        />
                        </h5>
                        </Caption>
                    </Slide>
                    <Slide image={<img alt="" src="https://lorempixel.com/580/250/nature/4"/>}>
                        <Caption placement="center">
                        <h3>
                        Guided Meditation for Detachment From Over-Thinking (Anxiety / OCD / Depression)
                        </h3>
                        <h5 className="light grey-text text-lighten-3">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=1vx8iUvfyCY"
                        />
                        </h5>
                        </Caption>
                    </Slide>
                </Slider>
            </Tab>
            </Tabs>
        </div>
    );
};

export default Video;