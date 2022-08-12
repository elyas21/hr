import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "trim",
})
export class TrimPipe implements PipeTransform {
  transform(value: string, ...args: any[]): any {
    console.log(value);

    return value.trim().slice(0, 90);
  }
}
