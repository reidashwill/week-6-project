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
      console.log(jsonifiedResponse.conversion_rates);
      return jsonifiedResponse;
    }catch(error){ // ADD MORE ERROR MESSAGE OPTIONS-----------------------------------------
      alert("there was an error processing your request");
    }
  }

  convert(){
    console.log(this.currency);
    console.log(this.eurRate);
    console.log(this.usd);
    if(this.currency === "eur"){
      console.log("test");
      this.converted = (this.usd * this.eurRate);
      console.log(this.converted);
    }
  
    

  }
}