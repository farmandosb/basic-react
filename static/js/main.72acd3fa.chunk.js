(this["webpackJsonpmy-app1"]=this["webpackJsonpmy-app1"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),l=a(3),i=a.n(l),r=(a(15),a(4)),m=a(5),c=a(8),o=a(6),h=a(1),d=a(9),E=(a(7),a(16),/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/),u=/^((?!(0))[0-9]{8})$/,v=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;var p=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(o.a)(t).call(this,e))).state={firstname:"",lastname:"",dni:"",email:"",firstnameError:!1,lastnameError:!1,dniError:!1,emailError:!1,emptyFieldError:!0},a.handleInputChange=a.handleInputChange.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"handleInputChange",value:function(e){var t=e.target,a=t.value;switch(t.name){case"firstname":this.setState({firstname:a}),E.test(a)?this.setState({firstnameError:!1}):this.setState({firstnameError:!0});break;case"lastname":this.setState({lastname:a}),E.test(a)?this.setState({lastnameError:!1}):this.setState({lastnameError:!0});break;case"dni":if(a.length>8){var s=a.substr(0,8);this.setState({dni:s})}else this.setState({dni:a}),u.test(a)?this.setState({dniError:!1}):this.setState({dniError:!0});break;case"email":this.setState({email:a}),v.test(a)?this.setState({emailError:!1}):this.setState({emailError:!0})}}},{key:"handleSubmit",value:function(e){(this.state.firstname||this.state.lastname||this.state.dni||this.state.email)&&(this.state.emptyFieldError=!0),this.state.firstnameError||this.state.lastnameError||this.state.dniError||this.state.emailError?(alert("Please check, some data is not valid!"),e.preventDefault()):this.state.emptyFieldError?(alert("Please complete all fields"),e.preventDefault()):alert("Firstname: "+this.state.firstname+", Lastname: "+this.state.lastname+", DNI: "+this.state.dni+", Email: "+this.state.email)}},{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement("form",{onSubmit:this.handleSubmit,noValidate:!0},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-25"},n.a.createElement("label",null,"Firstname:"),n.a.createElement("p",{className:"validation-text "+(!0===this.state.firstnameError?"show":"not-show")},"Please enter a valid first name")),n.a.createElement("div",{className:"col-75"},n.a.createElement("input",{name:"firstname",className:!0===this.state.firstnameError?"invalid":"valid",type:"text",value:this.state.firstname,placeholder:"Darth",onChange:this.handleInputChange}))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-25"},n.a.createElement("label",null,"Lastname:"),n.a.createElement("p",{className:"validation-text "+(!0===this.state.lastnameError?"show":"not-show")},"Please enter a valid last name")),n.a.createElement("div",{className:"col-75"},n.a.createElement("input",{name:"lastname",className:!0===this.state.lastnameError?"invalid":"valid",type:"text",value:this.state.lastname,placeholder:"Vader",onChange:this.handleInputChange}))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-25"},n.a.createElement("label",null,"DNI:"),n.a.createElement("p",{className:"validation-text "+(!0===this.state.dniError?"show":"not-show")},8-this.state.dni.length," digits left")),n.a.createElement("div",{className:"col-75"},n.a.createElement("input",{name:"dni",className:!0===this.state.dniError?"invalid":"valid",type:"number",value:this.state.dni,placeholder:"66555444",onChange:this.handleInputChange}))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-25"},n.a.createElement("label",null,"Email:"),n.a.createElement("p",{className:"validation-text "+(!0===this.state.emailError?"show":"not-show")},"Please enter a valid email")),n.a.createElement("div",{className:"col-75"},n.a.createElement("input",{name:"email",className:!0===this.state.emailError?"invalid":"valid",type:"email",value:this.state.email,placeholder:"thesithlord@galacticempire.com",onChange:this.handleInputChange}))),n.a.createElement("input",{type:"submit",value:"SEND",className:"send"})),n.a.createElement("p",null,"v2.0.0"))}}]),t}(n.a.Component);i.a.render(n.a.createElement(p,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.72acd3fa.chunk.js.map