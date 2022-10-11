import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  Malzemeler:any[]=[
    {ad:'kofte',adet:5},
    {ad:'tavuk',adet:5},
    {ad:'marul',adet:5},
    {ad:'tursu',adet:5},
    {ad:'sogan',adet:5},
    {ad:'domates',adet:5},
    {ad:'ekmek',adet:5},
    {ad:'sos',adet:5},
    {ad:'patatesKızartması',adet:5},
    {ad:'kola',adet:5},
  ];
  etSecimi:any;
  koftePisimi:any;
  icindekiMalzemeler:any=[];
  message:any=null;
  message2:any=null;
  message3:any=null;
  message4:any=null;
  message5:any=null;
  message6:any=null;
  message7:any=null;
  message8:any=null;
  n:any;
  

  constructor(){
  }

  ngOnInit(): void {
    
  }

  SiparisVer(){
  
    this.message='sipariş aliniyor...';
    setTimeout(()=>{this.message='siparis alindi';  this.message2="Malzemler kontrol ediliyor"},1000);
    setTimeout(()=>{this.malzemeKontrolu(); 
    if(this.etSecimi=='kofte')
    {
      this.message3='kofte hazirlaniyor '
    }
    else{this.message3='tavuk hazirlaniyor ' }  
    this.etPisir(); 
    this.HamburgerHazırlama();
    this.PatetesHazirlama();
    this.KolaHazirlama()},3000);

    
   

  }

   etPisir(){
    if(this.etSecimi=='kofte')
    {
      if(this.koftePisimi=='az'){
        setTimeout(()=>{this.message3='kofte az pişmiş olarak pişti '},2000);
      }
      if(this.koftePisimi=='orta'){
        setTimeout(()=>{this.message3='kofte orta pişmiş olarak pişti '},3000);
      }
      if(this.koftePisimi=='çok'){
        setTimeout(()=>{this.message3='kofte çok pişmiş olarak pişti ' },4000);
      }
    }
    if(this.etSecimi=='tavuk')
    {
      setTimeout(()=>{this.message3='tavuk pişti '},3000);
    }

   
  }


  async HamburgerHazırlama()
  {
    this.message4='hamburger hazirlaniyor '
    return await setTimeout(()=>{this.message4='  hamburger hazirlandi'},3000);
  }

  async PatetesHazirlama()
  {
    this.message5='patates kızartması hazirlaniyor '
    return await setTimeout(()=>{this.message5='  patates kızartması hazirlandi';this.tepsiHazirlama()
    this.musteriyeServisEt()},5000);
  }

  async KolaHazirlama()
  {
    this.message6='kola hazirlaniyor '
    return await setTimeout(()=>{this.message6='  kola hazirlandi'},2000);
  }

  tepsiHazirlama()
  {
    this.message7='Tepsi hazırlanıyor'
    setTimeout(()=>{this.message7='tepsi hazirlandi'},1000);
  }

  musteriyeServisEt()
  {
    this.message8='müşteriye teslim ediliyor'
    setTimeout(()=>{this.message8='müşteriye teslim edildi'},1000);
  }

  malzemeKontrolu(){
    var CheckBoxMarul=<HTMLInputElement>document.getElementById("marul");
    var CheckBoxDomates=<HTMLInputElement>document.getElementById("domates");
    var CheckBoxTursu=<HTMLInputElement>document.getElementById("tursu");
    var CheckBoxSogan=<HTMLInputElement>document.getElementById("sogan");

    if(this.etSecimi=='kofte')
    {
      if(this.Malzemeler[0].adet>0){
        this.icindekiMalzemeler[0]+='kofte'
      }
      else{

      }
    } 

    if(this.etSecimi=='tavuk')
    {
      if(this.Malzemeler[1].adet>0){
        this.icindekiMalzemeler[0]+='tavuk'
      }
      else{
        
      }
    } 

    if(CheckBoxMarul.checked)
    {
      if(this.Malzemeler[2].adet>0)
      {
        this.icindekiMalzemeler[1]+='marul'
      }
      else{

      }
    } 

    if(CheckBoxTursu.checked)
    {
      if(this.Malzemeler[3].adet>0)
      {
        this.icindekiMalzemeler[2]+='tursu'
      }
      else{
        
      }
    }

    if(CheckBoxSogan.checked)
    {
      if(this.Malzemeler[4].adet>0)
      {
        this.icindekiMalzemeler[3]+='sogan'
      }
      else{
        
      }
    }

    if(CheckBoxDomates.checked)
    {
      if(this.Malzemeler[5].adet>0)
      {
        this.icindekiMalzemeler[4]+='domates'
      }
      else{
        
      }
    }

    if(this.Malzemeler[6]>0)
    {
      this.icindekiMalzemeler[5]+='ekmek'
    }
    else{}

    if(this.Malzemeler[7]>0)
    {
      this.icindekiMalzemeler[6]+='sos'
    }
    else{}

    if(this.Malzemeler[8]>0)
    {
      this.icindekiMalzemeler[7]+='patateskızartması'
    }
    else{}

    if(this.Malzemeler[9]>0)
    {
      this.icindekiMalzemeler[8]+='kola'
    }
    else{}

    this.message2='malzemeler kontrol edildi'
  }
}