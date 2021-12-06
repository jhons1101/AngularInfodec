import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUsuarios'
})
export class FilterUsuariosPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    
    const result = [];
    
    for(const usu of value) {
      let nomUsu = usu.first_name.toUpperCase() + usu.last_name.toUpperCase();
      if (nomUsu.indexOf(arg.toUpperCase()) > -1) {
        result.push(usu);
      }
    }
    return result;
  }

}
