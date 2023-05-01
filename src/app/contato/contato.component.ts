import { Component, OnInit } from '@angular/core';
import { FormBuilder, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent  implements OnInit {
  formContato = this.fb.group({
    nome: ["", [
      //Aqui estamos validando o campo nome com no minimo 4 caracteres
      Validators.minLength(4),
      //Validando campo nome como obrigatório
      Validators.required
    ]],
    assunto: ["", [
      Validators.minLength(10),
      Validators.required
    ]],
    telefone: ["", [
      Validators.minLength(11)
    ]],
    email: ["", [
      Validators.email,
      Validators.required
    ]],
    mensagem: ["", [
      Validators.minLength(20),
      Validators.required
    ]]
  });
  
  constructor(
    private fb: FormBuilder
  ) { }

ngOnInit(): void {

}

enviarFormulario() {
  alert("A mensagem foi enviada!");
  this.formContato.reset();
}

}
