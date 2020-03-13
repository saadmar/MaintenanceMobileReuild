import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "fav"
})
export class FavouritsPipe implements PipeTransform {
  transform(items: any[], apply: boolean): any[] {
    if (!items) return [];
    if (!apply || !items[0].fav) return items;

    return items.filter(item => item["fav"] == true);
  }
}
