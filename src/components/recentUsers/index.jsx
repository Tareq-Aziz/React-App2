import React, { Component } from "react";
import Divs from "./columDivs";
import Image from "./image"
class Recent extends Component {

  render() {
    let time2 = new Date().toLocaleString();
        return (
          <div
            style={{
              width: '810px',
              height: '370px',
              backgroundColor: '#FFFFFF',
              margin: '35px 35px 0px 40px',
              float: 'left',
            }}
          >
            {/* <h2>{time2} </h2> */}
            <Divs
              pic={<Image picture='/pic1.jpg' width='35px' height='35px' />}
              heading='Robart Jhon'
              text='Address writing'
              time={time2}
            />
            <Divs
              pic={<Image picture='/pic2.jpg' width='35px' height='35px' />}
              heading='Sen Klinton'
              text='Address writing'
              time={time2}
            />
            <Divs
              pic={<Image picture='/pic3.jpg' width='35px' height='35px' />}
              heading='Simons'
              text='Address writing'
              time={time2}
            />
            <Divs
              pic={<Image picture='/pic4.jpg' width='35px' height='35px' />}
              heading='Jhon Dav'
              text='Address writing'
              time={time2}
            />
            <Divs
              pic={<Image picture='/pic5.jpg' width='35px' height='35px' />}
              heading='Natalia Rose'
              text='Address writing'
              time={time2}
            />
            <Divs
              pic={<Image picture='/pic6.jpg' width='35px' height='35px' />}
              heading='Sophia'
              text='Address writing'
              time={time2}
            />
          </div>
        );
    }
}
export default Recent;