export class Converter{

  async apiCall() {
      let response = await fetch(`https://prime.exchangerate-api.com/v5/${process.env.API_KEY}/latest/USD`);
      let jsonifiedResponse;
      let data;
      if(data === undefined){
        if (response.ok && response.status === 200) {
          jsonifiedResponse = await response.json();
        }else{
          jsonifiedResponse = false;
        }
        if(jsonifiedResponse.error === "invalid-key"){
          alert("Please verify that you are using a valid API key");
        }else if(jsonifiedResponse.error === "unknown-code"){
          alert("This currency is not available for conversion");
        }else if(jsonifiedResponse.error === "malformed-request" || jsonifiedResponse.error === "quota-reached"){
          alert("Something went wrong!  Please reach out to us at: https://github.com/reidashwill/week-6-project/issues");
        }
        sessionStorage.setItem('dataStored', jsonifiedResponse);
          data = sessionStorage.getItem('dataStored');
          console.log(data);
        return jsonifiedResponse;
      }else{
        console.log(data)
        return data;
      }
  }
  async bitCoinApiCall() {
    let response2 = await fetch(`https://blockchain.info/ticker`);
    let jsonifiedResponse2;
    if (response2.ok && response2.status === 200) {
      jsonifiedResponse2 = await response2.json();
    }else{
      jsonifiedResponse2 = false;
    }
    return jsonifiedResponse2;
}


  convert(){
    if(this.currency === "eur"){
      this.converted = (this.usd * this.eurRate);
      console.log(this.converted);
    }else if(this.currency === "cad"){
      this.converted = (this.usd * this.cadRate);
    }else if(this.currency === "dkk"){
      this.converted = (this.usd * this.dkkRate);
    }else if(this.currency === "egp"){
      this.converted = (this.usd * this.egpRate);
    }else if(this.currency === "gbp"){
      this.converted = (this.usd * this.gbpRate);
    }else if(this.currency === "nok"){
      this.converted = (this.usd * this.nokRate);
    }else if(this.currency === "sek"){
      this.converted = (this.usd * this.sekRate);
    }else if(this.currency === "rub"){
      this.converted = (this.usd * this.rubRate);
    }
    this.bitCoinPotential =  Math.round((this.usd * (1 / this.btcPrice)) * 100000)/100000
    console.log(this.bitCoinPotential);
  }
}