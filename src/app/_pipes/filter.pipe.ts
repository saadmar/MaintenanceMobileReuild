import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;

    return items.filter(item => {
      return JSON.stringify(item, (key, val) => {
        if (key !== "image") return val;
      })
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
  }
}
