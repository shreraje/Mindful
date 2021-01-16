import React from 'react';
import Navbar from '../components/Navbars/Navbar';
import 'materialize-css';
import { Tab, Tabs, Slider, Slide, Caption } from 'react-materialize';
import ReactPlayer from "react-player"
import Footer from '../components/Footer/Footer';

function Video() {
    return(
        <div style={{justifyContent:'center', alignItems: "center"}}>
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
                        height: 800,
                        indicators: true,
                        interval: 2000000
                    }}
                    >
                    <Slide image={<img alt="" src=""/>}>
                        <Caption placement="center">
                        <h3>
                            25 Min Total Body Yoga & Tension Release | Yoga Healing From The Inside Out
                        
                        </h3>
                        <h5 className="light grey-text text-lighten-3">
                    </h5>
                            <ReactPlayer
                                url="https://www.youtube.com/watch?v=GjMSgK5H4ho"
                                className="player"  
                                width="100%"
                                height={600}
                            
                            />


                        </Caption>
                        
                    </Slide>
                    <Slide image={<img alt="" src=""/>}>
                        <Caption placement="center">
                        <h3>
                            25 Minute Yoga for Strength | Breathe and Flow Yoga
                        </h3>
                        
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=52GAcwujm0k"
                            className="player"  
                            width="100%"
                            height={600}
                        />
                       
                        </Caption>
                    </Slide>
                    <Slide image={<img alt="" src=""/>}>
                        <Caption placement="center">
                        <h3>
                            Full Body Stretch Yoga - 30 Minute Flexibility & Deep Stretch Workout
                        </h3>
                       
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=3SZ2xVnbcxY"
                            className="player"  
                            width="100%"
                            height={600}
                        />
                        
                        </Caption>
                    </Slide>
                    <Slide image={<img alt="" src=""/>}>
                        <Caption placement="center">
                        <h3>
                            Yoga For Anxiety and Stress
                        </h3>
                        
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=hJbRpHZr_d0"
                            className="player"  
                            width="100%"
                            height={600}
                        />
                        
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
                        height: 900,
                        indicators: true,
                        interval: 2000000
                    }}
                    >
                    <Slide image={<img alt="" src=""/>}>
                        <Caption placement="center">
                        <h3>
                            Relaxing Sleep Music • Deep Sleeping Music, Relaxing Music, Stress Relief, Meditation Music (Flying)  
                        </h3>
                        
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=1ZYbU82GVz4"
                            className="player"  
                            width="100%"
                            height={600}
                        />
                       
                        </Caption>
                    </Slide>
                    <Slide image={<img alt="" src=""/>}>
                        <Caption placement="center">
                        <h3>
                        Gentle Night Rain 12 HOURS - Sleep, Insomnia, Meditation, Relaxing, Study
                        </h3>
                        
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=7JyE47-Ykjo"
                            className="player"  
                            width="100%"
                            height={600}
                            
                        />
                        
                        </Caption>
                    </Slide>
                    <Slide image={<img alt="" src=""/>}>
                        <Caption placement="center">
                        <h3>
                            Peaceful Piano & Soft Rain - Relaxing Sleep Music, A Bitter Rain
                        </h3>
                        
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=hj83cwfOF3Y"
                            className="player"  
                            width="100%"
                            height={600}
                        />
                       
                        </Caption>
                    </Slide>
                    <Slide image={<img alt="" src=""/>}>
                        <Caption placement="center">
                        <h3>
                        Ocean Sounds and Forest Nature Sound: Meditation, Sleep
                        </h3>
                        
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=ySL3NllIhfA"
                            className="player"  
                            width="100%"
                            height={600}
                        />
                        
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
                        height: 900,
                        indicators: true,
                        interval: 2000000
                    }}
                    >
                    <Slide image={<img alt="" src=""/>}>
                        <Caption placement="center">
                        <h3>
                            10-Minute Meditation For Beginners
                        </h3>
                        
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=U9YKY7fdwyg"
                            className="player"  
                            width="100%"
                            height={600}
                        />
                      
                        </Caption>
                    </Slide>
                    <Slide image={<img alt="" src=""/>}>
                        <Caption placement="center">
                        <h3>
                        5-Minute Meditation You Can Do Anywhere
                        </h3>
                        
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=inpok4MKVLM"
                            className="player"  
                            width="100%"
                            height={600}
                        />
                        
                        </Caption>
                    </Slide>
                    <Slide image={<img alt="" src=""/>}>
                        <Caption placement="center">
                        <h3>
                            Guided Meditation - Blissful Deep Relaxation
                        </h3>
                        
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=Jyy0ra2WcQQ"
                            className="player"  
                            width="100%"
                            height={600}
                        />
                        
                        </Caption>
                    </Slide>
                    <Slide image={<img alt="" src=""/>}>
                        <Caption placement="center">
                        <h3>
                        Guided Meditation for Detachment From Over-Thinking (Anxiety / OCD / Depression)
                        </h3>
                        
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=1vx8iUvfyCY"
                            className="player"  
                            width="100%"
                            height={600}
                        />
                        
                        </Caption>
                    </Slide>
                </Slider>
            </Tab>
            </Tabs>
            <Footer/>
        </div>
    );
};

export default Video;