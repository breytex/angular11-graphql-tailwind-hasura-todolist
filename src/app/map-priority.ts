import { Pipe, PipeTransform } from '@angular/core';

const priorityMapping = {
  "0": "☕️",
  "5": "⚠️",
  "10": "🔥",
}

@Pipe({name: 'mapPriority'})
export class MapPriority implements PipeTransform {
  transform(value: string): string {
    return priorityMapping[value] || "😥"
  }
}
