import "./App.css";
import Greetings from "./components/Greetings";
import IdCard from "./components/IdCard";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";
import CreditCard from "./components/CreditCard";

function App() {
  return (
    <div className="App">
      {/* <h1 className="h1"> IdCard</h1>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date("1992-07-15")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <h1 className="h1">Greetings</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <h1 className="h1"> Random Number</h1>
      <div className="numbers">
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>

      <h1 className="h1"> RGB </h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <h1 className="h1"> Credit Cards</h1> */}

      <div className="card-container">
        <CreditCard
          type="Visa"
          number="1234567812345678"
          expirationMonth={12}
          expirationYear={2025}
          bank="Bank A"
          owner="John Doe"
          bgColor="#11aa99"
          color="#ffffff"
        />
        <CreditCard
          type="MasterCard"
          number="8765432187654321"
          expirationMonth={11}
          expirationYear={2024}
          bank="Bank B"
          owner="Jane Doe"
          bgColor="#ff5555"
          color="#000000"
        />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>
    </div>
  );
}

export default App;
