import { Transition, animated, config } from "react-spring";
import React, { Component } from "react";
import Textani from "./Textani";
import "./stylee2.css";
import { FaGlasses } from "react-icons/fa";

export default class Toggle extends Component {
  constructor() {
    super();

    this.state = {
      toggle: 0,
    };
  }

  render() {
    const { toggle } = this.state;
    return (
      <div className="mac">
        <Transition
          items={toggle}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
          reverse={toggle}
          delay={200}
          config={config.molasses}
          onRest={() =>
            this.setState({
              toggle: toggle === 18 ? 0 : toggle + 1,
            })
          }
        >
          {({ opacity }, item) => (
            <animated.div
              style={{
                position: "absolute",
                opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
              }}
            >
              {toggle === 0 && <Textani data={"Mentors"} />}
              {toggle === 1 && (
                <div className="hrflex">
                  <div className="crdteam">
                    <div className="igg2" />
                    <h4 className="crdtext crdtext1">Prerna Yadav</h4>
                    {/* <h4 className="crdtext crdtext2">Mentor</h4> */}
                  </div>

                  <div className="crdteam">
                    <div className="igg1" />
                    <h4 className="crdtext crdtext1">Sahib Preet Singh</h4>
                    {/* <h4 className="crdtext crdtext2">Mentor</h4> */}
                  </div>
                </div>
              )}
              {toggle === 2 && (
                <Textani data={"Section Student Representatives"} />
              )}
              {toggle === 3 && (
                <div className="hrflex">
                  <div className="crdteam">
                    <div className="igg4" />
                    <h4 className="crdtext crdtext1">Rishabh Jha</h4>
                    {/* <h4 className="crdtext crdtext3">Section Student Representative</h4> */}
                  </div>
                  <div className="crdteam">
                    <div className="igg3" />
                    <h4 className="crdtext crdtext1">Spruha Kar</h4>
                    {/* <h4 className="crdtext crdtext3">Section Student Representative</h4> */}
                  </div>
                </div>
              )}
              {toggle === 4 && (
                <Textani data={"Subsection Student Representative"} />
              )}
              {toggle === 5 && (
                <div className="hrflex">
                  <div className="crdteam">
                    <div className="igg30" />
                    <h4 className="crdtext crdtext1">Nyasha</h4>
                    <h6 className="bluebadge1">Chandigarh</h6>
                    {/* <h4 className="crdtext crdtext3">Subsection Representative</h4> */}
                  </div>
                  <div className="crdteam">
                    <div className="igg29" />
                    <h4 className="crdtext crdtext1">Aradhna</h4>
                    <h6 className="bluebadge1">Rajasthan</h6>
                    {/* <h4 className="crdtext crdtext3">Subsection Representative</h4> */}
                  </div>
                </div>
              )}
              {toggle === 6 && <Textani data={"Women In Engineering"} />}
              {toggle === 7 && (
                <div className="hrflex">
                   <div className="crdteam" style={{marginTop:"-200px"}}>
                    <div className="igg23" />
                    <h4 className="crdtext crdtext1">Anamika Kumari</h4>
                    <h6 className="bluebadge1">Lead</h6>
                    {/* <h4 className="crdtext crdtext2">WIE</h4> */}
                  </div>
                  <div className="crdteam">
                    <div className="igg32" />
                    <h4 className="crdtext crdtext1">Mallika</h4>
                    {/* <h4 className="crdtext crdtext2">WIE</h4> */}
                  </div>
                  <div className="crdteam">
                    <div className="igg19" />
                    <h4 className="crdtext crdtext1">Garima Sagar</h4>
                    {/* <h4 className="crdtext crdtext2">WIE</h4> */}
                  </div>
                  <div className="crdteam">
                    <div className="igg26" />
                    <h4 className="crdtext crdtext1">Vanshika Gupta</h4>
                    {/* <h4 className="crdtext crdtext2">WIE</h4> */}
                  </div>
                  <div className="crdteam">
                    <div className="igg26" />
                    <h4 className="crdtext crdtext1">Daniyal Jawed</h4>
                    {/* <h4 className="crdtext crdtext2">WIE</h4> */}
                  </div>
                  
                </div>
              )}
              {toggle === 8 && <Textani data={"Networking And Social Media"} />}
              {toggle === 9 && (
                <div className="hrflex">
                   <div className="crdteam" style={{marginTop:"38px"}}>
                    <div className="igg20" />
                    <h4 className="crdtext crdtext1">Anhad Grover</h4>
                    <h6 className="bluebadge1">Lead</h6>
                    {/* <h4 className="crdtext crdtext2">TAC</h4> */}
                  </div>
                  <div className="crdteam">
                    <div className="igg15" />
                    <h4 className="crdtext crdtext1">Gurnoor Kaur</h4>
                    {/* <h4 className="crdtext crdtext2">TAC</h4> */}
                  </div>
                  <div className="crdteam">
                    <div className="igg100" />
                    <h4 className="crdtext crdtext1">Daksh</h4>
                    {/* <h4 className="crdtext crdtext2">TAC</h4> */}
                  </div>
                </div>
              )}
              {toggle === 10 && <Textani data={"Graphic Designing"} />}
              {toggle === 11 && (
                <div className="hrflex">
                   <div className="crdteam" style={{marginTop:"-100px"}}>
                    <div className="igg34" />
                    <h4 className="crdtext crdtext1">Rupin Pratap Singh</h4>
                    <h6 className="bluebadge1">Lead</h6>
                    {/* <h4 className="crdtext crdtext3">Graphic Designing</h4> */}
                  </div>
                  <div className="crdteam">
                    <div className="igg21" />
                    <h4 className="crdtext crdtext1">Ghanshyam</h4>
                    {/* <h4 className="crdtext crdtext3">Graphic Designing</h4> */}
                  </div>
                  <div className="crdteam">
                    <div className="igg28" />
                    <h4 className="crdtext crdtext1">Angadeep Singh</h4>
                    {/* <h4 className="crdtext crdtext3">Graphic Designing</h4> */}
                  </div>
                  <div className="crdteam">
                    <div className="igg28" />
                    <h4 className="crdtext crdtext1">Aparna Sisodia</h4>
                    {/* <h4 className="crdtext crdtext3">Graphic Designing</h4> */}
                  </div>
                </div>
              )}
              {toggle === 12 && <Textani data={"Editorial"} />}
              {toggle === 13 && (
                <div className="hrflex">
                   <div className="crdteam" style={{marginTop:"-100px"}}>
                    <div className="igg33" />
                    <h4 className="crdtext crdtext1">Suyash Sharthi</h4>
                    <h6 className="bluebadge1">Lead</h6>
                    {/* <h4 className="crdtext crdtext3">Editorial</h4> */}
                  </div>

                  <div className="crdteam">
                    <div className="igg11" />
                    <h4 className="crdtext crdtext1">Falkeet Singh</h4>
                    {/* <h4 className="crdtext crdtext3">Editorial</h4> */}
                  </div>

                  <div className="crdteam">
                    <div className="igg18" />
                    <h4 className="crdtext crdtext1">Tanuj Goel</h4>
                    {/* <h4 className="crdtext crdtext3">Editorial</h4> */}
                  </div>

                  <div className="crdteam">
                    <div className="igg101" />
                    <h4 className="crdtext crdtext1">Ammolica</h4>
                    {/* <h4 className="crdtext crdtext3">Editorial</h4> */}
                  </div>
                </div>
              )}
              {toggle === 14 && <Textani data={"Industrial Collaboration Committee"} />}
              {toggle === 15 && (
                <div className="hrflex">
                  <div className="crdteam">
                    <div className="igg25" />
                    <h4 className="crdtext crdtext1">Jonah Christopher</h4>
                    <h6 className="bluebadge1">Lead</h6>
                    {/* <h4 className="crdtext crdtext3">Web Administrator</h4> */}
                  </div>
                  <div className="crdteam">
                    <div className="igg38" />
                    <h4 className="crdtext crdtext1">Japjot Singh</h4>
                    {/* <h4 className="crdtext crdtext3">Web Administrator</h4> */}
                  </div>
                  <div className="crdteam">
                    <div className="igg102" />
                    <h4 className="crdtext crdtext1">Ansh Gupta</h4>
                    {/* <h4 className="crdtext crdtext3">Web Administrator</h4> */}
                  </div>
                </div>
              )}
            </animated.div>
          )}
        </Transition>
      </div>
    );
  }
}
