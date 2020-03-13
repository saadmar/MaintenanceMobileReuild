import { PipeTransform, Pipe } from "@angular/core";
import { Request } from "../_models";

@Pipe({
  name: "status"
})
export class StatusPipe implements PipeTransform {
  transform(items: Request[], status: string) {
    if (!items) return [];
    switch (status) {
      case "all":
        return items;
      case "open":
        return items.filter(item => item.status == "open");
      case "concept":
        return items.filter(item => item.status == "concept");
      case "closed":
        return items.filter(item => item.status == "closed");
      default:
        return items;
    }
  }
}
