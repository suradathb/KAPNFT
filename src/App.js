import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ReadContract from "./components/ReadContract";
import WriteContract from "./components/WriteContract";
import Web3Service from "./components/web3.server";
import Abount from "./components/Abount";
import Example from "./components/Example";
import WriteContract721 from "./components/WriteContract721";
import ReadContract721 from "./components/ReadContract721";
import BlockchainSimulator from "./components/BlockchainSimulator";
import Hash from "./components/Hash";

class App extends React.Component {
  async componentDidMount() {
    await Web3Service.loadWeb3();
    await Web3Service.loadBlockchainData();
    await Web3Service.loadERC721();
    const balanceOf = await Web3Service.state.kmutnbToken.methods
      .balanceOf(Web3Service.state.account)
      .call({ from: Web3Service.state.account });
    const totalSupply = await Web3Service.state.kmutnbToken.methods
      .totalSupply()
      .call({ from: Web3Service.state.account });
    const name = await Web3Service.state.kmutnbToken.methods
      .name()
      .call({ from: Web3Service.state.account });

    this.setState({
      account: Web3Service.state.account,
      kmutnbToken: Web3Service.state.kmutnbToken,
      erc721:Web3Service.state.erc721Token,
      balanceOf: balanceOf,
      totalSupply: totalSupply,
      SName: name,
    });
  }
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      kmutnbToken: "",
      balanceOf: 0,
      totalSupply: 0,
      SName: "",
    };
  }
  currencyFormat(num) {
    return Intl.NumberFormat().format(num);
  }
  render() {
    return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<ReadContract />} />
          <Route path="/721" element={<ReadContract721 />} />
          <Route path="/write721" element={<WriteContract721/>}/>
          <Route path="/write" element={<WriteContract />} />
          <Route path="/erc20" element={<Abount />} />
          <Route path="/example" element={<Example />} />
          <Route path="/semorator" element={<BlockchainSimulator/>}/>
          <Route path="/hash" element={<Hash/>}/>
        </Routes>
        <Footer />
      </>
    );
  }
}

export default App;
