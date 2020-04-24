export class Converter{

  async apiCall() {
      let response = await fetch(`https://prime.exchangerate-api.com/v5/${process.env.API_KEY}/latest/USD`);
      let jsonifiedResponse;
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
      return jsonifiedResponse;
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
  }
}