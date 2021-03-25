import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'vuela'
})
export class VuelaPipe implements PipeTransform {

    transform(val : boolean = true):string {
        return val ? "vuela" : "no vuela"
    }

}