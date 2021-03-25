import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

    transform(val : string, enMayus: boolean = true):string {
        return enMayus ? val.toUpperCase() : val.toLowerCase()
    }

}