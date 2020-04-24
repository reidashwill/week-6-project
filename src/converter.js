export class Converter{

  async apiCall() {
    try{
      let response = await fetch(`https://prime.exchangerate-api.com/v5/${process.env.API_KEY}/latest/USD`);
      let jsonifiedResponse;
      if (response.ok && response.status === 200) {
        jsonifiedResponse = await response.json();
      }else{
        
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    }catch(error){ // ADD MORE ERROR MESSAGE OPTIONS-----------------------------------------
      alert("there was an error processing your request");
    }
  }

  convert(){
    if(this.currency === "eur"){
      this.converted = (this.usd * this.eurRate);
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