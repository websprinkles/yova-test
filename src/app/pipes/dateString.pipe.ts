import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { DateFormat } from '../entities/notifications';

@Pipe({
  name: 'dateString'
})
export class DateStringPipe implements PipeTransform {
  transform(date: string, args?: any): any {
    const dateFormat = DateFormat;
    return moment(date, dateFormat).format('DD.MM.yyyy');
  }
}
