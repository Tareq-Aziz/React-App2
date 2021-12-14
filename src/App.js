
import Boxes from "./components/boxes";
import Recent from "./components/recentUsers";
import Button from "./components/recentUsers/button";
import Image from "./components/recentUsers/image";
function App() {
  return (
    <div className='App'>
      <p>
        <h2>Dashboard</h2>
      </p>
      <Boxes
        title='Daily Sells'
        updown={<Image picture='/up arrow.png' width='35px' height='35px' />}
        digits='$ 249.93'
        progress={
          <Image picture='/progress1.png' width='200px' height='40px' />
        }
      />
      <Boxes
        title='Weekly Sells'
        updown={<Image picture='/up arrow.png' width='35px' height='35px' />}
        digits='$ 1,750.35'
        progress={
          <Image picture='/progress1.png' width='200px' height='40px' />
        }
      />
      <Boxes
        title='Monthly Sells'
        updown={<Image picture='/down arrowp.png' width='35px' height='35px' />}
        digits='$ 12,350.25'
        progress={
          <Image picture='/progress2.png' width='200px' height='40px' />
        }
      />
      <Boxes
        title='Yearly Sells'
        updown={<Image picture='/up arrow.png' width='35px' height='35px' />}
        digits='$ 142,000.78'
        progress={
          <Image picture='/progress1.png' width='200px' height='40px' />
        }
      />
      <Recent />

      <Boxes
        title='Upcoming Event'
        digits='45 Competitors'
        progress='You can participate in Event'
      >
        <Button color='#30C6DC' name='36%' />
      </Boxes>
      <Boxes title='TOTAL IDEAS' digits='235' progress='None' />

      <Boxes
        title='12,281'
        updown={<Image picture='/fb.png' width='35px' height='35px' />}
        digits='+7.2% Total Likes'
        progress='© 2021 facebook.com, USA'
      />
      <Boxes
        title='11,200'
        updown={<Image picture='/twitter.png' width='35px' height='35px' />}
        digits='+6.2% Total Likes'
        progress='© 2021 twitter.com, USA'
      />
      <Boxes
        title='10,500'
        updown={<Image picture='/googlePlus.jpg' width='35px' height='35px' />}
        digits='+6.9% Total Likes'
        progress='© 2021 googlePlus.com, USA'
      />
      <Boxes
        title='10,000'
        updown={<Image picture='/instagram.jpg' width='35px' height='35px' />}
        digits='+85.0% Total Likes'
        progress='© 2021 instagram.com, USA'
      />
    </div>
  );
}

export default App;
