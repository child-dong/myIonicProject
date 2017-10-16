import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	datas:any;

  constructor(public navCtrl: NavController) {
		
	this.datas = this.getData();
	console.log(this.datas)
  
  };

  getData() {
		var dat;
  	var xml = null;
		if(window.XMLHttpRequest){
			xml = new XMLHttpRequest();
		}else{
			xml = new ActiveXobject("Microsoft.XMLHttp");
		}
		xml.open('get','https://api.imjad.cn/cloudmusic/?type=search&s=fade',true);

		xml.send();
		xml.onreadystatechange = function(){
			if(xml.readyState == 4){
				if(xml.status == 200){
					dat = JSON.parse(xml.responseText);
				}else{
					alert(xml.status);
				}

			}
		}
		xml.onreadystatechange();
		console.log(dat)
		return dat;
  }


}

